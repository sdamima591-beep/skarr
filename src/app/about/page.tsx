'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Shield,
    Users,
    Award,
    Truck,
    Target,
    Eye,
    Heart,
    Zap
} from 'lucide-react';

export default function AboutPage() {
    const stats = [
        { number: '10K+', label: 'عميل سعيد' },
        { number: '500+', label: 'منتج متوفر' },
        { number: '24/7', label: 'دعم فني' },
        { number: '99%', label: 'رضا العملاء' },
    ];

    const values = [
        {
            icon: Shield,
            title: 'الجودة أولاً',
            description: 'نختار فقط المنتجات عالية الجودة من أفضل الماركات العالمية'
        },
        {
            icon: Heart,
            title: 'رضا العميل',
            description: 'نضع رضاكم في المقام الأول ونسعى دائماً لتجاوز توقعاتكم'
        },
        {
            icon: Zap,
            title: 'سرعة التوصيل',
            description: 'نوصل طلباتكم بأسرع وقت ممكن مع ضمان سلامة المنتجات'
        },
        {
            icon: Award,
            title: 'ضمان شامل',
            description: 'جميع منتجاتنا مضمونة لمدة سنة كاملة مع دعم فني متواصل'
        }
    ];

    const team = [
        {
            name: 'أحمد محمد',
            role: 'المدير التنفيذي',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
        },
        {
            name: 'سارة علي',
            role: 'مديرة العمليات',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
        },
        {
            name: 'محمد خالد',
            role: 'مدير التقنية',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
        }
    ];

    return (
        <div className="min-h-screen bg-bg-primary">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-cyan/20" />
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)'
                }} />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            من <span className="gradient-text">نحن</span>
                        </h1>
                        <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                            نحن sker، متجرك المتكامل للأمان الذكي في العراق. نقدم أحدث تقنيات المراقبة والحماية بأعلى جودة وأفضل الأسعار.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 bg-bg-card border border-border-default rounded-2xl"
                            >
                                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </p>
                                <p className="text-text-secondary">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="gradient-text">قصتنا</span>
                            </h2>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    بدأت رحلتنا في عام 2020 بحلم بسيط: توفير أحدث تقنيات الأمان والمراقبة للعائلات والشركات العراقية بأسعار مناسبة وجودة عالية.
                                </p>
                                <p>
                                    منذ ذلك الحين، نمونا لنصبح واحدة من أكبر المتاجر المتخصصة في مجال الأمان الذكي، حيث خدمنا أكثر من 10,000 عميل سعيد في جميع أنحاء العراق.
                                </p>
                                <p>
                                    نؤمن أن كل منزل وعمل يستحق أفضل حماية ممكنة، ولهذا نعمل باستمرار على توفير أحدث المنتجات وأفضل الخدمات لعملائنا.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-bg-card border border-border-default rounded-3xl overflow-hidden relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                                    alt="فريق العمل"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl blur-3xl opacity-30" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-bg-card border border-border-default rounded-2xl p-8"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-neon-purple to-neon-purple/50 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
                            <p className="text-text-secondary leading-relaxed">
                                أن نكون الوجهة الأولى والموثوقة للأمان الذكي في العراق والمنطقة، ونساهم في جعل كل منزل ومكان عمل أكثر أماناً.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-bg-card border border-border-default rounded-2xl p-8"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-neon-cyan to-neon-cyan/50 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">مهمتنا</h3>
                            <p className="text-text-secondary leading-relaxed">
                                توفير أحدث تقنيات المراقبة والحماية بجودة عالية وأسعار منافسة، مع تقديم خدمة عملاء استثنائية ودعم فني متواصل.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="gradient-text">قيمنا</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            المبادئ التي نعمل بها يومياً لتقديم أفضل تجربة لعملائنا
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-bg-card border border-border-default rounded-2xl p-6 text-center hover:border-neon-purple transition-all group"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-2xl flex items-center justify-center group-hover:from-neon-purple/30 group-hover:to-neon-cyan/30 transition-colors">
                                    <value.icon className="w-8 h-8 text-neon-cyan" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-text-secondary text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-bg-secondary">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="gradient-text">فريقنا</span>
                        </h2>
                        <p className="text-text-secondary">
                            فريق متخصص يعمل بشغف لخدمتكم
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-bg-card border border-border-default rounded-2xl p-6 text-center group hover:border-neon-purple transition-all"
                            >
                                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-bg-tertiary group-hover:border-neon-purple transition-colors">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <p className="text-neon-cyan">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-border-default rounded-3xl p-8 md:p-12"
                    >
                        <Users className="w-16 h-16 mx-auto mb-6 text-neon-cyan" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            انضم لعائلة sker
                        </h2>
                        <p className="text-text-secondary mb-8">
                            تصفح منتجاتنا واكتشف كيف يمكننا مساعدتك في حماية ما يهمك
                        </p>
                        <a href="/products" className="btn btn-primary text-lg px-8">
                            تصفح المنتجات
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
