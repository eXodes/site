import baseConfig from "tailwind-config";
import { type Config } from "tailwindcss";

const config: Config = {
  presets: [baseConfig],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Rubik",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        display: ["Bumbbled", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
