module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript",
    "@vue/prettier",
    "plugin:astro/recommended",
  ],
  overrides: [
    {
    files: ["*.ts", "*.js", "*.vue"],
    parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: 2020,
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ]
};
