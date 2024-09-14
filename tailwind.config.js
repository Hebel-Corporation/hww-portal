/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","!./node_modules/**/*"],
  theme: {
    extend: { colors: {
      primary1: "rgba(6,146,207)",
      primary2: "rgba(107,215,40)",
      primary3: "rgba(247,184,5)",
  }},
  },
  plugins: [],
}

