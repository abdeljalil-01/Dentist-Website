import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          sky: "#38BDF8",
          gold: "#D4AF37",
          ink: "#0F172A",
          text: "#1E293B",
          border: "#E5E7EB",
          page: "#F8FAFC"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.09)",
        glow: "0 30px 90px rgba(37, 99, 235, 0.18)",
        gold: "0 18px 60px rgba(212, 175, 55, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "Playfair Display", "ui-serif", "Georgia"]
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
