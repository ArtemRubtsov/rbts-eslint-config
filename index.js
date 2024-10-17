module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
  };
  