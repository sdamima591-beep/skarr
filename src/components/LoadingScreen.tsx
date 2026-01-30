'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUIStore } from '@/store';

export default function LoadingScreen() {
    const { isLoading, setLoading } = useUIStore();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setLoading(false), 300);
                        return 100;
                    }
                    return prev + Math.random() * 15;
                });
            }, 150);

            return () => clearInterval(interval);
        }
    }, [isLoading, setLoading]);

    // Hide loading after 2 seconds max
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [setLoading]);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bg-primary z-[10000] flex flex-col items-center justify-center"
        >
            {/* Logo */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
            >
                <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl flex items-center justify-center animate-float">
                    <span className="text-white font-bold text-4xl">S</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-2xl blur-xl opacity-50 animate-glow-pulse" />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold gradient-text mb-8"
            >
                SKER
            </motion.h1>

            {/* Loading Bar */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="relative"
            >
                <div className="w-[200px] h-1 bg-bg-tertiary rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                    />
                </div>
                <p className="text-text-muted text-sm mt-3 text-center">
                    جارٍ التحميل...
                </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
            </div>
        </motion.div>
    );
}
