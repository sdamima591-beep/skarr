'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    ShoppingCart,
    Heart,
    User,
    Menu,
    X,
    ChevronDown,
    Phone
} from 'lucide-react';
import { useCartStore, useWishlistStore, useSearchStore, useUIStore } from '@/store';
import { categories } from '@/data/products';
import SearchModal from './SearchModal';
import CartDrawer from './CartDrawer';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const { isMobileMenuOpen, setMobileMenuOpen, isCartOpen, setCartOpen } = useUIStore();
    const { items: cartItems } = useCartStore();
    const { items: wishlistItems } = useWishlistStore();
    const { isOpen: isSearchOpen, setIsOpen: setSearchOpen } = useSearchStore();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'الرئيسية' },
        { href: '/products', label: 'المنتجات', hasDropdown: true },
        { href: '/categories', label: 'الفئات' },
        { href: '/offers', label: 'العروض' },
        { href: '/about', label: 'من نحن' },
        { href: '/contact', label: 'تواصل معنا' },
    ];

    return (
        <>
            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-center py-2 px-4 text-sm font-medium">
                <span>🎉 خصم 20% على جميع الكاميرات! استخدم كود: </span>
                <span className="font-bold bg-white/20 px-2 py-0.5 rounded">SKER20</span>
            </div>

            {/* Main Header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-bg-primary/95 backdrop-blur-lg shadow-lg border-b border-border-default'
                        : 'bg-bg-primary border-b border-border-default'
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                            </div>
                            <span className="text-2xl font-bold gradient-text hidden sm:block">SKER</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="relative"
                                    onMouseEnter={() => link.hasDropdown && setShowCategories(true)}
                                    onMouseLeave={() => link.hasDropdown && setShowCategories(false)}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 px-4 py-2 text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-bg-tertiary"
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                    </Link>

                                    {/* Categories Dropdown */}
                                    {link.hasDropdown && (
                                        <AnimatePresence>
                                            {showCategories && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute top-full right-0 mt-2 w-64 bg-bg-card border border-border-default rounded-xl shadow-2xl overflow-hidden z-50"
                                                >
                                                    <div className="p-2">
                                                        {categories.map((cat) => (
                                                            <Link
                                                                key={cat.id}
                                                                href={`/products?category=${cat.slug}`}
                                                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-bg-hover transition-colors group"
                                                            >
                                                                <div className="w-10 h-10 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-cyan/30 transition-colors">
                                                                    <span className="text-neon-cyan">📷</span>
                                                                </div>
                                                                <div>
                                                                    <p className="text-white font-medium">{cat.name}</p>
                                                                    <p className="text-text-muted text-sm">{cat.productCount} منتج</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Search Button */}
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="p-2.5 rounded-xl bg-bg-tertiary hover:bg-bg-hover border border-border-default hover:border-neon-purple transition-all"
                                aria-label="بحث"
                            >
                                <Search className="w-5 h-5 text-text-secondary" />
                            </button>

                            {/* Wishlist */}
                            <Link
                                href="/wishlist"
                                className="relative p-2.5 rounded-xl bg-bg-tertiary hover:bg-bg-hover border border-border-default hover:border-neon-purple transition-all hidden sm:flex"
                            >
                                <Heart className="w-5 h-5 text-text-secondary" />
                                {wishlistItems.length > 0 && (
                                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-neon-purple text-white text-xs rounded-full flex items-center justify-center font-bold">
                                        {wishlistItems.length}
                                    </span>
                                )}
                            </Link>

                            {/* Cart */}
                            <button
                                onClick={() => setCartOpen(true)}
                                className="relative p-2.5 rounded-xl bg-bg-tertiary hover:bg-bg-hover border border-border-default hover:border-neon-purple transition-all"
                                aria-label="السلة"
                            >
                                <ShoppingCart className="w-5 h-5 text-text-secondary" />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-xs rounded-full flex items-center justify-center font-bold">
                                        {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                                    </span>
                                )}
                            </button>

                            {/* Account */}
                            <Link
                                href="/account"
                                className="p-2.5 rounded-xl bg-bg-tertiary hover:bg-bg-hover border border-border-default hover:border-neon-purple transition-all hidden sm:flex"
                            >
                                <User className="w-5 h-5 text-text-secondary" />
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2.5 rounded-xl bg-bg-tertiary hover:bg-bg-hover border border-border-default transition-all"
                                aria-label="القائمة"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5 text-text-secondary" />
                                ) : (
                                    <Menu className="w-5 h-5 text-text-secondary" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-bg-secondary border-t border-border-default"
                        >
                            <div className="container mx-auto px-4 py-4">
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="px-4 py-3 text-text-secondary hover:text-white hover:bg-bg-tertiary rounded-lg transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <hr className="my-2 border-border-default" />
                                    <Link
                                        href="/wishlist"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white hover:bg-bg-tertiary rounded-lg transition-colors"
                                    >
                                        <Heart className="w-5 h-5" />
                                        المفضلة ({wishlistItems.length})
                                    </Link>
                                    <Link
                                        href="/account"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white hover:bg-bg-tertiary rounded-lg transition-colors"
                                    >
                                        <User className="w-5 h-5" />
                                        حسابي
                                    </Link>
                                    <a
                                        href="tel:+9647700000000"
                                        className="flex items-center gap-3 px-4 py-3 text-neon-cyan hover:bg-bg-tertiary rounded-lg transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        اتصل بنا
                                    </a>
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} />

            {/* Cart Drawer */}
            <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}
