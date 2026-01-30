'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ChevronLeft,
    CreditCard,
    Truck,
    Check,
    Lock,
    ShieldCheck
} from 'lucide-react';
import { useCartStore, useToastStore } from '@/store';

type Step = 'info' | 'shipping' | 'payment';

export default function CheckoutPage() {
    const { items, getSubtotal, clearCart } = useCartStore();
    const { addToast } = useToastStore();
    const [currentStep, setCurrentStep] = useState<Step>('info');
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: 'العراق',
        city: '',
        area: '',
        address: '',
        notes: '',
        paymentMethod: 'cod'
    });

    const subtotal = getSubtotal();
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    const steps = [
        { key: 'info', label: 'معلومات الاتصال', icon: '1' },
        { key: 'shipping', label: 'عنوان الشحن', icon: '2' },
        { key: 'payment', label: 'الدفع', icon: '3' }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (currentStep === 'info') {
            setCurrentStep('shipping');
        } else if (currentStep === 'shipping') {
            setCurrentStep('payment');
        } else {
            // Process order
            setIsProcessing(true);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setIsProcessing(false);
            setOrderComplete(true);
            clearCart();

            addToast({
                type: 'success',
                message: 'تم إتمام طلبك بنجاح!'
            });
        }
    };

    if (items.length === 0 && !orderComplete) {
        return (
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">سلتك فارغة</h1>
                    <Link href="/products" className="btn btn-primary">
                        تصفح المنتجات
                    </Link>
                </div>
            </div>
        );
    }

    if (orderComplete) {
        return (
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-md mx-auto px-4"
                >
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">تم الطلب بنجاح!</h1>
                    <p className="text-text-secondary mb-2">
                        شكراً لك {formData.firstName}! تم استلام طلبك
                    </p>
                    <p className="text-text-muted mb-8">
                        سيتم التواصل معك قريباً لتأكيد الطلب والشحن
                    </p>
                    <div className="bg-bg-card border border-border-default rounded-2xl p-6 mb-8">
                        <p className="text-text-muted text-sm mb-2">رقم الطلب</p>
                        <p className="text-2xl font-bold gradient-text">
                            #SKER{Date.now().toString().slice(-8)}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/products" className="btn btn-primary flex-1">
                            متابعة التسوق
                        </Link>
                        <Link href="/account" className="btn btn-secondary flex-1">
                            تتبع الطلب
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-primary py-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                    <Link href="/cart" className="hover:text-white transition-colors">السلة</Link>
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-white">إتمام الطلب</span>
                </nav>

                {/* Steps */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    {steps.map((step, index) => (
                        <div key={step.key} className="flex items-center">
                            <div
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${currentStep === step.key
                                        ? 'bg-neon-purple text-white'
                                        : steps.findIndex(s => s.key === currentStep) > index
                                            ? 'bg-green-500 text-white'
                                            : 'bg-bg-tertiary text-text-muted'
                                    }`}
                            >
                                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                                    {steps.findIndex(s => s.key === currentStep) > index ? (
                                        <Check className="w-4 h-4" />
                                    ) : (
                                        step.icon
                                    )}
                                </span>
                                <span className="hidden sm:inline font-medium">{step.label}</span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`w-12 h-0.5 mx-2 ${steps.findIndex(s => s.key === currentStep) > index
                                        ? 'bg-green-500'
                                        : 'bg-border-default'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit}>
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8"
                            >
                                {/* Contact Info Step */}
                                {currentStep === 'info' && (
                                    <>
                                        <h2 className="text-xl font-bold text-white mb-6">معلومات الاتصال</h2>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">الاسم الأول *</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input"
                                                    placeholder="محمد"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">الاسم الأخير *</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input"
                                                    placeholder="أحمد"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">البريد الإلكتروني *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input"
                                                    placeholder="email@example.com"
                                                    dir="ltr"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">رقم الهاتف *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input"
                                                    placeholder="07xx xxx xxxx"
                                                    dir="ltr"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Shipping Step */}
                                {currentStep === 'shipping' && (
                                    <>
                                        <h2 className="text-xl font-bold text-white mb-6">عنوان الشحن</h2>
                                        <div className="space-y-4">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-text-secondary text-sm mb-2">البلد *</label>
                                                    <select
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleInputChange}
                                                        className="input"
                                                    >
                                                        <option value="العراق">العراق</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-text-secondary text-sm mb-2">المدينة *</label>
                                                    <select
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="input"
                                                    >
                                                        <option value="">اختر المدينة</option>
                                                        <option value="بغداد">بغداد</option>
                                                        <option value="البصرة">البصرة</option>
                                                        <option value="أربيل">أربيل</option>
                                                        <option value="النجف">النجف</option>
                                                        <option value="كربلاء">كربلاء</option>
                                                        <option value="الموصل">الموصل</option>
                                                        <option value="السليمانية">السليمانية</option>
                                                        <option value="أخرى">أخرى</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">المنطقة / الحي *</label>
                                                <input
                                                    type="text"
                                                    name="area"
                                                    value={formData.area}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="input"
                                                    placeholder="مثال: الكرادة"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">العنوان التفصيلي *</label>
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    required
                                                    rows={3}
                                                    className="input resize-none"
                                                    placeholder="الشارع، رقم المبنى، الطابق..."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-text-secondary text-sm mb-2">ملاحظات للتوصيل (اختياري)</label>
                                                <textarea
                                                    name="notes"
                                                    value={formData.notes}
                                                    onChange={handleInputChange}
                                                    rows={2}
                                                    className="input resize-none"
                                                    placeholder="أي تعليمات خاصة للتوصيل..."
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Payment Step */}
                                {currentStep === 'payment' && (
                                    <>
                                        <h2 className="text-xl font-bold text-white mb-6">طريقة الدفع</h2>
                                        <div className="space-y-4">
                                            {/* Cash on Delivery */}
                                            <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'cod'
                                                    ? 'border-neon-purple bg-neon-purple/10'
                                                    : 'border-border-default hover:border-border-hover'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cod"
                                                    checked={formData.paymentMethod === 'cod'}
                                                    onChange={handleInputChange}
                                                    className="sr-only"
                                                />
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'cod' ? 'border-neon-purple' : 'border-text-muted'
                                                    }`}>
                                                    {formData.paymentMethod === 'cod' && (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-neon-purple" />
                                                    )}
                                                </div>
                                                <Truck className="w-6 h-6 text-neon-cyan" />
                                                <div className="flex-1">
                                                    <p className="font-medium text-white">الدفع عند الاستلام</p>
                                                    <p className="text-text-muted text-sm">ادفع نقداً عند وصول الطلب</p>
                                                </div>
                                            </label>

                                            {/* Credit Card */}
                                            <label className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'card'
                                                    ? 'border-neon-purple bg-neon-purple/10'
                                                    : 'border-border-default hover:border-border-hover'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="card"
                                                    checked={formData.paymentMethod === 'card'}
                                                    onChange={handleInputChange}
                                                    className="sr-only"
                                                />
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'card' ? 'border-neon-purple' : 'border-text-muted'
                                                    }`}>
                                                    {formData.paymentMethod === 'card' && (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-neon-purple" />
                                                    )}
                                                </div>
                                                <CreditCard className="w-6 h-6 text-neon-cyan" />
                                                <div className="flex-1">
                                                    <p className="font-medium text-white">بطاقة ائتمان</p>
                                                    <p className="text-text-muted text-sm">Visa, Mastercard</p>
                                                </div>
                                                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full">قريباً</span>
                                            </label>

                                            {/* Security Note */}
                                            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-sm">
                                                <Lock className="w-5 h-5 text-green-500" />
                                                <span className="text-green-500">جميع معاملاتك مشفرة ومحمية</span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex gap-4 mt-8 pt-6 border-t border-border-default">
                                    {currentStep !== 'info' && (
                                        <button
                                            type="button"
                                            onClick={() => setCurrentStep(currentStep === 'payment' ? 'shipping' : 'info')}
                                            className="btn btn-secondary"
                                        >
                                            السابق
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="btn btn-primary flex-1 py-4"
                                    >
                                        {isProcessing ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                جارٍ المعالجة...
                                            </span>
                                        ) : currentStep === 'payment' ? (
                                            'تأكيد الطلب'
                                        ) : (
                                            'التالي'
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-bg-card border border-border-default rounded-2xl p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-white mb-6">ملخص الطلب</h2>

                            {/* Items */}
                            <div className="space-y-4 mb-6">
                                {items.map(item => (
                                    <div key={item.product.id} className="flex gap-4">
                                        <div className="relative w-16 h-16 bg-bg-tertiary rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.product.images[0]}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <span className="absolute -top-1 -left-1 w-5 h-5 bg-neon-purple text-white text-xs rounded-full flex items-center justify-center">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white text-sm font-medium line-clamp-2">{item.product.name}</p>
                                            <p className="text-text-muted text-sm">${item.product.price}</p>
                                        </div>
                                        <p className="text-white font-medium">
                                            ${(item.product.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className="space-y-3 pt-4 border-t border-border-default">
                                <div className="flex justify-between text-text-secondary">
                                    <span>المجموع الفرعي</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-text-secondary">
                                    <span>الشحن</span>
                                    <span>{shipping === 0 ? <span className="text-green-500">مجاني</span> : `$${shipping}`}</span>
                                </div>
                                <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-border-default">
                                    <span>الإجمالي</span>
                                    <span className="gradient-text">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-6 pt-6 border-t border-border-default flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-neon-cyan" />
                                <p className="text-text-muted text-sm">
                                    تسوق بأمان مع ضمان استرداد 100%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
