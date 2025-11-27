import eslint from "@eslint/js"
import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import tseslint from "typescript-eslint"

export default defineConfig(
  {
    ignores: [
      "dist/*",
      "esm/*",
      "eslint.config.mjs",
      "scripts/*",
      "lib/*",
      "vitest.config.ts",
      "__tests__/*"
    ]
  },

  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.lint.json"],
        tsconfigRootDir: import.meta.dirname
      }
    }
  },

  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "import/extensions": ["error", "ignorePackages"],
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          named: true,
          "newlines-between": "always",
          alphabetize: {
            order: "asc"
          },
          groups: [
            "builtin",
            ["external", "internal"],
            ["parent", "sibling", "index", "object"],
            "type"
          ]
        }
      ]
    }
  }
)
