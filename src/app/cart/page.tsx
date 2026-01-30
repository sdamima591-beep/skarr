'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    ArrowLeft,
    Tag,
    Truck,
    ShieldCheck
} from 'lucide-react';
import { useCartStore, useToastStore } from '@/store';

export default function CartPage() {
    const { items, removeItem, updateQuantity, getSubtotal, clearCart } = useCartStore();
    const { addToast } = useToastStore();
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
    const [discount, setDiscount] = useState(0);

    const subtotal = getSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal - discount + shipping;

    const handleApplyCoupon = () => {
        if (couponCode.toUpperCase() === 'SKER20') {
            const discountAmount = subtotal * 0.2;
            setDiscount(discountAmount);
            setAppliedCoupon(couponCode.toUpperCase());
            addToast({
                type: 'success',
                message: 'تم تطبيق كوبون الخصم بنجاح!'
            });
        } else {
            addToast({
                type: 'error',
                message: 'كود الخصم غير صالح'
            });
        }
        setCouponCode('');
    };

    const handleRemoveCoupon = () => {
        setDiscount(0);
        setAppliedCoupon(null);
        addToast({
            type: 'info',
            message: 'تم إزالة كوبون الخصم'
        });
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-bg-tertiary rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-16 h-16 text-text-muted" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">سلتك فارغة</h1>
                    <p className="text-text-secondary mb-8">
                        لم تضف أي منتجات للسلة بعد
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
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-8"
                >
                    سلة <span className="gradient-text">التسوق</span>
                    <span className="text-text-muted text-lg font-normal mr-2">
                        ({items.length} منتج)
                    </span>
                </motion.h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-bg-card border border-border-default rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4"
                            >
                                {/* Image */}
                                <Link
                                    href={`/products/${item.product.slug}`}
                                    className="relative w-full md:w-32 h-32 bg-bg-tertiary rounded-xl overflow-hidden flex-shrink-0"
                                >
                                    <Image
                                        src={item.product.images[0]}
                                        alt={item.product.name}
                                        fill
                                        className="object-cover hover:scale-110 transition-transform"
                                    />
                                </Link>

                                {/* Details */}
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div>
                                            <p className="text-text-muted text-sm">{item.product.brand}</p>
                                            <Link
                                                href={`/products/${item.product.slug}`}
                                                className="font-semibold text-white hover:text-neon-cyan transition-colors line-clamp-2"
                                            >
                                                {item.product.name}
                                            </Link>

                                            {/* Price per item */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-neon-cyan font-bold">${item.product.price}</span>
                                                {item.product.compareAtPrice && (
                                                    <span className="text-text-muted line-through text-sm">
                                                        ${item.product.compareAtPrice}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Quantity & Total */}
                                        <div className="flex items-center gap-6">
                                            {/* Quantity */}
                                            <div className="flex items-center gap-2 bg-bg-tertiary border border-border-default rounded-xl p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white disabled:opacity-50 hover:bg-bg-hover transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-10 text-center text-white font-medium">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                    disabled={item.quantity >= item.product.stock}
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white disabled:opacity-50 hover:bg-bg-hover transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Subtotal */}
                                            <div className="text-left min-w-[80px]">
                                                <p className="text-text-muted text-sm">المجموع</p>
                                                <p className="text-white font-bold text-lg">
                                                    ${(item.product.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>

                                            {/* Remove */}
                                            <button
                                                onClick={() => {
                                                    removeItem(item.product.id);
                                                    addToast({ type: 'info', message: 'تم إزالة المنتج من السلة' });
                                                }}
                                                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Clear Cart */}
                        <div className="flex justify-end pt-4">
                            <button
                                onClick={() => {
                                    clearCart();
                                    addToast({ type: 'info', message: 'تم تفريغ السلة' });
                                }}
                                className="text-red-400 hover:text-red-300 text-sm flex items-center gap-2 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                                تفريغ السلة
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-bg-card border border-border-default rounded-2xl p-6 sticky top-24"
                        >
                            <h2 className="text-xl font-bold text-white mb-6">ملخص الطلب</h2>

                            {/* Coupon */}
                            <div className="mb-6">
                                <label className="text-text-secondary text-sm mb-2 block">كوبون خصم</label>
                                {appliedCoupon ? (
                                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
                                        <div className="flex items-center gap-2 text-green-500">
                                            <Tag className="w-4 h-4" />
                                            <span className="font-medium">{appliedCoupon}</span>
                                        </div>
                                        <button
                                            onClick={handleRemoveCoupon}
                                            className="text-red-400 hover:text-red-300 text-sm"
                                        >
                                            إزالة
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            placeholder="أدخل الكود"
                                            className="input flex-1"
                                        />
                                        <button
                                            onClick={handleApplyCoupon}
                                            disabled={!couponCode}
                                            className="btn btn-secondary disabled:opacity-50"
                                        >
                                            تطبيق
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Summary */}
                            <div className="space-y-4 border-t border-border-default pt-4">
                                <div className="flex justify-between text-text-secondary">
                                    <span>المجموع الفرعي</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                {discount > 0 && (
                                    <div className="flex justify-between text-green-500">
                                        <span>الخصم</span>
                                        <span>-${discount.toFixed(2)}</span>
                                    </div>
                                )}

                                <div className="flex justify-between text-text-secondary">
                                    <span>الشحن</span>
                                    <span>
                                        {shipping === 0 ? (
                                            <span className="text-neon-lime">مجاني</span>
                                        ) : (
                                            `$${shipping.toFixed(2)}`
                                        )}
                                    </span>
                                </div>

                                {subtotal < 100 && (
                                    <div className="p-3 bg-neon-purple/10 border border-neon-purple/30 rounded-xl">
                                        <p className="text-sm text-neon-purple">
                                            🚚 أضف ${(100 - subtotal).toFixed(2)} للحصول على شحن مجاني
                                        </p>
                                    </div>
                                )}

                                <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-border-default">
                                    <span>الإجمالي</span>
                                    <span className="gradient-text">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <Link
                                href="/checkout"
                                className="btn btn-primary w-full mt-6 py-4 text-lg"
                            >
                                إتمام الطلب
                                <ArrowLeft className="w-5 h-5" />
                            </Link>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-6 border-t border-border-default space-y-3">
                                <div className="flex items-center gap-3 text-text-secondary text-sm">
                                    <Truck className="w-5 h-5 text-neon-cyan" />
                                    <span>شحن سريع خلال 24-48 ساعة</span>
                                </div>
                                <div className="flex items-center gap-3 text-text-secondary text-sm">
                                    <ShieldCheck className="w-5 h-5 text-neon-cyan" />
                                    <span>دفع آمن ومشفر 100%</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
