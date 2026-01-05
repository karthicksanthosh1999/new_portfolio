"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
    texts: string[];
    typingSpeed?: number;
    eraseSpeed?: number;
    delayBetween?: number;
}

const TypingText = ({
    texts,
    typingSpeed = 80,
    eraseSpeed = 50,
    delayBetween = 1500,
}: TypingTextProps) => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayedText(currentText.slice(0, displayedText.length + 1));

                if (displayedText === currentText) {
                    setTimeout(() => setIsDeleting(true), delayBetween);
                }
            } else {
                // Deleting
                setDisplayedText(currentText.slice(0, displayedText.length - 1));

                if (displayedText === "") {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? eraseSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, texts, typingSpeed, eraseSpeed, delayBetween]);

    return (
        <motion.span
            className="border-r-1 border-white pr-1 bg-gradient-to-r py-3 from-[#8750f7] to-[white] inline-block text-transparent bg-clip-text font-extrabold"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
        >
            {displayedText}
        </motion.span>
    );
};

export default TypingText;
