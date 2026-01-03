'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('winter');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') || 'winter';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'winter' ? 'dark' : 'winter');
  };

  if (!mounted) {
    return <div className="w-8 h-8" />; // Placeholder to avoid hydration mismatch
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark'
          ? 'bg-base-content text-base-100 hover:bg-base-content/80'
          : 'bg-primary text-white hover:bg-primary/80'
        }`}
      aria-label="Toggle Theme"
    >
      {theme === 'winter' ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  );
};

export default ThemeToggle;
