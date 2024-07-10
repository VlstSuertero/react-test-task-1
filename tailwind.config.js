const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["index.html","./src/**/*.{html,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
})