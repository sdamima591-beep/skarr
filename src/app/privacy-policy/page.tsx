'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, ChevronLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-bg-primary py-12">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                    <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-white">سياسة الخصوصية</span>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسة الخصوصية</h1>
                        <p className="text-text-secondary">آخر تحديث: يناير 2024</p>
                    </div>

                    <div className="bg-bg-card border border-border-default rounded-2xl p-6 md:p-10 space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. مقدمة</h2>
                            <p className="text-text-secondary leading-relaxed">
                                نحن في sker نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا وخدماتنا.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. المعلومات التي نجمعها</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، العنوان</li>
                                <li>معلومات الدفع: تفاصيل البطاقة (تُعالج بشكل آمن عبر بوابات دفع موثوقة)</li>
                                <li>معلومات الطلبات: سجل المشتريات والمنتجات المفضلة</li>
                                <li>البيانات التقنية: عنوان IP، نوع المتصفح، نظام التشغيل</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. كيف نستخدم معلوماتك</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>معالجة وتوصيل طلباتك</li>
                                <li>التواصل معك بخصوص طلباتك والدعم الفني</li>
                                <li>إرسال العروض والتحديثات (بموافقتك)</li>
                                <li>تحسين خدماتنا وتجربة المستخدم</li>
                                <li>منع الاحتيال وضمان أمان الموقع</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. حماية البيانات</h2>
                            <p className="text-text-secondary leading-relaxed">
                                نستخدم أحدث تقنيات التشفير (SSL/TLS) لحماية بياناتك أثناء النقل. نحتفظ ببياناتك في خوادم آمنة ونقيد الوصول إليها للموظفين المصرح لهم فقط.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. مشاركة البيانات</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                لا نبيع أو نؤجر بياناتك لأطراف ثالثة. قد نشارك معلوماتك مع:
                            </p>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>شركات الشحن لتوصيل طلباتك</li>
                                <li>بوابات الدفع لمعالجة المدفوعات</li>
                                <li>السلطات القانونية عند الطلب القانوني</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">6. حقوقك</h2>
                            <ul className="text-text-secondary space-y-2 list-disc list-inside">
                                <li>الوصول إلى بياناتك الشخصية</li>
                                <li>تصحيح أو تحديث معلوماتك</li>
                                <li>حذف حسابك وبياناتك</li>
                                <li>إلغاء الاشتراك في الرسائل التسويقية</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. ملفات تعريف الارتباط (Cookies)</h2>
                            <p className="text-text-secondary leading-relaxed">
                                نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتذكر تفضيلاتك. يمكنك تعطيلها من إعدادات متصفحك، لكن قد يؤثر ذلك على بعض وظائف الموقع.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">8. التواصل معنا</h2>
                            <p className="text-text-secondary leading-relaxed">
                                لأي استفسارات حول سياسة الخصوصية، تواصل معنا عبر:
                            </p>
                            <ul className="text-text-secondary mt-2 space-y-1">
                                <li>البريد: privacy@sker.store</li>
                                <li>الهاتف: 07854284295</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
