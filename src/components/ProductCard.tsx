'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore, useWishlistStore, useToastStore } from '@/store';

interface ProductCardProps {
    product: Product;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const { addItem } = useCartStore();
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
    const { addToast } = useToastStore();

    const isWishlisted = isInWishlist(product.id);
    const discount = product.compareAtPrice
        ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
        : 0;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
        addToast({
            type: 'success',
            message: `تمت إضافة ${product.name} إلى السلة`
        });
    };

    const handleToggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(product.id);
            addToast({
                type: 'info',
                message: 'تمت الإزالة من المفضلة'
            });
        } else {
            addToWishlist(product);
            addToast({
                type: 'success',
                message: 'تمت الإضافة للمفضلة'
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Link href={`/products/${product.slug}`} className="group block">
                <div className="card relative overflow-hidden">
                    {/* Image Container */}
                    <div className="relative aspect-square bg-bg-tertiary overflow-hidden">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Badges */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                            {product.badges.includes('sale') && discount > 0 && (
                                <span className="badge badge-sale">
                                    -{discount}%
                                </span>
                            )}
                            {product.badges.includes('new') && (
                                <span className="badge badge-new">جديد</span>
                            )}
                            {product.badges.includes('hot') && (
                                <span className="badge badge-hot">🔥 رائج</span>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={handleToggleWishlist}
                                className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${isWishlisted
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                aria-label={isWishlisted ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                            >
                                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                            </button>
                            <Link
                                href={`/products/${product.slug}`}
                                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                aria-label="عرض سريع"
                            >
                                <Eye className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <button
                                onClick={handleAddToCart}
                                disabled={product.stock === 0}
                                className="w-full py-2.5 bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-neon-purple transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                {product.stock === 0 ? 'نفذت الكمية' : 'أضف للسلة'}
                            </button>
                        </div>

                        {/* Out of Stock Overlay */}
                        {product.stock === 0 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg">
                                    نفذت الكمية
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Brand */}
                        <p className="text-text-muted text-xs mb-1">{product.brand}</p>

                        {/* Title */}
                        <h3 className="font-semibold text-white group-hover:text-neon-cyan transition-colors line-clamp-2 min-h-[48px] text-sm md:text-base">
                            {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-3.5 h-3.5 ${i < Math.floor(product.rating)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-text-muted text-xs">
                                ({product.reviewsCount})
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 mt-3">
                            <span className="text-lg md:text-xl font-bold text-neon-cyan">
                                ${product.price}
                            </span>
                            {product.compareAtPrice && (
                                <span className="text-text-muted line-through text-sm">
                                    ${product.compareAtPrice}
                                </span>
                            )}
                        </div>

                        {/* Stock Status */}
                        {product.stock > 0 && product.stock <= 5 && (
                            <p className="text-orange-400 text-xs mt-2">
                                ⚠️ باقي {product.stock} فقط!
                            </p>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
