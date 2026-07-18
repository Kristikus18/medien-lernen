import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20242a",
        paper: "#f7f5f1",
        line: "#ded8ce",
        brand: {
          50: "#f2f8f7",
          100: "#dcefed",
          500: "#2e8f86",
          600: "#24736e",
          700: "#1e5f5b"
        },
        honey: "#d99b47",
        berry: "#a84f62"
      },
      boxShadow: {
        panel: "0 12px 30px rgba(39, 38, 34, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
