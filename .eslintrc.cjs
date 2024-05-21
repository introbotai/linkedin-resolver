/*
 *  ESLint config file for this project.
 *  Created On 21 May 2024
 */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'perfectionist'],
    env: {
        node: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
    overrides: [
        {
            files: ['.eslintrc.{js,cjs}'],
            env: {
                node: true,
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    rules: {
        'space-before-blocks': 'error',
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'space-infix-ops': ['error', { int32Hint: false }],
        'indent': [
            'error',
            4
        ],
        'comma-spacing': ['error', { after: true, before: false }],
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        'keyword-spacing': ['error', { after: true, before: true }],
        'semi': [
            'error',
            'never'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'key-spacing': ['error', { afterColon: true, beforeColon: false, }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        '@typescript-eslint/consistent-type-imports': ['error', {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
        }],
        'perfectionist/sort-objects': [
            'error',
            {
                order: 'asc',
                'ignore-case': true,
                type: 'line-length',
                'partition-by-comment': true,
            },
        ],
        'perfectionist/sort-imports': [
            'error',
            {
                order: 'asc',
                type: 'line-length',
                'newlines-between': 'never',
                groups: [
                    'type',
                    'nanostores',
                    ['builtin', 'external'],
                    'internal-type',
                    'internal',
                    ['parent-type', 'sibling-type', 'index-type'],
                    ['parent', 'sibling', 'index'],
                    'side-effect',
                    'style',
                    'object',
                    'unknown',
                ],
            },
        ]
    },
}
