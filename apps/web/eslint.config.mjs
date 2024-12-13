import svelteConfig from "eslint-config/svelte";
import ts from "typescript-eslint";

export default ts.config(
  {
    ignores: [
      "**/.DS_Store",
      "**/node_modules",
      "build",
      ".svelte-kit",
      "package",
      "**/.env",
      "**/.env.*",
      "!**/.env.example",
      "**/pnpm-lock.yaml",
      "**/package-lock.json",
      "**/yarn.lock",
    ],
  },
  ...svelteConfig
);
