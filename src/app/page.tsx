'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft,
  Camera,
  Watch,
  Bell,
  Shield,
  Truck,
  CreditCard,
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Eye
} from 'lucide-react';
import { ProductCard } from '@/components';
import { categories, getFeaturedProducts, products, reviews } from '@/data/products';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const featuredProducts = getFeaturedProducts();
  const saleProducts = products.filter(p => p.badges.includes('sale')).slice(0, 4);

  const heroSlides = [
    {
      title: 'حماية ذكية لكل مكان',
      subtitle: 'راقب من أي مكان، بأعلى جودة',
      cta: 'تسوق الآن',
      ctaLink: '/products',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg',
      accent: 'neon-purple'
    },
    {
      title: 'كاميرات بدقة 4K',
      subtitle: 'رؤية ليلية واضحة وكشف حركة ذكي',
      cta: 'استكشف الكاميرات',
      ctaLink: '/products?category=cameras',
      image: 'https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg',
      accent: 'neon-cyan'
    },
    {
      title: 'ساعات تواكب يومك',
      subtitle: 'تتبع صحتك ونشاطك بدقة عالية',
      cta: 'اكتشف الساعات',
      ctaLink: '/products?category=smartwatches',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      accent: 'neon-lime'
    }
  ];

  const features = [
    { icon: Truck, title: 'شحن سريع', desc: 'توصيل خلال 24-48 ساعة' },
    { icon: Shield, title: 'ضمان سنة', desc: 'ضمان شامل على جميع المنتجات' },
    { icon: CreditCard, title: 'دفع آمن', desc: 'دفع عند الاستلام أو إلكتروني' },
    { icon: Headphones, title: 'دعم 24/7', desc: 'فريق دعم متاح دائماً' },
  ];

  const categoryIcons: { [key: string]: typeof Camera } = {
    cameras: Camera,
    smartwatches: Watch,
    doorbells: Bell,
    sensors: Eye,
    alarms: Shield,
    accessories: Zap
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ y: heroY }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 to-transparent" />
            </motion.div>
          </motion.div>
        ))}

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 h-full flex items-center"
          style={{ opacity: heroOpacity }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 50
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`${index === currentSlide ? 'block' : 'hidden'}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neon-purple/20 border border-neon-purple/30 rounded-full mb-6"
                  >
                    <Sparkles className="w-4 h-4 text-neon-purple" />
                    <span className="text-neon-purple text-sm font-medium">جديد في sker</span>
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i}>
                        {i === 0 ? (
                          <span className="gradient-text">{word} </span>
                        ) : (
                          <span className="text-white">{word} </span>
                        )}
                      </span>
                    ))}
                  </h1>

                  <p className="text-xl md:text-2xl text-text-secondary mb-8">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href={slide.ctaLink} className="btn btn-primary text-lg px-8 py-4 group">
                      {slide.cta}
                      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/products?category=cameras"
                      className="btn btn-secondary text-lg px-8 py-4"
                    >
                      استكشف الكاميرات
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-neon-purple w-8'
                : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>

        {/* Slide Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-sm">اسحب للأسفل</span>
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neon-purple rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Bar */}
      <section className="bg-bg-secondary border-y border-border-default py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="font-semibold text-white">{feature.title}</p>
                  <p className="text-text-muted text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              تصفح <span className="gradient-text">الفئات</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              اختر من مجموعتنا الواسعة من منتجات الأمان والتقنية الذكية
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[category.slug] || Shield;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="category-card block"
                  >
                    <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 bg-neon-purple/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-neon-cyan" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-white mb-1">{category.name}</h3>
                    <p className="text-text-muted text-sm">{category.productCount} منتج</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                منتجات <span className="gradient-text">مميزة</span>
              </h2>
              <p className="text-text-secondary">
                اكتشف أفضل منتجاتنا المختارة بعناية
              </p>
            </div>
            <Link
              href="/products"
              className="btn btn-secondary"
            >
              عرض الكل
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="products-grid">
            {featuredProducts.slice(0, 8).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10" />
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg')] bg-cover bg-center"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-neon-lime/20 border border-neon-lime/30 rounded-full text-neon-lime text-sm font-medium mb-6">
              🔥 عرض محدود
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              خصم حتى <span className="text-neon-lime">40%</span> على الكاميرات
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              استخدم كود <code className="px-3 py-1 bg-bg-tertiary rounded-lg text-neon-purple font-mono">SKER20</code> للحصول على خصم إضافي 20%
            </p>
            <Link href="/products?category=cameras" className="btn btn-primary text-lg px-8 py-4">
              تسوق الآن
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sale Products */}
      {saleProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  العروض <span className="gradient-text">الحصرية</span>
                </h2>
                <p className="text-text-secondary">
                  لا تفوّت هذه العروض المحدودة
                </p>
              </div>
              <Link
                href="/products"
                className="btn btn-secondary"
              >
                عرض الكل
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="products-grid">
              {saleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ماذا يقول <span className="gradient-text">عملاؤنا</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              آراء حقيقية من عملائنا السعداء
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border-default rounded-2xl p-6 hover:border-neon-purple transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center text-white font-bold">
                    {review.userName[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{review.userName}</p>
                    {review.verified && (
                      <span className="text-xs text-green-500">✓ مشتري معتمد</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                        }`}
                    />
                  ))}
                </div>

                <p className="text-text-secondary">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-neon-purple/20 via-bg-secondary to-neon-cyan/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              خلّي <span className="gradient-text">بيتك بأمان</span>
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              ابدأ الآن واحصل على أفضل منتجات الأمان الذكي مع ضمان سنة كاملة وشحن مجاني
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn btn-primary text-lg px-8 py-4">
                تصفح المنتجات
              </Link>
              <Link href="/contact" className="btn btn-secondary text-lg px-8 py-4">
                تواصل معنا
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
