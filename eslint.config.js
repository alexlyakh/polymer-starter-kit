import js from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["dist/", "node_modules/"]
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        navigator: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-refresh": reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules
    }
  },
  {
    files: ["src/__tests__/**"],
    languageOptions: {
      globals: {
        it: "readonly",
        describe: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    }
  }
  ,
  {
    files: ["playwright.config.ts", "e2e/**"],
    languageOptions: {
      globals: {
        process: "readonly",
        module: "readonly",
        require: "readonly",
        __dirname: "readonly"
      }
    }
  }
];
