import { rules } from "./rules.mjs";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigTurbo from "eslint-config-turbo/flat";
import onlyWarn from "eslint-plugin-only-warn";
import eslintPluginSvelte from "eslint-plugin-svelte";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  eslintPluginUnicorn.configs["flat/recommended"],
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  ...eslintPluginSvelte.configs["flat/recommended"],
  eslintConfigPrettier,
  ...eslintPluginSvelte.configs["flat/prettier"],
  ...eslintConfigTurbo,
  {
    plugins: {
      "only-warn": onlyWarn,
    },

    languageOptions: {
      globals: { ...globals.browser, ...globals.node },

      ecmaVersion: "latest",
      sourceType: "module",

      parser: tsEslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        parser: tsEslint.parser,
      },
    },

    rules: {
      ...rules,
    },
  },
  {
    files: ["**/*.svelte"],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",

      parser: svelteParser,
      parserOptions: {
        parser: tsEslint.parser,
        extraFileExtensions: [".svelte"],
      },
    },
  }
);
