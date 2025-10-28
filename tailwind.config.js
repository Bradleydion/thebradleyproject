/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tbp: { bg: "#D5C7C2", ink: "#2E2A29", soft: "#F6F2F0" },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(12px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(6px)" } },
      },
      animation: {
        fadeUp: "fadeUp .6s ease-out forwards",
        float: "float 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};