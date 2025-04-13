// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
      files: ["tests/**/*.{ts}"],
    },
    {
        ignores: [
            "**/node_modules/**",
            "src/parser/**",
            "dist/**",
            "**/*.{js}",
            "build.js",
            "jest.config.js"
        ],
    },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
);
