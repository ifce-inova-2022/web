/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        custom: {
          green: {
            default: "#086E46",
            hover: "#09A065",
            disabled: "#467160",
          },
          yellow: {
            default: "#FFCC31",
            hover: "#FFC000",
            disabled: "#FFDF7D",
          },
          red: {
            default: "#C43A31",
            hover: "#F62D20",
            disabled: "#A8534E",
          },
        },
      },
    },
    plugins: [],
  },
};
