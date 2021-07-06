'use strict';

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['./src/base/possible-errors.js', './src/base/best-practices.js'],
};

module.exports = config;
