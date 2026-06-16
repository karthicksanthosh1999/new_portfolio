"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/public/logo.png"
import Image from "next/image";

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
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
>
  <div className="text-center space-y-6">
    <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32">
      {/* Rotating Circle */}
      <div className="absolute inset-0 border-4 border-t-[#00e600] border-gray-700 rounded-full animate-spin" />

      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
          className="object-contain w-12 h-12 sm:w-16 sm:h-16"
          priority
        />
      </div>
    </div>

    <div className="text-[#00e600] font-semibold text-2xl sm:text-4xl">
      Loading...
    </div>

    <div className="text-[#9e9e9e] text-xs sm:text-sm">
      <p>We're getting everything ready for you...</p>
      <p>Sit tight for just a moment.</p>
    </div>
  </div>
</motion.div>
    );
}
