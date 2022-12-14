module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: 'off',
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
