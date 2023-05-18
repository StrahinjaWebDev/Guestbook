/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#020438",
        second: "#284184",
        third: "#1f8ea3",
        fourth: " #00eaff",
      },
      keyframes: {
        appearFromTop: {
          "0%": {
            transform: "translateY(-50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        appearScale: {
          "0%": {
            opacity: "0",
            scale: "0.8",
          },
          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
        dissAppearScale: {
          "0%": {
            opacity: "1",
            scale: "1",
          },
          "100%": {
            opacity: "0",
            scale: "0.8",
          },
        },
        dissapearToTop: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-50px)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        dissAppear: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-forwards": { "animation-fill-mode": "forwards" },
      });
    },
  ],
};
