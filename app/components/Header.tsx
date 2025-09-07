"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { pageList } from "./Footer";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Single Navbar */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "#000000" : "rgba(0,0,0,0)",
          boxShadow: scrolled
            ? "0px 2px 10px rgba(0,0,0,0.3)"
            : "0px 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 z-50 w-full backdrop-blur-md">
        <div className="flex justify-between items-center px-6 py-4 md:mt-2">
          <Link
            href={"/"}
            className={`cursor-pointer font-semibold text-lg flex ${
              scrolled ? "text-white" : "text-white"
            }`}>
            <Image src="/logo.png" alt="logo" height={50} width={50} />
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex gap-6 items-center ${
              scrolled ? "text-white" : "text-white"
            }`}>
            {pageList.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.link}
                  className="cursor-pointer text-lg font-semibold hover:underline transition">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "hover:bg-gray-200/20 text-white" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col gap-4 bg-[#050709] px-6 py-4 shadow-md">
              {pageList.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.link}
                    className="block cursor-pointer text-lg font-semibold hover:underline transition text-white"
                    onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Header;
