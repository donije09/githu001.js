import globals from "globals";
import pluginJs from "@eslint/js";
import eslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...eslint.configs.recommended,
];