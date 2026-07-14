import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          black: "#050608",
          charcoal: "#0b0d11",
          navy: "#0a0e1a",
          panel: "#0f1218",
          border: "rgba(255,255,255,0.08)",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e8cd8a",
          dim: "#8a733a",
        },
        skyline: {
          DEFAULT: "#7ea6d8",
          soft: "#a9c3e6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(60% 60% at 50% 20%, rgba(201,162,75,0.10) 0%, rgba(5,6,8,0) 70%)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,6,8,0) 0%, #050608 90%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(201,162,75,0.25)",
        "glow-blue": "0 0 40px rgba(126,166,216,0.2)",
        card: "0 20px 60px -20px rgba(0,0,0,0.7)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
