"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GlobalLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-hidden bg-black"
        >

            <div className="flex p-8 justify-center items-center">
                <div className="text-center space-y-6">
                    <div
                        className="w-24 h-24 border-4 border-t-[#00e600] border-gray-700 rounded-full animate-spin mx-auto"
                    ></div>
                    <div
                        className="text-[#00e600] font-semibold text-4xl opacity-90 animate-fadeIn"
                    >
                        Loading...
                    </div>
                    <div className="text-[#9e9e9e] text-sm opacity-80 animate-fadeIn">
                        <p>We're getting everything ready for you...</p>
                        <p>Sit tight for just a moment.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
