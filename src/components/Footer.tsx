'use client';

import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    CreditCard,
    Truck,
    ShieldCheck,
    Headphones
} from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { label: 'كاميرات مراقبة', href: '/products?category=cameras' },
            { label: 'ساعات ذكية', href: '/products?category=smartwatches' },
            { label: 'جرس الباب الذكي', href: '/products?category=doorbells' },
            { label: 'حساسات ذكية', href: '/products?category=sensors' },
            { label: 'أنظمة الإنذار', href: '/products?category=alarms' },
            { label: 'الإكسسوارات', href: '/products?category=accessories' },
        ],
        support: [
            { label: 'مركز المساعدة', href: '/help' },
            { label: 'تتبع الطلب', href: '/track-order' },
            { label: 'سياسة الإرجاع', href: '/return-policy' },
            { label: 'الضمان', href: '/warranty' },
            { label: 'الأسئلة الشائعة', href: '/faq' },
        ],
        company: [
            { label: 'من نحن', href: '/about' },
            { label: 'تواصل معنا', href: '/contact' },
            { label: 'المدونة', href: '/blog' },
            { label: 'وظائف', href: '/careers' },
        ],
        legal: [
            { label: 'سياسة الخصوصية', href: '/privacy-policy' },
            { label: 'الشروط والأحكام', href: '/terms' },
            { label: 'سياسة الاسترجاع', href: '/refund-policy' },
        ]
    };

    const features = [
        { icon: Truck, title: 'شحن سريع', desc: 'توصيل خلال 24-48 ساعة' },
        { icon: ShieldCheck, title: 'ضمان سنة', desc: 'على جميع المنتجات' },
        { icon: CreditCard, title: 'دفع آمن', desc: '100% معاملات مشفرة' },
        { icon: Headphones, title: 'دعم 24/7', desc: 'فريق متخصص لمساعدتك' },
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'فيسبوك' },
        { icon: Twitter, href: 'https://twitter.com', label: 'تويتر' },
        { icon: Instagram, href: 'https://instagram.com', label: 'انستغرام' },
        { icon: Youtube, href: 'https://youtube.com', label: 'يوتيوب' },
    ];

    return (
        <footer className="bg-bg-secondary border-t border-border-default relative">
            {/* Features Strip */}
            <div className="bg-bg-tertiary py-8 border-b border-border-default">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-bg-card rounded-xl border border-border-default hover:border-neon-purple transition-all group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm md:text-base">{feature.title}</h4>
                                    <p className="text-text-muted text-xs md:text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-2xl font-bold gradient-text">SKER</span>
                        </Link>
                        <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                            متجرك المتكامل للأمان الذكي. نوفر لك أحدث كاميرات المراقبة، الساعات الذكية، وأنظمة الحماية المنزلية بأعلى جودة وأفضل الأسعار.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <a href="tel:+9647700000000" className="flex items-center gap-3 text-text-secondary hover:text-neon-cyan transition-colors">
                                <Phone className="w-4 h-4" />
                                <span dir="ltr">07854284295</span>
                            </a>
                            <a href="mailto:info@sker.store" className="flex items-center gap-3 text-text-secondary hover:text-neon-cyan transition-colors">
                                <Mail className="w-4 h-4" />
                                info@sker.store
                            </a>
                            <p className="flex items-center gap-3 text-text-secondary">
                                <MapPin className="w-4 h-4" />
                                بغداد، العراق
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-bg-tertiary hover:bg-neon-purple border border-border-default hover:border-neon-purple rounded-xl flex items-center justify-center transition-all"
                                >
                                    <social.icon className="w-5 h-5 text-text-secondary hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">تسوق</h3>
                        <ul className="space-y-2">
                            {footerLinks.shop.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-neon-cyan transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">الدعم</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-neon-cyan transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">الشركة</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-neon-cyan transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">قانوني</h3>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary hover:text-neon-cyan transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border-default">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-text-muted text-sm text-center md:text-right">
                            © {currentYear} SKER. جميع الحقوق محفوظة.
                        </p>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-3">
                            <span className="text-text-muted text-sm">طرق الدفع:</span>
                            <div className="flex gap-2">
                                {['Visa', 'Mastercard', 'PayPal', 'Cash'].map((method) => (
                                    <div
                                        key={method}
                                        className="px-3 py-1 bg-bg-tertiary rounded text-xs text-text-secondary border border-border-default"
                                    >
                                        {method}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-xl flex items-center justify-center shadow-lg hover:shadow-neon-purple transition-all z-40 animate-glow-pulse"
                aria-label="العودة للأعلى"
            >
                <ArrowUp className="w-5 h-5 text-white" />
            </button>
        </footer>
    );
}
