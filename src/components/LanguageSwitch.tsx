"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitch = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-base-200/50 backdrop-blur rounded-full p-1 border border-base-content/10">
            <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${language === 'pt'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-base-content/60 hover:text-base-content'
                    }`}
            >
                PT
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${language === 'en'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-base-content/60 hover:text-base-content'
                    }`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitch;
