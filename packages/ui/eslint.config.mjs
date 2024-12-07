import svelteConfig from "eslint-config/svelte";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  {
    ignores: ["node_modules", "dist"],
  },
  ...svelteConfig
);
