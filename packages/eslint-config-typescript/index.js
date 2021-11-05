'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['./src/base.js', './src/extension.js', './src/disable/base.js'],
};
