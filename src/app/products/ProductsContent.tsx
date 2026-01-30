'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Filter,
    Grid,
    List,
    ChevronDown,
    X,
    SlidersHorizontal
} from 'lucide-react';
import { ProductCard } from '@/components';
import { products, categories, brands, filterProducts, sortProducts, SortType } from '@/data/products';

export default function ProductsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const searchQuery = searchParams.get('search');

    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState<SortType>('featured');

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [minRating, setMinRating] = useState<number | null>(null);
    const [inStockOnly, setInStockOnly] = useState(false);

    const sortOptions = [
        { value: 'featured', label: 'الأكثر تميزاً' },
        { value: 'price-asc', label: 'السعر: من الأقل' },
        { value: 'price-desc', label: 'السعر: من الأعلى' },
        { value: 'rating', label: 'الأعلى تقييماً' },
        { value: 'newest', label: 'الأحدث' },
    ];

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = filterProducts(
            selectedCategory || undefined,
            priceRange,
            selectedBrands,
            minRating || undefined,
            inStockOnly
        );

        // Apply search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.nameEn.toLowerCase().includes(query) ||
                p.brand.toLowerCase().includes(query)
            );
        }

        return sortProducts(result, sortBy);
    }, [selectedCategory, selectedBrands, priceRange, minRating, inStockOnly, sortBy, searchQuery]);

    const handleBrandToggle = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const clearFilters = () => {
        setSelectedCategory(null);
        setSelectedBrands([]);
        setPriceRange([0, 1000]);
        setMinRating(null);
        setInStockOnly(false);
    };

    const activeFiltersCount = [
        selectedCategory,
        selectedBrands.length > 0,
        priceRange[0] > 0 || priceRange[1] < 1000,
        minRating,
        inStockOnly
    ].filter(Boolean).length;

    return (
        <div className="min-h-screen bg-bg-primary">
            {/* Page Header */}
            <div className="bg-bg-secondary border-b border-border-default">
                <div className="container mx-auto px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">
                            {selectedCategory
                                ? categories.find(c => c.slug === selectedCategory)?.name
                                : searchQuery
                                    ? `نتائج البحث: "${searchQuery}"`
                                    : 'جميع المنتجات'
                            }
                        </h1>
                        <p className="text-text-secondary">
                            {filteredProducts.length} منتج متوفر
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-6">
                            {/* Filter Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5" />
                                    الفلاتر
                                </h3>
                                {activeFiltersCount > 0 && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-neon-purple hover:text-neon-cyan transition-colors"
                                    >
                                        مسح الكل
                                    </button>
                                )}
                            </div>

                            {/* Categories */}
                            <div className="bg-bg-card border border-border-default rounded-xl p-4">
                                <h4 className="font-semibold text-white mb-3">الفئات</h4>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${!selectedCategory
                                            ? 'bg-neon-purple text-white'
                                            : 'text-text-secondary hover:bg-bg-hover'
                                            }`}
                                    >
                                        جميع الفئات
                                    </button>
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.slug)}
                                            className={`w-full text-right px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${selectedCategory === cat.slug
                                                ? 'bg-neon-purple text-white'
                                                : 'text-text-secondary hover:bg-bg-hover'
                                                }`}
                                        >
                                            {cat.name}
                                            <span className="text-xs opacity-60">{cat.productCount}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="bg-bg-card border border-border-default rounded-xl p-4">
                                <h4 className="font-semibold text-white mb-3">نطاق السعر</h4>
                                <div className="flex items-center gap-2 mb-4">
                                    <input
                                        type="number"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                        className="input w-full text-center text-sm"
                                        placeholder="من"
                                    />
                                    <span className="text-text-muted">-</span>
                                    <input
                                        type="number"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                        className="input w-full text-center text-sm"
                                        placeholder="إلى"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    className="w-full accent-neon-purple"
                                />
                            </div>

                            {/* Brands */}
                            <div className="bg-bg-card border border-border-default rounded-xl p-4">
                                <h4 className="font-semibold text-white mb-3">الماركات</h4>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {brands.slice(0, 10).map(brand => (
                                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={selectedBrands.includes(brand)}
                                                onChange={() => handleBrandToggle(brand)}
                                                className="form-checkbox w-4 h-4 rounded border-border-default bg-bg-tertiary text-neon-purple focus:ring-neon-purple"
                                            />
                                            <span className="text-text-secondary hover:text-white transition-colors text-sm">
                                                {brand}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="bg-bg-card border border-border-default rounded-xl p-4">
                                <h4 className="font-semibold text-white mb-3">التقييم</h4>
                                <div className="space-y-2">
                                    {[4, 3, 2, 1].map(rating => (
                                        <button
                                            key={rating}
                                            onClick={() => setMinRating(minRating === rating ? null : rating)}
                                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${minRating === rating
                                                ? 'bg-neon-purple text-white'
                                                : 'text-text-secondary hover:bg-bg-hover'
                                                }`}
                                        >
                                            <span className="text-yellow-400">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
                                            <span className="text-sm">وأعلى</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* In Stock */}
                            <div className="bg-bg-card border border-border-default rounded-xl p-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={inStockOnly}
                                        onChange={(e) => setInStockOnly(e.target.checked)}
                                        className="form-checkbox w-4 h-4 rounded border-border-default bg-bg-tertiary text-neon-purple focus:ring-neon-purple"
                                    />
                                    <span className="text-white font-medium">متوفر فقط</span>
                                </label>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-bg-card border border-border-default rounded-xl">
                            {/* Mobile Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(true)}
                                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-bg-tertiary border border-border-default rounded-lg text-text-secondary hover:text-white transition-colors"
                            >
                                <Filter className="w-4 h-4" />
                                الفلاتر
                                {activeFiltersCount > 0 && (
                                    <span className="w-5 h-5 bg-neon-purple text-white text-xs rounded-full flex items-center justify-center">
                                        {activeFiltersCount}
                                    </span>
                                )}
                            </button>

                            {/* Sort */}
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortType)}
                                    className="appearance-none px-4 py-2 pl-10 bg-bg-tertiary border border-border-default rounded-lg text-text-secondary hover:text-white focus:outline-none focus:border-neon-purple cursor-pointer"
                                >
                                    {sortOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                            </div>

                            {/* View Mode */}
                            <div className="hidden sm:flex items-center gap-1 bg-bg-tertiary rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-neon-purple text-white' : 'text-text-secondary hover:text-white'
                                        }`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-neon-purple text-white' : 'text-text-secondary hover:text-white'
                                        }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Active Filters */}
                        {activeFiltersCount > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedCategory && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/20 border border-neon-purple/30 rounded-full text-sm text-neon-purple">
                                        {categories.find(c => c.slug === selectedCategory)?.name}
                                        <button onClick={() => setSelectedCategory(null)}>
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                )}
                                {selectedBrands.map(brand => (
                                    <span key={brand} className="inline-flex items-center gap-2 px-3 py-1 bg-neon-cyan/20 border border-neon-cyan/30 rounded-full text-sm text-neon-cyan">
                                        {brand}
                                        <button onClick={() => handleBrandToggle(brand)}>
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                ))}
                                {minRating && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-sm text-yellow-400">
                                        {minRating}+ نجوم
                                        <button onClick={() => setMinRating(null)}>
                                            <X className="w-3 h-3" />
                                        </button>
                                    </span>
                                )}
                            </div>
                        )}

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className={`products-grid ${viewMode === 'list' ? 'grid-cols-1' : ''}`}>
                                {filteredProducts.map((product, index) => (
                                    <ProductCard key={product.id} product={product} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <div className="w-24 h-24 mx-auto mb-6 bg-bg-tertiary rounded-full flex items-center justify-center">
                                    <Filter className="w-10 h-10 text-text-muted" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">لا توجد منتجات</h3>
                                <p className="text-text-secondary mb-6">
                                    لم نجد منتجات تطابق معايير البحث
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="btn btn-primary"
                                >
                                    مسح الفلاتر
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setShowFilters(false)}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="absolute top-0 left-0 h-full w-full max-w-sm bg-bg-secondary border-r border-border-default overflow-y-auto"
                    >
                        <div className="p-4 border-b border-border-default flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">الفلاتر</h3>
                            <button onClick={() => setShowFilters(false)}>
                                <X className="w-6 h-6 text-text-secondary" />
                            </button>
                        </div>

                        {/* Categories */}
                        <div className="p-4 border-b border-border-default">
                            <h4 className="font-semibold text-white mb-3">الفئات</h4>
                            <div className="space-y-2">
                                <button
                                    onClick={() => { setSelectedCategory(null); setShowFilters(false); }}
                                    className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${!selectedCategory ? 'bg-neon-purple text-white' : 'text-text-secondary'
                                        }`}
                                >
                                    جميع الفئات
                                </button>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => { setSelectedCategory(cat.slug); setShowFilters(false); }}
                                        className={`w-full text-right px-3 py-2 rounded-lg transition-colors ${selectedCategory === cat.slug ? 'bg-neon-purple text-white' : 'text-text-secondary'
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Apply Filters */}
                        <div className="p-4">
                            <button
                                onClick={() => setShowFilters(false)}
                                className="btn btn-primary w-full"
                            >
                                عرض {filteredProducts.length} منتج
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
