import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product, CartItem, WishlistItem, Toast } from '@/types';

// Cart Store
interface CartState {
    items: CartItem[];
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getSubtotal: () => number;
    getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product: Product, quantity = 1) => {
                set((state) => {
                    const existingItem = state.items.find(item => item.product.id === product.id);

                    if (existingItem) {
                        return {
                            items: state.items.map(item =>
                                item.product.id === product.id
                                    ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
                                    : item
                            )
                        };
                    }

                    return {
                        items: [...state.items, { product, quantity: Math.min(quantity, product.stock) }]
                    };
                });
            },

            removeItem: (productId: string) => {
                set((state) => ({
                    items: state.items.filter(item => item.product.id !== productId)
                }));
            },

            updateQuantity: (productId: string, quantity: number) => {
                set((state) => ({
                    items: state.items.map(item =>
                        item.product.id === productId
                            ? { ...item, quantity: Math.max(1, Math.min(quantity, item.product.stock)) }
                            : item
                    )
                }));
            },

            clearCart: () => set({ items: [] }),

            getTotal: () => {
                const state = get();
                const subtotal = state.getSubtotal();
                // Add shipping logic here if needed
                return subtotal;
            },

            getSubtotal: () => {
                const state = get();
                return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
            },

            getItemCount: () => {
                const state = get();
                return state.items.reduce((count, item) => count + item.quantity, 0);
            }
        }),
        {
            name: 'sker-cart',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

// Wishlist Store
interface WishlistState {
    items: WishlistItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product: Product) => {
                set((state) => {
                    if (state.items.find(item => item.product.id === product.id)) {
                        return state;
                    }
                    return {
                        items: [...state.items, { product, addedAt: new Date() }]
                    };
                });
            },

            removeItem: (productId: string) => {
                set((state) => ({
                    items: state.items.filter(item => item.product.id !== productId)
                }));
            },

            isInWishlist: (productId: string) => {
                return get().items.some(item => item.product.id === productId);
            },

            clearWishlist: () => set({ items: [] })
        }),
        {
            name: 'sker-wishlist',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

// Toast Store
interface ToastState {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
    toasts: [],

    addToast: (toast) => {
        const id = Math.random().toString(36).substr(2, 9);
        set((state) => ({
            toasts: [...state.toasts, { ...toast, id }]
        }));

        // Auto remove toast after duration
        setTimeout(() => {
            set((state) => ({
                toasts: state.toasts.filter(t => t.id !== id)
            }));
        }, toast.duration || 3000);
    },

    removeToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter(t => t.id !== id)
        }));
    }
}));

// Search Store
interface SearchState {
    query: string;
    isOpen: boolean;
    results: Product[];
    setQuery: (query: string) => void;
    setIsOpen: (isOpen: boolean) => void;
    setResults: (results: Product[]) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    query: '',
    isOpen: false,
    results: [],

    setQuery: (query) => set({ query }),
    setIsOpen: (isOpen) => set({ isOpen }),
    setResults: (results) => set({ results })
}));

// UI Store
interface UIState {
    isMobileMenuOpen: boolean;
    isCartOpen: boolean;
    isLoading: boolean;
    setMobileMenuOpen: (isOpen: boolean) => void;
    setCartOpen: (isOpen: boolean) => void;
    setLoading: (isLoading: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
    isMobileMenuOpen: false,
    isCartOpen: false,
    isLoading: true,

    setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
    setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
    setLoading: (isLoading) => set({ isLoading })
}));
