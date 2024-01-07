/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          veryDarkMagenta: "hsl(var(--primary-very-dark-magenta))",
          softPink: "hsl(var(--primary-soft-pink))",
        },
        neutral: {
          darkGrayishMagenta: "hsl(var(--neutral-dark-grayish-magenta))",
          lightGrayishMagenta: "hsl(var(--neutral-light-grayish-magenta))",
          white: "hsl(var(--neutral-white))",
        },
      },
    },
  },
  plugins: [],
};
