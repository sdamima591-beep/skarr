'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Phone,
    ShoppingBag,
    Heart,
    MapPin,
    Settings,
    LogOut,
    Package,
    ChevronLeft
} from 'lucide-react';
import { useToastStore, useCartStore, useWishlistStore } from '@/store';

type Tab = 'login' | 'register' | 'dashboard';

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState<Tab>('login');
    const [showPassword, setShowPassword] = useState(false);
    const { addToast } = useToastStore();
    const { items: cartItems } = useCartStore();
    const { items: wishlistItems } = useWishlistStore();

    // Login form
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    // Register form
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    // Simulated logged in state (for demo)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user] = useState({
        name: 'محمد أحمد',
        email: 'mohammed@email.com',
        phone: '+964 770 123 4567'
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login
        setIsLoggedIn(true);
        setActiveTab('dashboard');
        addToast({ type: 'success', message: 'تم تسجيل الدخول بنجاح!' });
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (registerForm.password !== registerForm.confirmPassword) {
            addToast({ type: 'error', message: 'كلمات المرور غير متطابقة' });
            return;
        }
        // Simulate registration
        setIsLoggedIn(true);
        setActiveTab('dashboard');
        addToast({ type: 'success', message: 'تم إنشاء الحساب بنجاح!' });
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setActiveTab('login');
        addToast({ type: 'info', message: 'تم تسجيل الخروج' });
    };

    // Demo orders
    const orders = [
        {
            id: 'SKER12345678',
            date: '2024-01-20',
            status: 'delivered',
            total: 349,
            items: 3
        },
        {
            id: 'SKER87654321',
            date: '2024-01-15',
            status: 'shipped',
            total: 159,
            items: 1
        }
    ];

    const statusColors = {
        pending: 'bg-yellow-500/20 text-yellow-500',
        processing: 'bg-blue-500/20 text-blue-500',
        shipped: 'bg-purple-500/20 text-purple-500',
        delivered: 'bg-green-500/20 text-green-500'
    };

    const statusLabels = {
        pending: 'قيد الانتظار',
        processing: 'جارٍ التجهيز',
        shipped: 'تم الشحن',
        delivered: 'تم التوصيل'
    };

    if (isLoggedIn) {
        return (
            <div className="min-h-screen bg-bg-primary py-8">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-bg-card border border-border-default rounded-2xl p-6 sticky top-24">
                                {/* User Info */}
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border-default">
                                    <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center text-white font-bold text-2xl">
                                        {user.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{user.name}</p>
                                        <p className="text-text-muted text-sm">{user.email}</p>
                                    </div>
                                </div>

                                {/* Menu */}
                                <nav className="space-y-2">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-neon-purple/20 text-neon-purple rounded-xl font-medium">
                                        <Package className="w-5 h-5" />
                                        طلباتي
                                    </button>
                                    <Link
                                        href="/wishlist"
                                        className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-bg-hover rounded-xl transition-colors"
                                    >
                                        <Heart className="w-5 h-5" />
                                        المفضلة
                                        <span className="mr-auto text-sm text-text-muted">({wishlistItems.length})</span>
                                    </Link>
                                    <Link
                                        href="/cart"
                                        className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-bg-hover rounded-xl transition-colors"
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                        السلة
                                        <span className="mr-auto text-sm text-text-muted">({cartItems.length})</span>
                                    </Link>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-bg-hover rounded-xl transition-colors">
                                        <MapPin className="w-5 h-5" />
                                        العناوين
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:bg-bg-hover rounded-xl transition-colors">
                                        <Settings className="w-5 h-5" />
                                        الإعدادات
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                                    >
                                        <LogOut className="w-5 h-5" />
                                        تسجيل الخروج
                                    </button>
                                </nav>
                            </div>
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-3"
                        >
                            <h1 className="text-2xl md:text-3xl font-bold mb-6">
                                طلباتي
                            </h1>

                            {orders.length > 0 ? (
                                <div className="space-y-4">
                                    {orders.map((order, index) => (
                                        <motion.div
                                            key={order.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-bg-card border border-border-default rounded-2xl p-6"
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div>
                                                    <p className="text-text-muted text-sm">رقم الطلب</p>
                                                    <p className="font-bold text-white">#{order.id}</p>
                                                </div>
                                                <div>
                                                    <p className="text-text-muted text-sm">التاريخ</p>
                                                    <p className="text-white">{order.date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-text-muted text-sm">المنتجات</p>
                                                    <p className="text-white">{order.items} منتج</p>
                                                </div>
                                                <div>
                                                    <p className="text-text-muted text-sm">الإجمالي</p>
                                                    <p className="font-bold text-neon-cyan">${order.total}</p>
                                                </div>
                                                <div>
                                                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${statusColors[order.status as keyof typeof statusColors]}`}>
                                                        {statusLabels[order.status as keyof typeof statusLabels]}
                                                    </span>
                                                </div>
                                                <button className="text-neon-purple hover:text-neon-cyan transition-colors flex items-center gap-1">
                                                    التفاصيل
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-bg-card border border-border-default rounded-2xl p-12 text-center">
                                    <Package className="w-16 h-16 text-text-muted mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">لا توجد طلبات</h3>
                                    <p className="text-text-secondary mb-6">لم تقم بأي طلبات بعد</p>
                                    <Link href="/products" className="btn btn-primary">
                                        تصفح المنتجات
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-primary py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto"
                >
                    {/* Tabs */}
                    <div className="flex bg-bg-card border border-border-default rounded-xl p-1 mb-8">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex-1 py-3 rounded-lg font-medium transition-colors ${activeTab === 'login'
                                    ? 'bg-neon-purple text-white'
                                    : 'text-text-secondary hover:text-white'
                                }`}
                        >
                            تسجيل الدخول
                        </button>
                        <button
                            onClick={() => setActiveTab('register')}
                            className={`flex-1 py-3 rounded-lg font-medium transition-colors ${activeTab === 'register'
                                    ? 'bg-neon-purple text-white'
                                    : 'text-text-secondary hover:text-white'
                                }`}
                        >
                            حساب جديد
                        </button>
                    </div>

                    {/* Login Form */}
                    {activeTab === 'login' && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8"
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-white mb-2">مرحباً بعودتك!</h1>
                                <p className="text-text-secondary">سجل دخولك للمتابعة</p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">البريد الإلكتروني</label>
                                    <div className="relative">
                                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="email"
                                            value={loginForm.email}
                                            onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                                            required
                                            className="input pr-12"
                                            placeholder="email@example.com"
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">كلمة المرور</label>
                                    <div className="relative">
                                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={loginForm.password}
                                            onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                                            required
                                            className="input pr-12 pl-12"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" className="form-checkbox w-4 h-4 rounded border-border-default bg-bg-tertiary text-neon-purple" />
                                        <span className="text-text-secondary text-sm">تذكرني</span>
                                    </label>
                                    <a href="#" className="text-neon-purple hover:text-neon-cyan text-sm transition-colors">
                                        نسيت كلمة المرور؟
                                    </a>
                                </div>

                                <button type="submit" className="btn btn-primary w-full py-4">
                                    تسجيل الدخول
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-border-default text-center">
                                <p className="text-text-secondary text-sm">
                                    ليس لديك حساب؟{' '}
                                    <button
                                        onClick={() => setActiveTab('register')}
                                        className="text-neon-purple hover:text-neon-cyan transition-colors font-medium"
                                    >
                                        سجل الآن
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* Register Form */}
                    {activeTab === 'register' && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-8"
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-2xl font-bold text-white mb-2">إنشاء حساب جديد</h1>
                                <p className="text-text-secondary">انضم إلينا واستمتع بتجربة تسوق فريدة</p>
                            </div>

                            <form onSubmit={handleRegister} className="space-y-5">
                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">الاسم الكامل</label>
                                    <div className="relative">
                                        <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="text"
                                            value={registerForm.name}
                                            onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                                            required
                                            className="input pr-12"
                                            placeholder="محمد أحمد"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">البريد الإلكتروني</label>
                                    <div className="relative">
                                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="email"
                                            value={registerForm.email}
                                            onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                                            required
                                            className="input pr-12"
                                            placeholder="email@example.com"
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">رقم الهاتف</label>
                                    <div className="relative">
                                        <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="tel"
                                            value={registerForm.phone}
                                            onChange={(e) => setRegisterForm(prev => ({ ...prev, phone: e.target.value }))}
                                            required
                                            className="input pr-12"
                                            placeholder="07xx xxx xxxx"
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">كلمة المرور</label>
                                    <div className="relative">
                                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={registerForm.password}
                                            onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                                            required
                                            minLength={8}
                                            className="input pr-12 pl-12"
                                            placeholder="8 أحرف على الأقل"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">تأكيد كلمة المرور</label>
                                    <div className="relative">
                                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                                        <input
                                            type="password"
                                            value={registerForm.confirmPassword}
                                            onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                            required
                                            className="input pr-12"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" required className="form-checkbox w-4 h-4 mt-0.5 rounded border-border-default bg-bg-tertiary text-neon-purple" />
                                    <span className="text-text-secondary text-sm">
                                        أوافق على{' '}
                                        <a href="/terms" className="text-neon-purple hover:text-neon-cyan">الشروط والأحكام</a>
                                        {' '}و{' '}
                                        <a href="/privacy-policy" className="text-neon-purple hover:text-neon-cyan">سياسة الخصوصية</a>
                                    </span>
                                </label>

                                <button type="submit" className="btn btn-primary w-full py-4">
                                    إنشاء الحساب
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-border-default text-center">
                                <p className="text-text-secondary text-sm">
                                    لديك حساب؟{' '}
                                    <button
                                        onClick={() => setActiveTab('login')}
                                        className="text-neon-purple hover:text-neon-cyan transition-colors font-medium"
                                    >
                                        سجل الدخول
                                    </button>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
