/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#65C3C8",
          secondary: "#EF9FBC",
          accent: "#EEAF3A",
          neutral: "#291334",
          "base-100": "#FAF7F5",
          info:"#E7E2DF",
          Success:"#51A800",
          warning:"#6D3A9C",
          error: "#E6D600"
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}
