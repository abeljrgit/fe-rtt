/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        lightRed: "hsl(356, 100%, 66%)",
        VeryLightRed: "hsl(355, 100%, 74%)",
        VeryDarkBlue: "hsl(208, 49%, 24%)",
        DarkGrayishBlue: "hsl(237, 23%, 32%)",
        GrayishBlue: "hsl(240, 2%, 79%)",
        VeryDarkGrayishBlue: "hsl(207, 13%, 34%)",
        VeryDarkBlackBlue: "hsl(240, 10%, 16%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        bgGrad1:
          "linear-gradient(90deg,hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%)",
        bgGrad2:
          "linear-gradient(180deg,hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%)",
        heroSp: "url('./img/bg-pattern-intro-mobile.svg') no-repeat",
        heroPc: "url('./img/bg-pattern-intro-desktop.svg')",
        gradAndImg:
          "url('./img/bg-pattern-intro-mobile.svg'),linear-gradient(90deg,hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%)",
        editorIlluBg: "url(./img/illustration-editor-desktop.svg)",
        laptopIlluBg: "url(./img/illustration-laptop-desktop.svg)",
        patternCircle: "url(./img/bg-pattern-circles.svg)",
        gradAndCircle:
          "url('./img/bg-pattern-circles.svg'),linear-gradient(to right,hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%)",
      },
      backgroundSize: {
        "150%": "150%",
        "40%": "40%",
        circleSizePc: "50%,auto",
      },
      backgroundPosition: {
        leanPc: "100px 40%,center",
        leanSp: "-300px 40%,center",
        editorPc: "right -20% center",
        laptopPc: "left -20% center",
        circleSp: "center -150px,center",
        circlePc: "left 75%,center",
      },
      borderRadius: {
        sectionCurve: "100px",
      },
      screens: {
        xs: "414px",
      },
    },
  },
  plugins: [],
};
