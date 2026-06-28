import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      'build',
      'coverage',
      '.vite',
      'vite.config.ts',
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
