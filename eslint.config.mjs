import eslint from "@eslint/js"
import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"

export default defineConfig(
  {
    ignores: ["dist/*", "esm/*", "eslint.config.mjs", "scripts/*"]
  },

  importPlugin.flatConfigs.recommended,
  {
    rules: {
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
