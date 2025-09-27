import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#8B0000", // Dark red for alchemic feel
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#1A1A1A", // Almost black
          foreground: "#FAFAFA",
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold for mystical elements
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#2A2A2A",
          foreground: "#A0A0A0",
        },
        border: "#3A3A3A",
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FAFAFA",
        },
      },
      fontFamily: {
        gothic: ["UnifrakturCook", "Grenze Gotisch", "serif"],
        blackletter: ["UnifrakturMaguntia", "serif"],
        medieval: ["MedievalSharp", "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)",
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(212, 175, 55, 0.7), 0 0 60px rgba(212, 175, 55, 0.5)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "alchemic-pattern": "url('/images/alchemic-bg.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
