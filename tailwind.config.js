/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        p1: "hsl(158, 36%, 37%)",
        p2: "hsl(30, 38%, 92%)",
        n1: "hsl(212, 21%, 14%)",
        n2: " hsl(228, 12%, 48%)",
        n3: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
