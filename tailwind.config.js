/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
  extend: {
   colors: {},
   animation: {
    fadeIn: "fadeIn 0.2s ease-in-out forwards",
   },

   fontSize: {
    sm: "0.85rem",
    base: "1rem",
    xl: "1.125rem",
    "2xl": "1.35rem",
    "3xl": "1.75rem",
    "4xl": "2.2rem",
    "5xl": "2.7rem",
    "6xl": "3.3rem",
    "7xl": "3.8rem",
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
