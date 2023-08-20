module.exports = {
  'extends': [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions':  {
    'project': 'tsconfig.json'
  },
  'plugins': ['@typescript-eslint', 'tailwindcss'],
  'root': true,
  rules: {
    'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
    'react/jsx-indent-props': ['error', 2],
    indent: ['error', 2],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'import/order': [2, { 'alphabetize': { 'order': 'asc' } }]
  },
}