'use client';

import { useToastStore } from '@/store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function ToastContainer() {
    const { toasts, removeToast } = useToastStore();

    const icons = {
        success: CheckCircle,
        error: AlertCircle,
        info: Info
    };

    const colors = {
        success: 'from-green-500 to-emerald-600',
        error: 'from-red-500 to-rose-600',
        info: 'from-neon-purple to-neon-cyan'
    };

    return (
        <div className="fixed bottom-6 left-6 z-[9999] flex flex-col gap-3 max-w-sm">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => {
                    const Icon = icons[toast.type];
                    const colorClass = colors[toast.type];

                    return (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: -100, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 0.8 }}
                            layout
                            className={`relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${colorClass} rounded-xl shadow-lg overflow-hidden`}
                        >
                            <Icon className="w-5 h-5 text-white flex-shrink-0" />
                            <p className="text-white text-sm font-medium flex-1 pr-6">
                                {toast.message}
                            </p>
                            <button
                                onClick={() => removeToast(toast.id)}
                                className="absolute top-2 left-2 p-1 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X className="w-4 h-4 text-white" />
                            </button>

                            {/* Progress Bar */}
                            <motion.div
                                initial={{ scaleX: 1 }}
                                animate={{ scaleX: 0 }}
                                transition={{ duration: (toast.duration || 3000) / 1000, ease: 'linear' }}
                                className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 origin-left"
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}
