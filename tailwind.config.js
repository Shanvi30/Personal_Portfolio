/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Dark Theme - Instagram Luxe
        dark: {
          bg: "#0f0f14",
          section: "#1a1a22",
          card: "#23232d",
          border: "#2e2e38",
          textPrimary: "#f5f5f7",
          textSecondary: "#a1a1aa",
        },
        // Light Theme - Instagram Soft Modern
        light: {
          bg: "#fafafa",
          section: "#f3f4f8",
          card: "#ffffff",
          border: "#e4e6eb",
          textPrimary: "#1c1c1e",
          textSecondary: "#5f6368",
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "dark-soft": "0 4px 20px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
