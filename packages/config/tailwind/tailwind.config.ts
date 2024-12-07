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
    },
    some: {},
  },
  plugins: [typography, containerQueries],
};

export default config;
