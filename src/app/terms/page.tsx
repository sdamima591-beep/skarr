'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ChevronLeft } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-bg-primary py-12">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                    <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-white">الشروط والأحكام</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">الشروط والأحكام</h1>
                        <p className="text-text-secondary">آخر تحديث: يناير 2024</p>
                    </div>

                    <div className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-10 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. القبول بالشروط</h2>
                            <p className="text-text-secondary leading-relaxed">
                                باستخدامك لموقع sker، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. التسجيل والحساب</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>يجب أن تكون بعمر 18 سنة أو أكثر لإنشاء حساب</li>
                                <li>أنت مسؤول عن الحفاظ على سرية بيانات حسابك</li>
                                <li>يجب تقديم معلومات صحيحة ودقيقة</li>
                                <li>نحتفظ بحق تعليق أو إلغاء أي حساب يخالف الشروط</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. الطلبات والأسعار</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>جميع الأسعار معروضة بالدولار الأمريكي</li>
                                <li>الأسعار قابلة للتغيير دون إشعار مسبق</li>
                                <li>نحتفظ بحق رفض أي طلب لأي سبب</li>
                                <li>يتم تأكيد الطلب بعد التحقق من التوفر والدفع</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. الشحن والتوصيل</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>نقوم بالشحن داخل العراق</li>
                                <li>مدة التوصيل المقدرة 24-72 ساعة عمل</li>
                                <li>الشحن مجاني للطلبات فوق 100 دولار</li>
                                <li>المشتري مسؤول عن توفير عنوان صحيح ودقيق</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. سياسة الدفع</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>نقبل الدفع عند الاستلام (نقدًا)</li>
                                <li>الدفع الإلكتروني متاح قريباً</li>
                                <li>جميع المعاملات مشفرة وآمنة</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. الضمان</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>جميع المنتجات مضمونة لمدة سنة من تاريخ الشراء</li>
                                <li>الضمان يغطي عيوب التصنيع فقط</li>
                                <li>لا يشمل الضمان الأضرار الناتجة عن سوء الاستخدام</li>
                                <li>يجب الاحتفاظ بفاتورة الشراء لتفعيل الضمان</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. الملكية الفكرية</h2>
                            <p className="text-text-secondary leading-relaxed">
                                جميع المحتويات على الموقع (نصوص، صور، شعارات، تصاميم) محمية بحقوق الملكية الفكرية. لا يجوز نسخها أو استخدامها دون إذن خطي مسبق.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">8. حدود المسؤولية</h2>
                            <p className="text-text-secondary leading-relaxed">
                                لا نتحمل مسؤولية أي أضرار غير مباشرة ناتجة عن استخدام منتجاتنا أو موقعنا. مسؤوليتنا محدودة بقيمة المنتج المشترى.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">9. تعديل الشروط</h2>
                            <p className="text-text-secondary leading-relaxed">
                                نحتفظ بحق تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية فور نشرها على الموقع. استمرارك في استخدام الموقع يعني قبولك للشروط المحدثة.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">10. التواصل</h2>
                            <p className="text-text-secondary leading-relaxed">
                                لأي استفسارات حول هذه الشروط:
                            </p>
                            <ul className="text-text-secondary mt-2 space-y-1">
                                <li>البريد: legal@sker.store</li>
                                <li>الهاتف: 07854284295</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
