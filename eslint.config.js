import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'eslint.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'vite.config.ts',
    ],
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-refresh': reactRefreshPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      'no-console': 'warn',
      'prefer-template': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          pathGroups: [
            {
              pattern: 'src/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]
