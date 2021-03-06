module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFC10A",

          secondary: "#D0C9C0",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#ffffff",

          info: "#DBDFFD",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
