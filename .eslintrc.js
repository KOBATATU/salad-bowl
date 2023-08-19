module.exports = {
  "extends": [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions":  {
    "project": "tsconfig.json"
  },
  "plugins": ["@typescript-eslint", 'tailwindcss'],
  "root": true,
  rules: {
    'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
    "react/jsx-indent-props": ['error', 2],
    indent: ['error', 2],
  },
}