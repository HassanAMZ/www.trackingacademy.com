/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: "class",
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  backgroundPosition: {
   "right-10": "right 10rem",
  },
  extend: {
   colors: {},
   animation: {
    fadeIn: "fadeIn 0.2s ease-in-out forwards",
   },

   fontSize: {
    xxs: "0.625rem", // 10px
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.5rem",
    "5xl": "3rem", // 48px
    "6xl": "4rem", // 64px
    "7xl": "5rem", // 80px
    "8xl": "6rem", // 96px
   },
   keyframes: {
    fadeIn: {
     "0%": { opacity: 0 },
     "100%": { opacity: 100 },
    },
    text: {
     "0%, 100%": {
      "background-size": "200% 200%",
      "background-position": "left center",
     },
     "50%": {
      "background-size": "200% 200%",
      "background-position": "right center",
     },
    },
   },
  },
 },
 plugins: [require("@tailwindcss/typography")],
};
