"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: t.header.about, href: "#about" },
    { name: t.header.experience, href: "#experience" },
    { name: t.header.technologies, href: "#technologies" },
    { name: "CV", href: "/cv" },
    { name: t.header.contact, href: "#contactUs" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-panel border-b border-white/10 shadow-lg" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono tracking-tighter hover:text-primary transition-colors">
          &lt;Jonas.Dev /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 border-l pl-6 border-base-content/10">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-2xl hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-base-100/95 backdrop-blur-xl border-b border-base-content/10 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-base-content/5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-base-content/60">Configurações</span>
                <div className="flex items-center gap-4">
                  <LanguageSwitch />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;