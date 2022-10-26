const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "colorStyles": {
        "OffWhite": "#FCFCFB",
        "LightBeige": "#EFECE6",
        "MediumBeige": "#CBC7BE",
        "MediumGray": "#4F4D4A",
        "darkgray": "#232221"
      },
      "fontSize": {
        "xs": "0.875",
        "sm": "0.625rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.375rem",
        "xxl": "1.563",
        "big": "1.75"
      },
      "fontFamily": {
        "raleway": "Raleway",
        "athiti": "Athiti"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.313rem",
        "sm": "0.625rem",
        "base": "0.938rem",
        "lg": "1.25rem",
        "xl": "1.563rem",
      }

    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
