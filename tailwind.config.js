const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',  // Example: Custom 'xs' breakpoint at 360px
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#f7ba34',
        secondary: "#69a79c",
        light: '#f7f7f7',
        dark: '#333333',
        dark2: "#999999",
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          xs: '1rem',
          sm: '2rem',
          lg:'4rem',
          xl: "5rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
};
