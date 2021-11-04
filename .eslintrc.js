'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2021,
  },
  extends: ['@gebsh/eslint-config', '@gebsh/eslint-config/prettier'],
};
