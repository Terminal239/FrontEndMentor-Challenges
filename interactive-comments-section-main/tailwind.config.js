/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          moderateBlue: "hsl(var(--primary-moderate-blue))",
          softRed: "hsl(var(--primary-soft-red))",
          lightGrayishBlue: "hsl(var(--primary-light-grayish-blue))",
          paleRed: "hsl(var(--primary-pale-red))",
        },
        neutral: {
          darkBlue: "hsl(var(--neutral-dark-blue))",
          grayishBlue: "hsl(var(--neutral-grayish-blue))",
          lightGray: "hsl(var(--neutral-light-gray))",
          veryLightGray: "hsl(var(--neutral-very-light-gray))",
          white: "hsl(var(--neutral-white))",
        },
      },
    },
  },
  plugins: [],
};
