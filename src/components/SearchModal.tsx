'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowLeft } from 'lucide-react';
import { searchProducts } from '@/data/products';
import { Product } from '@/types';
import Image from 'next/image';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const router = useRouter();

    // Debounced search
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const timer = setTimeout(() => {
            setIsSearching(true);
            const searchResults = searchProducts(query);
            setResults(searchResults.slice(0, 6));
            setIsSearching(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    const handleProductClick = (slug: string) => {
        onClose();
        setQuery('');
        router.push(`/products/${slug}`);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onClose();
            router.push(`/products?search=${encodeURIComponent(query)}`);
            setQuery('');
        }
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, handleKeyDown]);

    const popularSearches = [
        'كاميرا 4K',
        'ساعة ذكية',
        'جرس الباب',
        'حساس حركة',
        'نظام إنذار'
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-8"
                    >
                        <div className="max-w-2xl mx-auto bg-bg-card border border-border-default rounded-2xl shadow-2xl overflow-hidden">
                            {/* Search Input */}
                            <form onSubmit={handleSearchSubmit} className="relative">
                                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-text-muted" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="ابحث عن منتج..."
                                    autoFocus
                                    className="w-full bg-transparent text-white text-lg py-5 px-14 border-b border-border-default focus:outline-none focus:border-neon-purple transition-colors placeholder:text-text-muted"
                                />
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-bg-hover transition-colors"
                                >
                                    <X className="w-5 h-5 text-text-secondary" />
                                </button>
                            </form>

                            {/* Content */}
                            <div className="max-h-[60vh] overflow-y-auto">
                                {/* Loading */}
                                {isSearching && (
                                    <div className="p-8 text-center">
                                        <div className="spinner mx-auto"></div>
                                    </div>
                                )}

                                {/* Results */}
                                {!isSearching && results.length > 0 && (
                                    <div className="p-4">
                                        <p className="text-text-muted text-sm mb-3">
                                            {results.length} نتيجة
                                        </p>
                                        <div className="space-y-2">
                                            {results.map((product) => (
                                                <motion.button
                                                    key={product.id}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    onClick={() => handleProductClick(product.slug)}
                                                    className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-bg-hover transition-colors text-right"
                                                >
                                                    <div className="w-16 h-16 bg-bg-tertiary rounded-lg overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={product.images[0]}
                                                            alt={product.name}
                                                            width={64}
                                                            height={64}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-white font-medium truncate">
                                                            {product.name}
                                                        </p>
                                                        <p className="text-neon-cyan font-bold">
                                                            ${product.price}
                                                        </p>
                                                    </div>
                                                    <ArrowLeft className="w-5 h-5 text-text-muted" />
                                                </motion.button>
                                            ))}
                                        </div>

                                        {/* View All Results */}
                                        <button
                                            onClick={() => handleSearchSubmit({ preventDefault: () => { } } as React.FormEvent)}
                                            className="w-full mt-4 py-3 text-center text-neon-purple hover:text-neon-cyan transition-colors font-medium"
                                        >
                                            عرض جميع النتائج
                                        </button>
                                    </div>
                                )}

                                {/* No Results */}
                                {!isSearching && query && results.length === 0 && (
                                    <div className="p-8 text-center">
                                        <p className="text-text-muted">
                                            لا توجد نتائج لـ "{query}"
                                        </p>
                                    </div>
                                )}

                                {/* Popular Searches */}
                                {!query && (
                                    <div className="p-4">
                                        <p className="text-text-muted text-sm mb-3">عمليات بحث شائعة</p>
                                        <div className="flex flex-wrap gap-2">
                                            {popularSearches.map((term) => (
                                                <button
                                                    key={term}
                                                    onClick={() => setQuery(term)}
                                                    className="px-4 py-2 bg-bg-tertiary hover:bg-bg-hover border border-border-default hover:border-neon-purple rounded-full text-sm text-text-secondary hover:text-white transition-all"
                                                >
                                                    {term}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
