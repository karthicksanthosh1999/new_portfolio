"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MotionCursor() {
    const [isMobile, setIsMobile] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 20 });
    const springY = useSpring(y, { stiffness: 200, damping: 20 });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Check initially
        window.addEventListener("resize", handleResize);

        const move = (e: MouseEvent) => {
            if (!isMobile) {
                x.set(e.clientX - 10);
                y.set(e.clientY - 10);
            }
        };

        window.addEventListener("mousemove", move);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("resize", handleResize);
        };
    }, [x, y, isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 pointer-events-none z-[9999]"
        />
    );
}
