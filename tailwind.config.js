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
    accent: "#4d148c",
    danger: "#ff0000",
   },
   animation: {
    fadeIn: "fadeIn 0.2s ease-in-out forwards",
    "gradient-move": "gradient-animation 3s ease infinite",
   },

   fontSize: {
    xxs: "0.625rem", // 10px
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
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
