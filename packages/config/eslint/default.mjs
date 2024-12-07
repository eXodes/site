import { rules } from "./rules.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigTurbo from "eslint-config-turbo/flat";
import onlyWarn from "eslint-plugin-only-warn";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslintPluginUnicorn.configs["flat/recommended"],
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  ...eslintConfigTurbo,
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: { ...globals.node },

      ecmaVersion: "latest",
      sourceType: "module",

      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      ...rules,
    },
  }
);
