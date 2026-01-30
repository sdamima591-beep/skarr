'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RotateCcw, ChevronLeft, Check, X } from 'lucide-react';

export default function ReturnPolicyPage() {
    return (
        <div className="min-h-screen bg-bg-primary py-12">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                    <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-white">سياسة الاسترجاع</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl flex items-center justify-center">
                            <RotateCcw className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسة الاسترجاع والاستبدال</h1>
                        <p className="text-text-secondary">رضاكم هو هدفنا الأول</p>
                    </div>

                    <div className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-10 space-y-8">
                        {/* Highlight Box */}
                        <div className="p-6 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/30 rounded-xl text-center">
                            <p className="text-xl font-bold text-white mb-2">14 يوم للإرجاع</p>
                            <p className="text-text-secondary">نضمن لك حق الإرجاع خلال 14 يوم من تاريخ الاستلام</p>
                        </div>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">شروط الإرجاع والاستبدال</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-green-500">يُقبل الإرجاع</p>
                                        <p className="text-text-secondary text-sm">المنتج بحالته الأصلية، غير مستخدم، مع جميع الملحقات والتغليف</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-green-500">يُقبل الإرجاع</p>
                                        <p className="text-text-secondary text-sm">منتج به عيب مصنعي أو تلف أثناء الشحن</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-green-500">يُقبل الإرجاع</p>
                                        <p className="text-text-secondary text-sm">منتج مختلف عما تم طلبه</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-red-400">لا يُقبل الإرجاع</p>
                                        <p className="text-text-secondary text-sm">منتج مستخدم أو به آثار استخدام</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-red-400">لا يُقبل الإرجاع</p>
                                        <p className="text-text-secondary text-sm">منتج بدون تغليفه الأصلي أو ملحقاته</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-red-400">لا يُقبل الإرجاع</p>
                                        <p className="text-text-secondary text-sm">إكسسوارات (كروت SD، سوارات، كابلات) ما لم يكن بها عيب مصنعي</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">خطوات الإرجاع</h2>
                            <ol className="text-text-secondary space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                                    <div>
                                        <p className="text-white font-medium">تواصل معنا</p>
                                        <p className="text-sm">أرسل طلب إرجاع عبر صفحة التواصل أو واتساب مع ذكر رقم الطلب وسبب الإرجاع</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                                    <div>
                                        <p className="text-white font-medium">الموافقة</p>
                                        <p className="text-sm">سيتم مراجعة طلبك والرد خلال 24 ساعة</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                                    <div>
                                        <p className="text-white font-medium">إعادة الشحن</p>
                                        <p className="text-sm">سنرسل مندوب لاستلام المنتج أو يمكنك إرساله لعنواننا</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                                    <div>
                                        <p className="text-white font-medium">الفحص والاسترداد</p>
                                        <p className="text-sm">بعد فحص المنتج، سيتم استرداد المبلغ خلال 3-5 أيام عمل</p>
                                    </div>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">طرق الاسترداد</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>نفس طريقة الدفع الأصلية</li>
                                <li>رصيد في حسابك لاستخدامه في مشتريات مستقبلية</li>
                                <li>تحويل بنكي (في حالة الدفع نقداً)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">تكاليف الشحن</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>مجانية في حالة العيب المصنعي أو خطأ من طرفنا</li>
                                <li>على حساب العميل في حالة تغيير الرأي</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">للاستفسار</h2>
                            <p className="text-text-secondary">
                                تواصل معنا لأي استفسار:
                            </p>
                            <ul className="text-text-secondary mt-2 space-y-1">
                                <li>واتساب: 07854284295</li>
                                <li>البريد: returns@sker.store</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
