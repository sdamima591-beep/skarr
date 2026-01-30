'use client';

import { Suspense } from 'react';
import ProductsContent from './ProductsContent';

export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-bg-primary flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-neon-purple/20 border-t-neon-purple rounded-full animate-spin" />
                    <p className="text-text-secondary">جارٍ التحميل...</p>
                </div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}
