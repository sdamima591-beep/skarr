'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { ProductCard } from '@/components';
import { useWishlistStore } from '@/store';

export default function WishlistPage() {
    const { items, clearWishlist } = useWishlistStore();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-bg-tertiary rounded-full flex items-center justify-center">
                        <Heart className="w-16 h-16 text-text-muted" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">قائمة المفضلة فارغة</h1>
                    <p className="text-text-secondary mb-8">
                        أضف منتجات للمفضلة لتتمكن من إيجادها بسهولة لاحقاً
                    </p>
                    <Link href="/products" className="btn btn-primary">
                        تصفح المنتجات
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-primary py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold">
                            <Heart className="inline-block w-8 h-8 text-red-500 ml-2" />
                            المفضلة
                            <span className="text-text-muted text-lg font-normal mr-2">
                                ({items.length} منتج)
                            </span>
                        </h1>
                    </motion.div>

                    <button
                        onClick={clearWishlist}
                        className="text-red-400 hover:text-red-300 text-sm flex items-center gap-2 transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                        مسح الكل
                    </button>
                </div>

                <div className="products-grid">
                    {items.map((item, index) => (
                        <ProductCard
                            key={item.product.id}
                            product={item.product}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
