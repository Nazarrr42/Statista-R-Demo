import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-config-prettier";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import vueEslintParser from "vue-eslint-parser";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  pluginPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    rules: {
      // override/add rules settings here, such as:
      "vue/no-unused-vars": "error",
      // quotes: ["error", "single"],
    },

    files: ["**/*.ts", "**/*.js", "**/*.vue", "**/*.gitignore"],
    languageOptions: {
      // parser: tseslint.parser,
      parser: vueEslintParser,
      parserOptions: {
        parser: {
          js: tseslint.parser,
          ts: tseslint.parser,
          vue: vueEslintParser,
        },
      },
    },
  },
];
