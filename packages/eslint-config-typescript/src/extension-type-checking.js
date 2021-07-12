'use strict';

module.exports = {
  rules: {
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPattern: '',
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      },
    ],
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    'require-await': 'off',
    // OFF: The base rule is disabled too.
    '@typescript-eslint/require-await': 'off',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  },
};
