'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter
} from 'lucide-react';
import { useToastStore } from '@/store';

export default function ContactPage() {
    const { addToast } = useToastStore();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        addToast({
            type: 'success',
            message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً'
        });

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'العنوان',
            content: 'بغداد، العراق',
            subContent: 'شارع الكرادة، مجمع الأعمال'
        },
        {
            icon: Phone,
            title: 'الهاتف',
            content: '07854284295',
            subContent: 'اتصل بنا الآن'
        },
        {
            icon: Mail,
            title: 'البريد الإلكتروني',
            content: 'info@sker.store',
            subContent: 'support@sker.store'
        },
        {
            icon: Clock,
            title: 'ساعات العمل',
            content: 'السبت - الخميس: 9 ص - 9 م',
            subContent: 'الجمعة: 2 م - 9 م'
        }
    ];

    const subjects = [
        'استفسار عام',
        'طلب منتج',
        'مشكلة في الطلب',
        'دعم فني',
        'اقتراح أو شكوى',
        'فرص الشراكة'
    ];

    return (
        <div className="min-h-screen bg-bg-primary">
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            تواصل <span className="gradient-text">معنا</span>
                        </h1>
                        <p className="text-text-secondary text-lg">
                            نحن هنا لمساعدتك! أرسل لنا رسالة وسنرد عليك في أقرب وقت
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12 bg-bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-bg-card border border-border-default rounded-2xl p-6 text-center hover:border-neon-purple transition-all"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-xl flex items-center justify-center">
                                    <info.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{info.title}</h3>
                                <p className="text-text-secondary text-sm">{info.content}</p>
                                <p className="text-text-muted text-sm">{info.subContent}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                أرسل لنا <span className="gradient-text">رسالة</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">الاسم الكامل *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                            placeholder="محمد أحمد"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">رقم الهاتف *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                            placeholder="07xx xxx xxxx"
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">البريد الإلكتروني *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="input"
                                        placeholder="email@example.com"
                                        dir="ltr"
                                    />
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">الموضوع *</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="input"
                                    >
                                        <option value="">اختر الموضوع</option>
                                        {subjects.map(subject => (
                                            <option key={subject} value={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-text-secondary text-sm mb-2">الرسالة *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="input resize-none"
                                        placeholder="اكتب رسالتك هنا..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full py-4 text-lg"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            جارٍ الإرسال...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <Send className="w-5 h-5" />
                                            إرسال الرسالة
                                        </span>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* Quick Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                تواصل <span className="gradient-text">سريع</span>
                            </h2>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/9647854284295"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl mb-6 hover:bg-green-500/20 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center">
                                    <MessageCircle className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-white group-hover:text-green-400 transition-colors">واتساب</p>
                                    <p className="text-text-secondary">تواصل معنا مباشرة عبر واتساب</p>
                                </div>
                            </a>

                            {/* Social Links */}
                            <div className="bg-bg-card border border-border-default rounded-2xl p-6 mb-6">
                                <h3 className="font-bold text-white mb-4">تابعنا على</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-bg-tertiary hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors"
                                    >
                                        <Facebook className="w-6 h-6 text-text-secondary hover:text-white" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-bg-tertiary hover:bg-pink-600 rounded-xl flex items-center justify-center transition-colors"
                                    >
                                        <Instagram className="w-6 h-6 text-text-secondary hover:text-white" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-bg-tertiary hover:bg-sky-500 rounded-xl flex items-center justify-center transition-colors"
                                    >
                                        <Twitter className="w-6 h-6 text-text-secondary hover:text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-bg-card border border-border-default rounded-2xl overflow-hidden">
                                <div className="aspect-video bg-bg-tertiary flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-neon-purple mx-auto mb-4" />
                                        <p className="text-white font-medium">بغداد، العراق</p>
                                        <p className="text-text-muted text-sm">شارع الكرادة</p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Link */}
                            <div className="mt-6 p-6 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-border-default rounded-2xl">
                                <h3 className="font-bold text-white mb-2">لديك أسئلة؟</h3>
                                <p className="text-text-secondary text-sm mb-4">
                                    قد تجد إجابتك في صفحة الأسئلة الشائعة
                                </p>
                                <a href="/faq" className="text-neon-cyan hover:text-neon-purple transition-colors font-medium">
                                    زيارة الأسئلة الشائعة ←
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
