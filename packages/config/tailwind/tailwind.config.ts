import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import { type Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        "picton-blue": {
          "DEFAULT": "#00bff3",
          "50": "#effbff",
          "100": "#def5ff",
          "200": "#b6eeff",
          "300": "#75e3ff",
          "400": "#2cd6ff",
          "500": "#00bff3",
          "600": "#009cd4",
          "700": "#007dab",
          "800": "#00698d",
          "900": "#065774",
          "950": "#04374d",
        },
        "yellow": {
          "DEFAULT": "#ffff00",
          "50": "#fbffe7",
          "100": "#f4ffc1",
          "200": "#eeff86",
          "300": "#ecff41",
          "400": "#f2ff0d",
          "500": "#ffff00",
          "600": "#d1bf00",
          "700": "#a68b02",
          "800": "#896c0a",
          "900": "#74580f",
          "950": "#443004",
        },
      },
    },
    some: {},
  },
  plugins: [typography, containerQueries],
};

export default config;
