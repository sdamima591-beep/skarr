'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore, useToastStore } from '@/store';
import Image from 'next/image';
import Link from 'next/link';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeItem, updateQuantity, getSubtotal, clearCart } = useCartStore();
    const { addToast } = useToastStore();

    const subtotal = getSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    const handleRemoveItem = (productId: string, productName: string) => {
        removeItem(productId);
        addToast({
            type: 'info',
            message: `تم إزالة ${productName} من السلة`
        });
    };

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
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed top-0 left-0 h-full w-full max-w-md bg-bg-secondary border-r border-border-default z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border-default">
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-bg-hover transition-colors"
                            >
                                <X className="w-5 h-5 text-text-secondary" />
                            </button>
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                سلة التسوق
                                <span className="text-sm text-text-muted">({items.length})</span>
                            </h2>
                            {items.length > 0 && (
                                <button
                                    onClick={clearCart}
                                    className="text-sm text-red-400 hover:text-red-300 transition-colors"
                                >
                                    مسح الكل
                                </button>
                            )}
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-24 h-24 bg-bg-tertiary rounded-full flex items-center justify-center mb-4">
                                        <ShoppingBag className="w-12 h-12 text-text-muted" />
                                    </div>
                                    <p className="text-text-secondary mb-2">سلتك فارغة</p>
                                    <p className="text-text-muted text-sm mb-6">
                                        أضف منتجات لبدء التسوق
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="btn btn-primary"
                                    >
                                        تصفح المنتجات
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.product.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            className="flex gap-4 p-3 bg-bg-card rounded-xl border border-border-default"
                                        >
                                            {/* Image */}
                                            <div className="w-20 h-20 bg-bg-tertiary rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={item.product.images[0]}
                                                    alt={item.product.name}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    href={`/products/${item.product.slug}`}
                                                    onClick={onClose}
                                                    className="text-white font-medium hover:text-neon-cyan transition-colors line-clamp-2 text-sm"
                                                >
                                                    {item.product.name}
                                                </Link>

                                                <div className="flex items-center justify-between mt-2">
                                                    <p className="text-neon-cyan font-bold">
                                                        ${item.product.price * item.quantity}
                                                    </p>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                            disabled={item.quantity <= 1}
                                                            className="w-7 h-7 rounded-lg bg-bg-tertiary hover:bg-bg-hover border border-border-default flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-white font-medium w-6 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                            disabled={item.quantity >= item.product.stock}
                                                            className="w-7 h-7 rounded-lg bg-bg-tertiary hover:bg-bg-hover border border-border-default flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Remove Button */}
                                                <button
                                                    onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                                                    className="mt-2 text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                                                >
                                                    <Trash2 className="w-3 h-3" />
                                                    إزالة
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer - Summary */}
                        {items.length > 0 && (
                            <div className="border-t border-border-default p-4 bg-bg-card">
                                {/* Summary */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-text-secondary">
                                        <span>المجموع الفرعي</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
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
                                        <p className="text-xs text-text-muted">
                                            أضف ${(100 - subtotal).toFixed(2)} للحصول على شحن مجاني
                                        </p>
                                    )}
                                    <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-border-default">
                                        <span>الإجمالي</span>
                                        <span className="text-neon-cyan">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="space-y-2">
                                    <Link
                                        href="/checkout"
                                        onClick={onClose}
                                        className="btn btn-primary w-full justify-center"
                                    >
                                        إتمام الطلب
                                        <ArrowLeft className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href="/cart"
                                        onClick={onClose}
                                        className="btn btn-secondary w-full justify-center"
                                    >
                                        عرض السلة
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
