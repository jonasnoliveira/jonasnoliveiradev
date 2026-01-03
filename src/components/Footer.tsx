"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-base-300 py-12 text-base-content border-t border-base-content/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold font-mono tracking-tighter mb-2">&lt;Jonas.Dev /&gt;</h3>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Jonas Oliveira. {t.footer.rights}
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/jonas-n-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-base-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-md hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/jonas-oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-base-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-md hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:jonas.oliveira.dev@gmail.com"
            className="p-3 bg-base-100 rounded-full hover:bg-primary hover:text-white transition-all shadow-md hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
