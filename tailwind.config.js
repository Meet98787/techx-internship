/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        sandybrown: "#dba156",
        darkslategray: {
          "100": "#3d3838",
          "200": "#333",
          "300": "rgba(46, 70, 93, 0.8)",
          "400": "rgba(54, 54, 54, 0.6)",
        },
        darkgray: {
          "100": "#a0a0a0",
          "200": "#9b9b9b",
        },
        gray: {
          "100": "#fafbfd",
          "200": "#282828",
          "300": "#1e1e1e",
          "400": "rgba(28, 26, 26, 0.8)",
        },
        silver: "#c8c8c8",
        dimgray: {
          "100": "#6c6767",
          "200": "#505050",
        },
        floralwhite: "#f7f7ee",
        gainsboro: "#e4e4e4",
        whitesmoke: "#f8f3f6",
        goldenrod: "#febe40",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        sm: "14px",
        "33xl": "52px",
      },
    },
    fontSize: {
      lg: "18px",
      "31xl": "50px",
      xl: "20px",
      "3xl": "22px",
      "21xl": "40px",
      "5xl": "24px",
      "17xl": "36px",
      sm: "14px",
      "11xl": "30px",
      "6xl-9": "25.9px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
