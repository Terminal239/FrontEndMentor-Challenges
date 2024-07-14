/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: { 400: "hsl(var(--primary-red))" },
        blue: { 400: "hsl(var(--primary-blue))" },
        white: "hsl(var(--neutral-white))",
        gray: { 400: "hsl(var(--neutral-very-light-grayish-blue))" },
        lightGrayishBlue1: { 400: "hsl(var(--neutral-light-grayish-blue-1))" },
        lightGrayishBlue2: { 400: "hsl(var(--neutral-light-grayish-blue-2))" },
        grayishBlue: { 400: "hsl(var(--neutral-grayish-blue))" },
        darkGrayishBlue: { 400: "hsl(var(--neutral-dark-grayish-blue))" },
        veryDarkBlue: { 400: "hsl(var(--neutral-very-dark-blue))" },
      },
    },
  },
  plugins: [],
};
