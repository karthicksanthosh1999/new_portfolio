"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MotionCursor() {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);

        const move = (e: MouseEvent) => {
            x.set(e.clientX - 12);
            y.set(e.clientY - 12);
        };

        const handleMouseOver = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, .cursor-hover")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [x, y]);

    if (isMobile) return null;

    return (
        <>
            {/* Outer Glow Ring */}
            <motion.div
                style={{ x: springX, y: springY }}
                animate={{
                    scale: isHovering ? 2 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 bg-cyan-400/10 backdrop-blur-sm pointer-events-none z-[9999]"
            />

            {/* Inner Core */}
            <motion.div
                style={{ x: springX, y: springY }}
                animate={{
                    scale: isHovering ? 0.6 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(0,255,255,0.8)] pointer-events-none z-[9999]"
            />
        </>
    );
}
