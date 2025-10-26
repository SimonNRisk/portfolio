import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // Modern ESLint rules
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-const": "error",
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
  {
    files: ["**/*.config.{js,mjs,ts}"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "build/**", "public/**"],
  },
];
