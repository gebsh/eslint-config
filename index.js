'use strict';

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    './src/base/possible-errors.js',
    './src/base/best-practices.js',
    './src/base/strict-mode.js',
    './src/base/variables.js',
    './src/base/stylistic-issues.js',
  ],
};

module.exports = config;
