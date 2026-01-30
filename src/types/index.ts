// Types for the e-commerce store

export interface Product {
    id: string;
    name: string;
    nameEn: string;
    slug: string;
    category: string;
    subcategory?: string;
    price: number;
    compareAtPrice?: number;
    rating: number;
    reviewsCount: number;
    stock: number;
    brand: string;
    badges: ('sale' | 'new' | 'hot' | 'bestseller')[];
    description: string;
    descriptionEn?: string;
    specs: ProductSpec[];
    images: string[];
    features?: string[];
}

export interface ProductSpec {
    label: string;
    value: string;
}

export interface Category {
    id: string;
    name: string;
    nameEn: string;
    slug: string;
    description: string;
    image: string;
    productCount: number;
    icon: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface WishlistItem {
    product: Product;
    addedAt: Date;
}

export interface Review {
    id: string;
    productId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
}

export interface FilterState {
    category: string | null;
    priceRange: [number, number];
    brands: string[];
    rating: number | null;
    inStock: boolean;
    resolution?: string[];
    connectivity?: string[];
    waterResistant?: boolean;
}

export interface SortOption {
    value: string;
    label: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    addresses: Address[];
}

export interface Address {
    id: string;
    label: string;
    fullName: string;
    phone: string;
    country: string;
    city: string;
    area: string;
    street: string;
    building?: string;
    apartment?: string;
    isDefault: boolean;
}

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    subtotal: number;
    shipping: number;
    discount: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    shippingAddress: Address;
    paymentMethod: string;
    createdAt: string;
}

export interface Toast {
    id: string;
    type: 'success' | 'error' | 'info';
    message: string;
    duration?: number;
}

export interface PexelsPhoto {
    id: number;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
    };
    alt: string;
}

export interface PexelsResponse {
    total_results: number;
    page: number;
    per_page: number;
    photos: PexelsPhoto[];
    next_page?: string;
}
