'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useToastStore } from '@/store';

export function ToastProvider() {
    const { toasts, removeToast } = useToastStore();

    useEffect(() => {
        const timers = toasts.map(toast =>
            setTimeout(() => removeToast(toast.id), toast.duration || 3000)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [toasts, removeToast]);

    const icons = {
        success: CheckCircle,
        error: AlertCircle,
        info: Info,
    };

    const colors = {
        success: 'from-green-500/20 to-emerald-600/20 border-green-500/30 text-green-500',
        error: 'from-red-500/20 to-rose-600/20 border-red-500/30 text-red-400',
        info: 'from-blue-500/20 to-cyan-600/20 border-blue-500/30 text-blue-400',
    };

    return (
        <div className="fixed top-20 left-4 z-[9999] flex flex-col gap-2 pointer-events-none">
            <AnimatePresence>
                {toasts.map(toast => {
                    const Icon = icons[toast.type];
                    return (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: -100, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 0.8 }}
                            className={`min-w-[300px] max-w-md bg-gradient-to-r ${colors[toast.type]} backdrop-blur-xl border rounded-xl p-4 shadow-2xl pointer-events-auto`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="w-5 h-5 flex-shrink-0" />
                                <p className="flex-1 text-white font-medium">{toast.message}</p>
                                <button
                                    onClick={() => removeToast(toast.id)}
                                    className="text-white/60 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}

export default ToastProvider;
