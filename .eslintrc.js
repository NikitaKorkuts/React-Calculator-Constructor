module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  rules: {
    'no-console': 'warn',
    'prefer-const': 'error',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    semi: ['warn', 'always'],
    'linebreak-style': ['error', 'windows'],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      'newlines-between': 'always-and-inside-groups',
    }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
};
