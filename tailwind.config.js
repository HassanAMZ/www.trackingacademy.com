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
  //   fontSize: {
  //    xs: "0.75em",
  //    sm: "0.875em",
  //    lg: "1.125em",
  //    xl: "1.25em",
  //    "2xl": "1.5em",
  //    "3xl": "1.875em",
  //    "4xl": "2.25em",
  //    "5xl": "3em",
  //    "6xl": "3.75em",
  //    "7xl": "4.5em",
  //   },

  extend: {
   filter: ["hover", "focus"], // This enables filters
   brightness: ["hover", "focus"], // This enables brightness adjustment

   colors: {
    dominant: "#000000",
    complementary: "#ffffff",
    accent: "#6F00FF",
    danger: "#E43B2C",
   },
   //    colors: {
   //     dominant: "#ffffff",
   //     complementary: "#000000",
   //     accent: "#ff0000",
   //     danger: "#6F00FF",
   //    },
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
