import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // sécurité si tu déplaces des fichiers
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",

        text: "rgb(var(--text) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",

        brand: "rgb(var(--brand) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        "gold-2": "rgb(var(--gold-2) / <alpha-value>)",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.45)",
        glow: "0 0 0 1px rgba(212,175,55,0.25), 0 10px 30px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
