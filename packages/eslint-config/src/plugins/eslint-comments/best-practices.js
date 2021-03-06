'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/no-unused-enable': 'warn',
  },
};
