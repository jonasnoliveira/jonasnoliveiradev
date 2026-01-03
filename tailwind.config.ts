import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        modern: {
          "primary": "#8b5cf6", // Violet 500
          "secondary": "#ec4899", // Pink 500
          "accent": "#0ea5e9", // Sky 500
          "neutral": "#1e293b", // Slate 800
          "base-100": "#0f172a", // Slate 900
          "base-200": "#1e293b", // Slate 800
          "base-300": "#334155", // Slate 700
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "dark",
      "light",
    ],
  },
};

export default config;
