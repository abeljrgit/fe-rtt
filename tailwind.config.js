/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        o1: "hsl(25, 97%, 53%)",
        n1: "hsl(0, 0%, 100%)",
        n2: "hsl(217, 12%, 63%)",
        n3: "hsl(216, 12%, 54%)",
        n4: "hsl(213, 19%, 18%)",
        n5: "hsl(216, 12%, 8%)",
      },
      backgroundImage: {
        radGrad1: "linear-gradient(180deg,rgba(37,45,55,0.75) 10%, rgba(37,45,55,0.60) 100%)",
      },
    },
  },
  plugins: [],
};
