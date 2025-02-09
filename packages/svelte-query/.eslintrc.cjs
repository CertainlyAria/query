const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.svelte'],
  },
  rules: {
    'react-hooks/rules-of-hooks': 'off',
  },
  extends: ['plugin:svelte/recommended'],
  ignorePatterns: ['*.config.*', '**/build/*', '**/.svelte-kit/*'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
}

module.exports = config
