import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
