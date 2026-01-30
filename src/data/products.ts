import { Product, Category } from '@/types';

// Categories data
export const categories: Category[] = [
    {
        id: 'cameras',
        name: 'كاميرات مراقبة',
        nameEn: 'Security Cameras',
        slug: 'cameras',
        description: 'كاميرات مراقبة ذكية بجودة عالية لحماية منزلك وعملك',
        image: '/images/categories/cameras.jpg',
        productCount: 8,
        icon: 'Camera'
    },
    {
        id: 'smartwatches',
        name: 'ساعات ذكية',
        nameEn: 'Smart Watches',
        slug: 'smartwatches',
        description: 'ساعات ذكية متطورة لمتابعة صحتك ونشاطك اليومي',
        image: '/images/categories/smartwatches.jpg',
        productCount: 6,
        icon: 'Watch'
    },
    {
        id: 'doorbells',
        name: 'جرس باب ذكي',
        nameEn: 'Smart Doorbells',
        slug: 'doorbells',
        description: 'أجراس باب ذكية مع كاميرا لمعرفة من يطرق بابك',
        image: '/images/categories/doorbells.jpg',
        productCount: 3,
        icon: 'Bell'
    },
    {
        id: 'sensors',
        name: 'حساسات ذكية',
        nameEn: 'Smart Sensors',
        slug: 'sensors',
        description: 'حساسات حركة وفتح أبواب ونوافذ لحماية شاملة',
        image: '/images/categories/sensors.jpg',
        productCount: 4,
        icon: 'Radio'
    },
    {
        id: 'alarms',
        name: 'أنظمة إنذار',
        nameEn: 'Alarm Systems',
        slug: 'alarms',
        description: 'أنظمة إنذار منزلية متكاملة لأمان تام',
        image: '/images/categories/alarms.jpg',
        productCount: 3,
        icon: 'AlertTriangle'
    },
    {
        id: 'accessories',
        name: 'إكسسوارات',
        nameEn: 'Accessories',
        slug: 'accessories',
        description: 'كروت ذاكرة، حوامل، كابلات، وملحقات أخرى',
        image: '/images/categories/accessories.jpg',
        productCount: 6,
        icon: 'Package'
    }
];

