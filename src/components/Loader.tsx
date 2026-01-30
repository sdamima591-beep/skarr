'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[99999] bg-bg-primary flex items-center justify-center"
                >
                    <div className="text-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <div className="relative w-24 h-24 mx-auto">
                                {/* Outer Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-neon-purple border-r-neon-cyan"
                                />

                                {/* Inner Circle */}
                                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">S</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Brand Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-bold gradient-text mb-2"
                        >
                            sker
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-text-muted text-sm"
                        >
                            جارٍ التحميل...
                        </motion.p>

                        {/* Loading Dots */}
                        <div className="flex gap-2 justify-center mt-6">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.15,
                                    }}
                                    className="w-2 h-2 bg-neon-purple rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Loader;
