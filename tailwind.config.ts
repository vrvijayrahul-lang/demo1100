import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FDFBF7",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EDE4D6",
          400: "#DFD1BD",
          DEFAULT: "#FAF7F2",
        },
        gold: {
          50: "#FBF8F0",
          100: "#F6EEDC",
          200: "#EDDCB4",
          300: "#E1C78A",
          400: "#D5B362",
          500: "#C5A059",
          600: "#B08842",
          700: "#946E31",
          800: "#775727",
          900: "#5C421F",
          DEFAULT: "#C5A059",
        },
        champagne: {
          light: "#F5E9D1",
          DEFAULT: "#DFC17B",
          dark: "#B8984E",
        },
        burgundy: {
          50: "#FBF2F4",
          100: "#F5E3E6",
          200: "#ECC6CC",
          300: "#DDA0AB",
          400: "#BC5C6E",
          500: "#8A253A",
          600: "#6E1B2D",
          700: "#581121",
          800: "#4A0E1A",
          900: "#350912",
          DEFAULT: "#4A0E1A",
        },
        blush: {
          50: "#FCF7F6",
          100: "#F7EBE8",
          200: "#F3DDD7",
          300: "#E8C4BC",
          400: "#D89E92",
          DEFAULT: "#F7EBE8",
        },
        obsidian: {
          800: "#221C18",
          900: "#171311",
          950: "#0D0A09",
          DEFAULT: "#171311",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(23, 19, 17, 0.08), 0 0 0 1px rgba(197, 160, 89, 0.12)',
        'luxury-hover': '0 30px 60px -15px rgba(74, 14, 26, 0.14), 0 0 0 1px rgba(197, 160, 89, 0.3)',
        'luxury-gold': '0 10px 30px -5px rgba(197, 160, 89, 0.3)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.92' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
