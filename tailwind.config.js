/** @type {import('tailwindcss').Config} */
module.exports = {
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
   filter: ["hover", "focus"], // This enables filters
   brightness: ["hover", "focus"], // This enables brightness adjustment

   //    colors: {
   //     dominant: "#ffffff",
   //     complementary: "#201F31",
   //     accent: "#FFBADE",
   //     danger: "#ff0000",
   //    },
   colors: {
    dominant: "#000000",
    complementary: "#ffffff",
    // accent: "#008080", //teal
    // accent: "#4d148c", // Purple
    accent: "#6F00FF",
    danger: "#ff0000",
   },
   animation: {
    fadeIn: "fadeIn 0.2s ease-in-out forwards",
    "gradient-move": "gradient-animation 3s ease infinite",
   },

   keyframes: {
    "gradient-animation": {
     "0%, 100%": { backgroundPosition: "0% 50%" },
     "50%": { backgroundPosition: "200% 50%" },
    },
    fadeIn: {
     "0%": { opacity: 0 },
     "100%": { opacity: 100 },
    },
   },
  },
 },
 plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
