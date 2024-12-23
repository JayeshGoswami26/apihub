/** @type {import('tailwindcss').Config} */
import { BREAKPOINTS } from "./src/constants";

var require = createRequire(import.meta.url);
var module = { exports: {} };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: BREAKPOINTS /* BREAKPOINTS */,
    extend: {
      colors: {
        /* Extra Colors and Font Family */ darkRed: "#DB4444",
        yellow: "#00FF66",
        grey: "#cdcdcd",
      },
    },
  },
  plugins: [],
};
