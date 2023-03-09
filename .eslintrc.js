module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'prettier', 'jsx-a11y', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
    rules: {
        'no-shadow': 'off',
        'import/no-cycle': 'off',
        'no-empty': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'index', 'internal', 'sibling', 'type'],
                pathGroupsExcludedImportTypes: ['react'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'react-router-dom',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'effector-react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: 'effector',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@root/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@processes/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@pages/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@features/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@entities/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@shared/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
            },
        ],
        'no-console': 'warn',
        'import/first': 'error',
        'react/prop-types': 0,
        'linebreak-style': ['error', 'unix'],
        'no-underscore-dangle': 'off',
        'react/require-default-props': 'off',
        'no-nested-ternary': 'warn',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
            'error',
            {
                label: ['checkbox'],
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'no-extra-parens': 'off',
        'react/jsx-curly-brace-presence': 'error',
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    },
};
