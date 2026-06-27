/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tbp: {
          bg:      "#0A0A0F",   // near-black base
          surface: "#13131A",   // card/panel bg
          border:  "#1E1E2E",   // subtle borders
          ink:     "#FFFFFF",   // primary text
          muted:   "#8B8BA8",   // secondary text
          soft:    "#F6F2F0",   // light accent text
          teal:    "#00C4B4",   // primary accent
          violet:  "#7C3AED",   // secondary accent
          rose:    "#F43F5E",   // tertiary accent
        },
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        script:  ["Great Vibes", "cursive"],
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(6px)" } },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out forwards",
        fadeIn: "fadeIn .6s ease-out forwards",
        float:  "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
