/*
 *  ESLint config file for bot.
 *  Created On 14 January 2025
 */

import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from '@typescript-eslint/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
    {
        ignores: ['node_modules', 'dist'],
    },
    {
        settings: {},
        files: ['**/*.{js,ts}'],
        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': tseslint,
            'perfectionist': perfectionist,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
            globals: {
                // node environment globals
                module: 'readonly',
                exports: 'writable',
                require: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                // ES2021 globals
                WeakRef: 'readonly',
                AggregateError: 'readonly',
                FinalizationRegistry: 'readonly',
            },
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/space-before-blocks': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
            '@stylistic/comma-spacing': ['error', { after: true, before: false }],
            '@stylistic/keyword-spacing': ['error', { after: true, before: true }],
            '@stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false }],
            'perfectionist/sort-objects': [
                'error',
                {
                    order: 'asc',
                    ignoreCase: true,
                    type: 'line-length',
                    partitionByComment: true,
                },
            ],
            'comma-dangle': ['error', {
                'functions': 'never',
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
            }],
            'perfectionist/sort-imports': [
                'error',
                {
                    order: 'asc',
                    type: 'line-length',
                    newlinesBetween: 'never',
                    groups: [
                        'type',
                        ['builtin', 'external'],
                        'internal-type',
                        'internal',
                        ['parent-type', 'sibling-type', 'index-type'],
                        ['parent', 'sibling', 'index'],
                        'side-effect',
                        'style',
                        'object',
                    ],
                },
            ],
        },
    },
    {
        files: ['.eslintrc.{js,cjs}'],
        languageOptions: {
            sourceType: 'script',
        },
    },
]