// Products data - 30 products
export const products: Product[] = [
    // Security Cameras (8 products)
    {
        id: 'cam-001',
        name: 'كاميرا مراقبة خارجية 4K برو',
        nameEn: 'Outdoor 4K Pro Camera',
        slug: 'outdoor-4k-pro-camera',
        category: 'cameras',
        subcategory: 'outdoor',
        price: 289,
        compareAtPrice: 350,
        rating: 4.8,
        reviewsCount: 156,
        stock: 25,
        brand: 'SecureVision',
        badges: ['sale', 'bestseller'],
        description: 'كاميرا مراقبة خارجية بدقة 4K فائقة الوضوح مع رؤية ليلية ملونة وكشف حركة ذكي. مقاومة للماء والغبار IP67، مثالية للاستخدام الخارجي.',
        specs: [
            { label: 'الدقة', value: '4K Ultra HD (3840x2160)' },
            { label: 'الرؤية الليلية', value: 'ملونة حتى 30 متر' },
            { label: 'زاوية الرؤية', value: '130 درجة' },
            { label: 'الاتصال', value: 'WiFi 6 / Ethernet' },
            { label: 'التخزين', value: 'سحابي + SD حتى 256GB' },
            { label: 'مقاومة الماء', value: 'IP67' },
            { label: 'كشف الحركة', value: 'AI ذكي مع تمييز الأشخاص' }
        ],
        images: [
            'https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg',
            'https://images.pexels.com/photos/3205736/pexels-photo-3205736.jpeg'
        ],
        features: ['رؤية ليلية ملونة', 'كشف حركة ذكي', 'مقاومة للماء', 'صوت ثنائي الاتجاه']
    },
    {
        id: 'cam-002',
        name: 'كاميرا داخلية دوارة 2K',
        nameEn: 'Indoor PTZ 2K Camera',
        slug: 'indoor-ptz-2k-camera',
        category: 'cameras',
        subcategory: 'indoor',
        price: 149,
        compareAtPrice: 189,
        rating: 4.6,
        reviewsCount: 89,
        stock: 42,
        brand: 'SecureVision',
        badges: ['hot'],
        description: 'كاميرا داخلية دوارة 360 درجة بدقة 2K مع تتبع تلقائي للحركة. مثالية لمراقبة الأطفال والحيوانات الأليفة.',
        specs: [
            { label: 'الدقة', value: '2K QHD (2560x1440)' },
            { label: 'الدوران', value: '355° أفقي / 90° عمودي' },
            { label: 'الرؤية الليلية', value: 'حتى 10 متر' },
            { label: 'الاتصال', value: 'WiFi 5' },
            { label: 'التخزين', value: 'سحابي + SD حتى 128GB' },
            { label: 'تتبع الحركة', value: 'تلقائي ذكي' }
        ],
        images: [
            'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg'
        ],
        features: ['تتبع تلقائي', 'دوران 360°', 'صوت ثنائي', 'وضع الخصوصية']
    },
    {
        id: 'cam-003',
        name: 'نظام NVR 8 كاميرات 4K',
        nameEn: '8CH 4K NVR System',
        slug: 'nvr-8ch-4k-system',
        category: 'cameras',
        subcategory: 'nvr',
        price: 899,
        compareAtPrice: 1100,
        rating: 4.9,
        reviewsCount: 67,
        stock: 12,
        brand: 'SecureVision',
        badges: ['sale', 'bestseller'],
        description: 'نظام تسجيل شبكي كامل مع 8 كاميرات 4K خارجية وهارد 2TB. حل متكامل للمنازل والشركات.',
        specs: [
            { label: 'عدد الكاميرات', value: '8 كاميرات 4K' },
            { label: 'سعة التخزين', value: '2TB HDD (قابل للتوسيع)' },
            { label: 'الدقة', value: '4K Ultra HD' },
            { label: 'الرؤية الليلية', value: 'حتى 30 متر' },
            { label: 'كشف الحركة', value: 'AI متقدم' },
            { label: 'المراقبة عن بعد', value: 'تطبيق مجاني' }
        ],
        images: [
            'https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg'
        ],
        features: ['8 كاميرات 4K', 'هارد 2TB', 'تسجيل 24/7', 'مراقبة بالموبايل']
    },
    {
        id: 'cam-004',
        name: 'كاميرا صغيرة خفية WiFi',
        nameEn: 'Mini Hidden WiFi Camera',
        slug: 'mini-hidden-wifi-camera',
        category: 'cameras',
        subcategory: 'indoor',
        price: 79,
        rating: 4.4,
        reviewsCount: 234,
        stock: 85,
        brand: 'MicroEye',
        badges: ['hot'],
        description: 'كاميرا صغيرة جداً للمراقبة السرية بدقة 1080p. سهلة الإخفاء مع بطارية تدوم 90 دقيقة.',
        specs: [
            { label: 'الدقة', value: '1080p Full HD' },
            { label: 'الأبعاد', value: '2.5 × 2.5 × 2.5 سم' },
            { label: 'البطارية', value: '90 دقيقة' },
            { label: 'الاتصال', value: 'WiFi' },
            { label: 'التخزين', value: 'SD حتى 64GB' }
        ],
        images: [
            'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg'
        ],
        features: ['حجم صغير جداً', 'بطارية مدمجة', 'كشف حركة', 'تسجيل صوتي']
    },
    {
        id: 'cam-005',
        name: 'كاميرا طاقة شمسية لاسلكية',
        nameEn: 'Solar Wireless Camera',
        slug: 'solar-wireless-camera',
        category: 'cameras',
        subcategory: 'outdoor',
        price: 199,
        compareAtPrice: 249,
        rating: 4.5,
        reviewsCount: 78,
        stock: 30,
        brand: 'EcoSec',
        badges: ['new', 'sale'],
        description: 'كاميرا خارجية تعمل بالطاقة الشمسية 100% لاسلكية. مثالية للأماكن البعيدة عن الكهرباء.',
        specs: [
            { label: 'الدقة', value: '2K QHD' },
            { label: 'الطاقة', value: 'لوح شمسي مدمج' },
            { label: 'البطارية', value: '10000mAh' },
            { label: 'الاتصال', value: 'WiFi / 4G LTE' },
            { label: 'مقاومة الماء', value: 'IP66' }
        ],
        images: [
            'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg'
        ],
        features: ['طاقة شمسية', 'لاسلكية 100%', 'رؤية ليلية', '4G اختياري']
    },
    {
        id: 'cam-006',
        name: 'كاميرا 4G LTE للمواقع البعيدة',
        nameEn: '4G LTE Remote Camera',
        slug: '4g-lte-remote-camera',
        category: 'cameras',
        subcategory: 'outdoor',
        price: 259,
        rating: 4.7,
        reviewsCount: 45,
        stock: 18,
        brand: 'RemoteGuard',
        badges: ['new'],
        description: 'كاميرا تعمل بشريحة 4G للمواقع التي لا يتوفر فيها WiFi. مثالية للمزارع والمخازن البعيدة.',
        specs: [
            { label: 'الدقة', value: '1080p Full HD' },
            { label: 'الاتصال', value: '4G LTE (شريحة SIM)' },
            { label: 'البطارية', value: '15000mAh' },
            { label: 'التخزين', value: 'SD حتى 128GB + سحابي' },
            { label: 'مقاومة الماء', value: 'IP67' }
        ],
        images: [
            'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg'
        ],
        features: ['4G LTE', 'بطارية كبيرة', 'لوح شمسي اختياري', 'كشف حركة']
    },
    {
        id: 'cam-007',
        name: 'كاميرا Fisheye بانورامية 360°',
        nameEn: '360° Fisheye Panoramic Camera',
        slug: 'fisheye-360-camera',
        category: 'cameras',
        subcategory: 'indoor',
        price: 129,
        rating: 4.3,
        reviewsCount: 56,
        stock: 35,
        brand: 'PanoView',
        badges: [],
        description: 'كاميرا بعدسة عين السمكة تغطي 360 درجة بكاميرا واحدة. مثالية للمحلات والمكاتب.',
        specs: [
            { label: 'الدقة', value: '3MP' },
            { label: 'زاوية الرؤية', value: '360° بانورامي' },
            { label: 'الاتصال', value: 'WiFi / Ethernet' },
            { label: 'الرؤية الليلية', value: 'حتى 10 متر' }
        ],
        images: [
            'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg'
        ],
        features: ['رؤية 360°', 'عدسة واحدة', 'تثبيت سقفي', 'تسجيل مستمر']
    },
    {
        id: 'cam-008',
        name: 'كاميرا مراقبة أطفال ذكية',
        nameEn: 'Smart Baby Monitor Camera',
        slug: 'smart-baby-monitor',
        category: 'cameras',
        subcategory: 'indoor',
        price: 119,
        rating: 4.8,
        reviewsCount: 189,
        stock: 55,
        brand: 'BabyCare',
        badges: ['bestseller'],
        description: 'كاميرا مراقبة أطفال مع كشف البكاء والحركة. تشغيل موسيقى وضوء ليلي هادئ.',
        specs: [
            { label: 'الدقة', value: '1080p Full HD' },
            { label: 'كشف البكاء', value: 'AI ذكي' },
            { label: 'الصوت', value: 'ثنائي الاتجاه' },
            { label: 'الضوء الليلي', value: 'ألوان متعددة' },
            { label: 'الموسيقى', value: 'أغاني تهويد مدمجة' }
        ],
        images: [
            'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg'
        ],
        features: ['كشف بكاء', 'موسيقى هادئة', 'ضوء ليلي', 'قياس حرارة']
    },

    // Smart Watches (6 products)
    {
        id: 'watch-001',
        name: 'ساعة ذكية رياضية برو',
        nameEn: 'Sport Pro Smart Watch',
        slug: 'sport-pro-smart-watch',
        category: 'smartwatches',
        subcategory: 'sport',
        price: 179,
        compareAtPrice: 220,
        rating: 4.7,
        reviewsCount: 312,
        stock: 68,
        brand: 'FitTech',
        badges: ['sale', 'bestseller'],
        description: 'ساعة ذكية رياضية متقدمة مع GPS مدمج ومقاومة للماء 5ATM. تتبع أكثر من 100 نوع رياضة.',
        specs: [
            { label: 'الشاشة', value: 'AMOLED 1.43" 466x466' },
            { label: 'البطارية', value: '14 يوم' },
            { label: 'GPS', value: 'مدمج (GPS+GLONASS)' },
            { label: 'مقاومة الماء', value: '5ATM (سباحة)' },
            { label: 'المستشعرات', value: 'نبض، أكسجين، ضغط' },
            { label: 'الرياضات', value: '+100 نوع' }
        ],
        images: [
            'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
        ],
        features: ['GPS مدمج', 'مقاومة للماء', 'قياس SpO2', 'تتبع النوم']
    },
    {
        id: 'watch-002',
        name: 'ساعة ذكية بلوتوث للمكالمات',
        nameEn: 'Bluetooth Calling Watch',
        slug: 'bluetooth-calling-watch',
        category: 'smartwatches',
        subcategory: 'calling',
        price: 149,
        rating: 4.5,
        reviewsCount: 187,
        stock: 45,
        brand: 'CallPro',
        badges: ['hot'],
        description: 'ساعة ذكية مع سماعة ومايكروفون مدمج للرد على المكالمات مباشرة من معصمك.',
        specs: [
            { label: 'الشاشة', value: 'IPS 1.39" 360x360' },
            { label: 'البطارية', value: '7 أيام' },
            { label: 'المكالمات', value: 'بلوتوث (سماعة + مايك)' },
            { label: 'مقاومة الماء', value: 'IP68' },
            { label: 'المستشعرات', value: 'نبض، SpO2' }
        ],
        images: [
            'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg'
        ],
        features: ['مكالمات مباشرة', 'سماعة مدمجة', 'إشعارات ذكية', 'تحكم بالموسيقى']
    },
    {
        id: 'watch-003',
        name: 'ساعة ذكية أنيقة للسيدات',
        nameEn: 'Elegant Ladies Smart Watch',
        slug: 'elegant-ladies-watch',
        category: 'smartwatches',
        subcategory: 'fashion',
        price: 159,
        compareAtPrice: 199,
        rating: 4.8,
        reviewsCount: 234,
        stock: 38,
        brand: 'Elegance',
        badges: ['sale', 'new'],
        description: 'ساعة ذكية أنيقة بتصميم نسائي راقي مع متابعة الدورة الشهرية والحمل.',
        specs: [
            { label: 'الشاشة', value: 'AMOLED 1.2" دائرية' },
            { label: 'البطارية', value: '10 أيام' },
            { label: 'التصميم', value: 'ستانلس ستيل ذهبي' },
            { label: 'مقاومة الماء', value: 'IP68' },
            { label: 'صحة المرأة', value: 'تتبع الدورة والحمل' }
        ],
        images: [
            'https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg'
        ],
        features: ['تصميم أنيق', 'صحة المرأة', 'إشعارات أنيقة', 'وجوه متعددة']
    },
    {
        id: 'watch-004',
        name: 'ساعة أطفال ذكية GPS',
        nameEn: 'Kids GPS Smart Watch',
        slug: 'kids-gps-smart-watch',
        category: 'smartwatches',
        subcategory: 'kids',
        price: 89,
        rating: 4.6,
        reviewsCount: 156,
        stock: 72,
        brand: 'KidSafe',
        badges: ['hot'],
        description: 'ساعة ذكية للأطفال مع تتبع GPS ومكالمات SOS. طمأنينة للوالدين وأمان للأطفال.',
        specs: [
            { label: 'الشاشة', value: 'IPS 1.4" ملون' },
            { label: 'GPS', value: 'تتبع موقع حي' },
            { label: 'SOS', value: 'زر طوارئ' },
            { label: 'المكالمات', value: 'SIM 4G' },
            { label: 'مقاومة الماء', value: 'IP67' }
        ],
        images: [
            'https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg'
        ],
        features: ['تتبع GPS', 'زر SOS', 'مكالمات', 'سياج جغرافي']
    },
    {
        id: 'watch-005',
        name: 'ساعة ذكية فاخرة تيتانيوم',
        nameEn: 'Titanium Luxury Smart Watch',
        slug: 'titanium-luxury-watch',
        category: 'smartwatches',
        subcategory: 'luxury',
        price: 399,
        compareAtPrice: 499,
        rating: 4.9,
        reviewsCount: 89,
        stock: 15,
        brand: 'LuxWatch',
        badges: ['sale', 'bestseller'],
        description: 'ساعة ذكية فاخرة بإطار تيتانيوم وشاشة سافير. أناقة لا مثيل لها مع أحدث التقنيات.',
        specs: [
            { label: 'الشاشة', value: 'AMOLED 1.5" Sapphire' },
            { label: 'الإطار', value: 'تيتانيوم Grade 5' },
            { label: 'البطارية', value: '21 يوم' },
            { label: 'GPS', value: 'Dual-band' },
            { label: 'السوار', value: 'جلد إيطالي' }
        ],
        images: [
            'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
        ],
        features: ['تيتانيوم', 'سافير', 'جلد إيطالي', 'NFC للدفع']
    },
    {
        id: 'watch-006',
        name: 'ساعة رياضية للجري والسباحة',
        nameEn: 'Running & Swimming Watch',
        slug: 'running-swimming-watch',
        category: 'smartwatches',
        subcategory: 'sport',
        price: 129,
        rating: 4.4,
        reviewsCount: 198,
        stock: 56,
        brand: 'AquaFit',
        badges: [],
        description: 'ساعة مخصصة للرياضيين مع GPS دقيق ومقاومة ماء للسباحة والغوص حتى 50 متر.',
        specs: [
            { label: 'الشاشة', value: 'MIP 1.2"' },
            { label: 'GPS', value: 'GPS + Galileo' },
            { label: 'مقاومة الماء', value: '10ATM (50 متر)' },
            { label: 'البطارية', value: '30 يوم (GPS: 40 ساعة)' },
            { label: 'الرياضات', value: 'جري، سباحة، ترايثلون' }
        ],
        images: [
            'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg'
        ],
        features: ['غوص 50م', 'GPS دقيق', 'بطارية طويلة', 'ترايثلون']
    },

    // Smart Doorbells (3 products)
    {
        id: 'bell-001',
        name: 'جرس باب ذكي برو 2K',
        nameEn: 'Smart Doorbell Pro 2K',
        slug: 'smart-doorbell-pro-2k',
        category: 'doorbells',
        price: 179,
        compareAtPrice: 220,
        rating: 4.7,
        reviewsCount: 134,
        stock: 28,
        brand: 'DoorGuard',
        badges: ['sale', 'bestseller'],
        description: 'جرس باب ذكي بكاميرا 2K وكشف ذكي للأشخاص. تحدث مع الزوار من أي مكان في العالم.',
        specs: [
            { label: 'الدقة', value: '2K QHD' },
            { label: 'زاوية الرؤية', value: '160 درجة' },
            { label: 'كشف الحركة', value: 'AI (أشخاص/طرود)' },
            { label: 'الصوت', value: 'ثنائي الاتجاه HD' },
            { label: 'الطاقة', value: 'سلكي أو بطارية' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['كشف طرود', 'رد سريع', 'تسجيل 24/7', 'تكامل Alexa']
    },
    {
        id: 'bell-002',
        name: 'جرس باب لاسلكي بطارية',
        nameEn: 'Wireless Battery Doorbell',
        slug: 'wireless-battery-doorbell',
        category: 'doorbells',
        price: 119,
        rating: 4.5,
        reviewsCount: 87,
        stock: 42,
        brand: 'DoorGuard',
        badges: ['hot'],
        description: 'جرس باب لاسلكي يعمل بالبطارية بدون أسلاك. تركيب سهل خلال دقائق.',
        specs: [
            { label: 'الدقة', value: '1080p Full HD' },
            { label: 'البطارية', value: '6 أشهر' },
            { label: 'التركيب', value: 'لاسلكي (لاصق أو براغي)' },
            { label: 'الاتصال', value: 'WiFi' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['تركيب سهل', 'بطارية 6 شهور', 'كشف حركة', 'إشعارات فورية']
    },
    {
        id: 'bell-003',
        name: 'جرس باب مع شاشة داخلية',
        nameEn: 'Video Doorbell with Indoor Display',
        slug: 'doorbell-indoor-display',
        category: 'doorbells',
        price: 249,
        rating: 4.8,
        reviewsCount: 56,
        stock: 18,
        brand: 'HomeView',
        badges: ['new'],
        description: 'جرس باب ذكي مع شاشة داخلية 7 بوصة. شاهد الزوار مباشرة بدون موبايل.',
        specs: [
            { label: 'الكاميرا', value: '2K Wide Angle' },
            { label: 'الشاشة الداخلية', value: '7" IPS Touch' },
            { label: 'التخزين', value: 'SD Card + Cloud' },
            { label: 'الطاقة', value: 'سلكي' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['شاشة 7 بوصة', 'لمس', 'تسجيل محلي', 'رنين موسيقي']
    },

    // Smart Sensors (4 products)
    {
        id: 'sensor-001',
        name: 'مستشعر حركة ذكي PIR',
        nameEn: 'Smart PIR Motion Sensor',
        slug: 'smart-pir-motion-sensor',
        category: 'sensors',
        price: 39,
        rating: 4.5,
        reviewsCount: 156,
        stock: 120,
        brand: 'SenseHome',
        badges: ['bestseller'],
        description: 'مستشعر حركة ذكي يرسل إشعارات فورية عند اكتشاف حركة. يتكامل مع الكاميرات والإنذار.',
        specs: [
            { label: 'نوع المستشعر', value: 'PIR' },
            { label: 'زاوية الكشف', value: '120 درجة' },
            { label: 'المسافة', value: 'حتى 8 متر' },
            { label: 'البطارية', value: 'CR2450 (سنتين)' },
            { label: 'الاتصال', value: 'Zigbee / WiFi' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['كشف 120°', 'بطارية سنتين', 'تكامل ذكي', 'إشعار فوري']
    },
    {
        id: 'sensor-002',
        name: 'مستشعر فتح أبواب ونوافذ',
        nameEn: 'Door/Window Contact Sensor',
        slug: 'door-window-sensor',
        category: 'sensors',
        price: 29,
        rating: 4.6,
        reviewsCount: 234,
        stock: 200,
        brand: 'SenseHome',
        badges: ['hot'],
        description: 'مستشعر مغناطيسي للأبواب والنوافذ. يرسل تنبيه فوري عند الفتح.',
        specs: [
            { label: 'النوع', value: 'مغناطيسي' },
            { label: 'البطارية', value: 'CR1632 (18 شهر)' },
            { label: 'الاتصال', value: 'Zigbee' },
            { label: 'الأبعاد', value: '4 × 2 × 1 سم' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['تركيب سهل', 'حجم صغير', 'تنبيه فتح/إغلاق', 'سجل الأحداث']
    },
    {
        id: 'sensor-003',
        name: 'مستشعر تسرب المياه',
        nameEn: 'Water Leak Sensor',
        slug: 'water-leak-sensor',
        category: 'sensors',
        price: 35,
        rating: 4.7,
        reviewsCount: 89,
        stock: 75,
        brand: 'AquaSafe',
        badges: ['new'],
        description: 'مستشعر تسرب مياه ذكي يحميك من أضرار الفيضانات. إشعار فوري + صفارة إنذار.',
        specs: [
            { label: 'الكشف', value: 'تسرب مياه' },
            { label: 'الإنذار', value: '90dB صفارة' },
            { label: 'البطارية', value: 'AAA (سنة)' },
            { label: 'الاتصال', value: 'WiFi' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['كشف فوري', 'صفارة 90dB', 'إشعار موبايل', 'مقاوم للماء']
    },
    {
        id: 'sensor-004',
        name: 'مستشعر دخان وحريق ذكي',
        nameEn: 'Smart Smoke & Fire Detector',
        slug: 'smart-smoke-detector',
        category: 'sensors',
        price: 59,
        rating: 4.9,
        reviewsCount: 67,
        stock: 48,
        brand: 'FireGuard',
        badges: ['bestseller'],
        description: 'مستشعر دخان وحريق ذكي يرسل تنبيهات للموبايل ويفعّل صفارة إنذار عالية.',
        specs: [
            { label: 'الكشف', value: 'دخان + حرارة' },
            { label: 'الإنذار', value: '85dB' },
            { label: 'البطارية', value: '10 سنوات' },
            { label: 'الاتصال', value: 'WiFi' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['كشف مزدوج', 'بطارية 10 سنوات', 'اختبار ذاتي', 'شهادة سلامة']
    },

    // Alarm Systems (3 products)
    {
        id: 'alarm-001',
        name: 'نظام إنذار منزلي متكامل',
        nameEn: 'Complete Home Alarm System',
        slug: 'complete-home-alarm',
        category: 'alarms',
        price: 349,
        compareAtPrice: 450,
        rating: 4.8,
        reviewsCount: 123,
        stock: 22,
        brand: 'HomeSecure',
        badges: ['sale', 'bestseller'],
        description: 'نظام إنذار منزلي متكامل مع لوحة تحكم، 4 مستشعرات حركة، 2 مستشعر أبواب، وصفارة إنذار.',
        specs: [
            { label: 'المحتويات', value: 'لوحة + 4 PIR + 2 باب + صفارة' },
            { label: 'التحكم', value: 'تطبيق + ريموت' },
            { label: 'الاتصال', value: 'WiFi + GSM' },
            { label: 'البطارية الاحتياطية', value: '8 ساعات' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['6 مستشعرات', 'تطبيق ذكي', 'GSM احتياطي', 'أكواد متعددة']
    },
    {
        id: 'alarm-002',
        name: 'صفارة إنذار خارجية ذكية',
        nameEn: 'Smart Outdoor Siren',
        slug: 'smart-outdoor-siren',
        category: 'alarms',
        price: 89,
        rating: 4.6,
        reviewsCount: 67,
        stock: 35,
        brand: 'HomeSecure',
        badges: ['hot'],
        description: 'صفارة إنذار خارجية بصوت 110dB مع ضوء فلاش وشحن شمسي.',
        specs: [
            { label: 'الصوت', value: '110dB' },
            { label: 'الضوء', value: 'LED فلاش' },
            { label: 'الطاقة', value: 'شمسي + بطارية' },
            { label: 'مقاومة الماء', value: 'IP65' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['110dB', 'فلاش', 'شمسي', 'مقاوم للماء']
    },
    {
        id: 'alarm-003',
        name: 'لوحة تحكم إنذار ذكية',
        nameEn: 'Smart Alarm Control Panel',
        slug: 'smart-alarm-panel',
        category: 'alarms',
        price: 149,
        rating: 4.7,
        reviewsCount: 45,
        stock: 28,
        brand: 'ControlHub',
        badges: ['new'],
        description: 'لوحة تحكم ذكية بشاشة لمس تتكامل مع جميع المستشعرات والكاميرات.',
        specs: [
            { label: 'الشاشة', value: '4.3" IPS Touch' },
            { label: 'المستشعرات', value: 'حتى 100' },
            { label: 'الاتصال', value: 'WiFi + Zigbee + Z-Wave' },
            { label: 'البطارية', value: '24 ساعة احتياطي' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['شاشة لمس', '100 مستشعر', 'تكامل شامل', 'أتمتة']
    },

    // Accessories (6 products)
    {
        id: 'acc-001',
        name: 'كرت ذاكرة 128GB للكاميرات',
        nameEn: '128GB Surveillance SD Card',
        slug: '128gb-surveillance-sd-card',
        category: 'accessories',
        price: 35,
        rating: 4.7,
        reviewsCount: 456,
        stock: 200,
        brand: 'StoragePro',
        badges: ['bestseller'],
        description: 'كرت ذاكرة مصمم خصيصاً للتسجيل المستمر 24/7 في كاميرات المراقبة.',
        specs: [
            { label: 'السعة', value: '128GB' },
            { label: 'السرعة', value: 'U3 V30' },
            { label: 'التحمل', value: 'تسجيل 24/7' },
            { label: 'الضمان', value: '5 سنوات' }
        ],
        images: [
            'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg'
        ],
        features: ['تسجيل 24/7', 'مقاوم للحرارة', 'سرعة عالية', 'ضمان 5 سنوات']
    },
    {
        id: 'acc-002',
        name: 'كرت ذاكرة 256GB للكاميرات',
        nameEn: '256GB Surveillance SD Card',
        slug: '256gb-surveillance-sd-card',
        category: 'accessories',
        price: 59,
        rating: 4.8,
        reviewsCount: 234,
        stock: 150,
        brand: 'StoragePro',
        badges: ['hot'],
        description: 'كرت ذاكرة سعة 256GB للتسجيل الطويل في كاميرات المراقبة.',
        specs: [
            { label: 'السعة', value: '256GB' },
            { label: 'السرعة', value: 'U3 V30' },
            { label: 'التحمل', value: 'تسجيل 24/7' },
            { label: 'الضمان', value: '5 سنوات' }
        ],
        images: [
            'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg'
        ],
        features: ['256GB', 'كتابة عالية', 'استرداد البيانات', 'مقاوم للصدمات']
    },
    {
        id: 'acc-003',
        name: 'حامل كاميرا حائط معدني',
        nameEn: 'Metal Wall Camera Mount',
        slug: 'metal-wall-camera-mount',
        category: 'accessories',
        price: 19,
        rating: 4.5,
        reviewsCount: 189,
        stock: 300,
        brand: 'MountPro',
        badges: [],
        description: 'حامل حائط معدني قوي للكاميرات الخارجية. قابل للدوران 360 درجة.',
        specs: [
            { label: 'المادة', value: 'ألمنيوم' },
            { label: 'الدوران', value: '360°' },
            { label: 'التحمل', value: 'حتى 3 كغ' },
            { label: 'مقاومة الصدأ', value: 'نعم' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['ألمنيوم', 'دوران كامل', 'مقاوم للصدأ', 'تركيب سهل']
    },
    {
        id: 'acc-004',
        name: 'كيبل تمديد PoE 30 متر',
        nameEn: '30m PoE Extension Cable',
        slug: '30m-poe-extension-cable',
        category: 'accessories',
        price: 25,
        rating: 4.6,
        reviewsCount: 123,
        stock: 180,
        brand: 'CableTech',
        badges: [],
        description: 'كيبل شبكة Cat6 بطول 30 متر يدعم نقل الطاقة PoE للكاميرات.',
        specs: [
            { label: 'الطول', value: '30 متر' },
            { label: 'النوع', value: 'Cat6 PoE' },
            { label: 'السرعة', value: 'Gigabit' },
            { label: 'الغلاف', value: 'مقاوم للماء' }
        ],
        images: [
            'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'
        ],
        features: ['30 متر', 'PoE', 'خارجي', 'Gigabit']
    },
    {
        id: 'acc-005',
        name: 'سوار ساعة سيليكون رياضي',
        nameEn: 'Sport Silicone Watch Band',
        slug: 'sport-silicone-watch-band',
        category: 'accessories',
        price: 15,
        rating: 4.4,
        reviewsCount: 345,
        stock: 500,
        brand: 'BandStyle',
        badges: ['hot'],
        description: 'سوار سيليكون رياضي مريح ومقاوم للعرق. متوفر بعدة ألوان.',
        specs: [
            { label: 'المادة', value: 'سيليكون طبي' },
            { label: 'القياس', value: '20mm / 22mm' },
            { label: 'الألوان', value: 'أسود، أزرق، أخضر، أحمر' },
            { label: 'التوافق', value: 'معظم الساعات' }
        ],
        images: [
            'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
        ],
        features: ['سيليكون طبي', 'مقاوم للعرق', 'ألوان متعددة', 'تركيب سريع']
    },
    {
        id: 'acc-006',
        name: 'شاحن لاسلكي للساعات الذكية',
        nameEn: 'Smart Watch Wireless Charger',
        slug: 'smart-watch-wireless-charger',
        category: 'accessories',
        price: 29,
        rating: 4.5,
        reviewsCount: 178,
        stock: 120,
        brand: 'ChargeFast',
        badges: ['new'],
        description: 'شاحن لاسلكي مغناطيسي للساعات الذكية. شحن سريع وآمن.',
        specs: [
            { label: 'النوع', value: 'لاسلكي مغناطيسي' },
            { label: 'الطاقة', value: '5W' },
            { label: 'الكيبل', value: 'USB-C 1 متر' },
            { label: 'التوافق', value: 'ساعات Qi' }
        ],
        images: [
            'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
        ],
        features: ['مغناطيسي', 'شحن سريع', 'USB-C', 'مؤشر LED']
    }
];

// Brands
export const brands = [
    'SecureVision',
    'MicroEye',
    'EcoSec',
    'RemoteGuard',
    'PanoView',
    'BabyCare',
    'FitTech',
    'CallPro',
    'Elegance',
    'KidSafe',
    'LuxWatch',
    'AquaFit',
    'DoorGuard',
    'HomeView',
    'SenseHome',
    'AquaSafe',
    'FireGuard',
    'HomeSecure',
    'ControlHub',
    'StoragePro',
    'MountPro',
    'CableTech',
    'BandStyle',
    'ChargeFast'
];

// Sample reviews
export const reviews = [
    {
        id: 'rev-001',
        productId: 'cam-001',
        userName: 'أحمد محمد',
        rating: 5,
        comment: 'كاميرا ممتازة جداً! الدقة عالية والرؤية الليلية واضحة. أنصح بها بقوة.',
        date: '2024-01-15',
        verified: true
    },
    {
        id: 'rev-002',
        productId: 'cam-001',
        userName: 'سارة علي',
        rating: 4,
        comment: 'منتج رائع، التركيب كان سهل والتطبيق سلس. فقط أتمنى لو كان السعر أقل قليلاً.',
        date: '2024-01-10',
        verified: true
    },
    {
        id: 'rev-003',
        productId: 'watch-001',
        userName: 'محمد خالد',
        rating: 5,
        comment: 'ساعة مذهلة للرياضة! البطارية تدوم فعلاً 14 يوم والـ GPS دقيق جداً.',
        date: '2024-01-20',
        verified: true
    }
];

// Featured products (IDs)
export const featuredProductIds = [
    'cam-001',
    'watch-001',
    'bell-001',
    'cam-003',
    'watch-005',
    'alarm-001'
];

// Get featured products
export const getFeaturedProducts = (): Product[] => {
    return products.filter(p => featuredProductIds.includes(p.id));
};

// Get products by category
export const getProductsByCategory = (categorySlug: string): Product[] => {
    return products.filter(p => p.category === categorySlug);
};

// Get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find(p => p.slug === slug);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
    return products.find(p => p.id === id);
};

// Get related products
export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
    return products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, limit);
};

// Search products
export const searchProducts = (query: string): Product[] => {
    const lowerQuery = query.toLowerCase();
    return products.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.nameEn.toLowerCase().includes(lowerQuery) ||
        p.brand.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
};

// Filter products
export const filterProducts = (
    categorySlug?: string,
    priceRange?: [number, number],
    brandsList?: string[],
    minRating?: number,
    inStock?: boolean
): Product[] => {
    return products.filter(p => {
        if (categorySlug && p.category !== categorySlug) return false;
        if (priceRange && (p.price < priceRange[0] || p.price > priceRange[1])) return false;
        if (brandsList && brandsList.length > 0 && !brandsList.includes(p.brand)) return false;
        if (minRating && p.rating < minRating) return false;
        if (inStock && p.stock === 0) return false;
        return true;
    });
};

// Sort products
export type SortType = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

export const sortProducts = (productList: Product[], sortType: SortType): Product[] => {
    const sorted = [...productList];

    switch (sortType) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return sorted.sort((a, b) => b.badges.includes('new') ? 1 : -1);
        default:
            return sorted;
    }
};
