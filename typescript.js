'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    './src/plugins/typescript/base.js',
    './src/plugins/typescript/extension.js',
    './src/plugins/typescript/disable/base.js',
  ],
};
