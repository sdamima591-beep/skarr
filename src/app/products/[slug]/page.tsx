'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Star,
    Heart,
    ShoppingCart,
    Minus,
    Plus,
    Truck,
    Shield,
    RotateCcw,
    Phone,
    ChevronLeft,
    ChevronRight,
    Check,
    Package
} from 'lucide-react';
import { ProductCard } from '@/components';
import { getProductBySlug, getRelatedProducts, reviews } from '@/data/products';
import { useCartStore, useWishlistStore, useToastStore } from '@/store';

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const product = getProductBySlug(slug);
    const relatedProducts = product ? getRelatedProducts(product) : [];
    const productReviews = product ? reviews.filter(r => r.productId === product.id) : [];

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

    const { addItem } = useCartStore();
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
    const { addToast } = useToastStore();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Package className="w-16 h-16 text-text-muted mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-2">المنتج غير موجود</h1>
                    <p className="text-text-secondary mb-6">عذراً، لم نتمكن من العثور على هذا المنتج</p>
                    <Link href="/products" className="btn btn-primary">
                        تصفح المنتجات
                    </Link>
                </div>
            </div>
        );
    }

    const isWishlisted = isInWishlist(product.id);
    const discount = product.compareAtPrice
        ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
        : 0;

    const handleAddToCart = () => {
        addItem(product, quantity);
        addToast({
            type: 'success',
            message: `تمت إضافة ${product.name} إلى السلة`
        });
    };

    const handleBuyNow = () => {
        addItem(product, quantity);
        window.location.href = '/checkout';
    };

    const handleToggleWishlist = () => {
        if (isWishlisted) {
            removeFromWishlist(product.id);
            addToast({ type: 'info', message: 'تمت الإزالة من المفضلة' });
        } else {
            addToWishlist(product);
            addToast({ type: 'success', message: 'تمت الإضافة للمفضلة' });
        }
    };

    const features = [
        { icon: Truck, label: 'شحن سريع', desc: 'توصيل خلال 24-48 ساعة' },
        { icon: Shield, label: 'ضمان سنة', desc: 'ضمان شامل من الشركة' },
        { icon: RotateCcw, label: 'استرجاع سهل', desc: 'إرجاع خلال 14 يوم' },
        { icon: Phone, label: 'دعم فني', desc: 'فريق متخصص 24/7' },
    ];

    return (
        <div className="min-h-screen bg-bg-primary">
            {/* Breadcrumb */}
            <div className="bg-bg-secondary border-b border-border-default">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm text-text-secondary">
                        <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                        <ChevronLeft className="w-4 h-4" />
                        <Link href="/products" className="hover:text-white transition-colors">المنتجات</Link>
                        <ChevronLeft className="w-4 h-4" />
                        <Link href={`/products?category=${product.category}`} className="hover:text-white transition-colors">
                            {product.category === 'cameras' ? 'كاميرات' :
                                product.category === 'smartwatches' ? 'ساعات ذكية' :
                                    product.category === 'doorbells' ? 'أجراس ذكية' :
                                        product.category === 'sensors' ? 'حساسات' :
                                            product.category === 'alarms' ? 'أنظمة إنذار' : 'إكسسوارات'}
                        </Link>
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-white">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Section */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {/* Main Image */}
                            <div className="relative aspect-square bg-bg-card border border-border-default rounded-2xl overflow-hidden mb-4 group">
                                <Image
                                    src={product.images[selectedImage] || product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Badges */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    {product.badges.includes('sale') && discount > 0 && (
                                        <span className="badge badge-sale text-base px-4 py-2">-{discount}%</span>
                                    )}
                                    {product.badges.includes('new') && (
                                        <span className="badge badge-new text-base px-4 py-2">جديد</span>
                                    )}
                                </div>

                                {/* Navigation Arrows */}
                                {product.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setSelectedImage(prev => (prev + 1) % product.images.length)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setSelectedImage(prev => (prev - 1 + product.images.length) % product.images.length)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnails */}
                            {product.images.length > 1 && (
                                <div className="flex gap-3">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index
                                                    ? 'border-neon-purple shadow-neon-purple'
                                                    : 'border-transparent hover:border-border-hover'
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${product.name} - ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {/* Brand */}
                            <p className="text-neon-cyan text-sm font-medium mb-2">{product.brand}</p>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-yellow-400'
                                                    : 'text-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-text-secondary">
                                    {product.rating} ({product.reviewsCount} تقييم)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl md:text-4xl font-bold text-neon-cyan">
                                    ${product.price}
                                </span>
                                {product.compareAtPrice && (
                                    <>
                                        <span className="text-xl text-text-muted line-through">
                                            ${product.compareAtPrice}
                                        </span>
                                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-bold rounded-full">
                                            وفّر ${product.compareAtPrice - product.price}
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {/* Stock Status */}
                            <div className="flex items-center gap-2 mb-6">
                                {product.stock > 0 ? (
                                    <>
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span className="text-green-500 font-medium">
                                            متوفر ({product.stock} قطعة)
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-red-500 font-medium">نفذت الكمية</span>
                                )}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                {/* Quantity Selector */}
                                <div className="flex items-center gap-3 bg-bg-tertiary border border-border-default rounded-xl p-2">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        disabled={quantity <= 1}
                                        className="w-10 h-10 rounded-lg bg-bg-hover flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neon-purple/20 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center text-white font-bold text-lg">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                                        disabled={quantity >= product.stock}
                                        className="w-10 h-10 rounded-lg bg-bg-hover flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neon-purple/20 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Wishlist */}
                                <button
                                    onClick={handleToggleWishlist}
                                    className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-colors ${isWishlisted
                                            ? 'bg-red-500 border-red-500 text-white'
                                            : 'bg-bg-tertiary border-border-default text-text-secondary hover:text-white hover:border-neon-purple'
                                        }`}
                                >
                                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                                </button>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={product.stock === 0}
                                    className="btn btn-primary flex-1 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    إضافة للسلة
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    disabled={product.stock === 0}
                                    className="btn btn-secondary flex-1 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    شراء الآن
                                </button>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-bg-card border border-border-default rounded-xl"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg flex items-center justify-center">
                                            <feature.icon className="w-5 h-5 text-neon-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-white text-sm font-medium">{feature.label}</p>
                                            <p className="text-text-muted text-xs">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-12 bg-bg-secondary">
                <div className="container mx-auto px-4">
                    {/* Tab Headers */}
                    <div className="flex gap-4 mb-8 border-b border-border-default">
                        {[
                            { key: 'description', label: 'الوصف' },
                            { key: 'specs', label: 'المواصفات' },
                            { key: 'reviews', label: `التقييمات (${productReviews.length})` }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                                className={`px-6 py-4 font-medium transition-colors relative ${activeTab === tab.key
                                        ? 'text-neon-purple'
                                        : 'text-text-secondary hover:text-white'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.key && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-purple"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8"
                    >
                        {activeTab === 'description' && (
                            <div className="prose prose-invert max-w-none">
                                <p className="text-text-secondary leading-relaxed text-lg">
                                    {product.description}
                                </p>
                                {product.features && (
                                    <div className="mt-6">
                                        <h3 className="text-xl font-bold text-white mb-4">المميزات الرئيسية</h3>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-3 text-text-secondary">
                                                    <Check className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'specs' && (
                            <div className="space-y-4">
                                {product.specs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between py-4 ${index !== product.specs.length - 1 ? 'border-b border-border-default' : ''
                                            }`}
                                    >
                                        <span className="text-text-secondary">{spec.label}</span>
                                        <span className="text-white font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div>
                                {productReviews.length > 0 ? (
                                    <div className="space-y-6">
                                        {productReviews.map(review => (
                                            <div key={review.id} className="pb-6 border-b border-border-default last:border-0">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center text-white font-bold">
                                                        {review.userName[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-white">{review.userName}</p>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <Star
                                                                        key={i}
                                                                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            {review.verified && (
                                                                <span className="text-xs text-green-500">✓ مشتري معتمد</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span className="text-text-muted text-sm mr-auto">{review.date}</span>
                                                </div>
                                                <p className="text-text-secondary">{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <Star className="w-12 h-12 text-text-muted mx-auto mb-4" />
                                        <p className="text-text-secondary">لا توجد تقييمات بعد</p>
                                        <p className="text-text-muted text-sm mt-2">كن أول من يقيّم هذا المنتج</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
                            منتجات <span className="gradient-text">مشابهة</span>
                        </h2>
                        <div className="products-grid">
                            {relatedProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
