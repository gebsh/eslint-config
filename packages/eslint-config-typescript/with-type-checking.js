'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['./src/base-type-checking.js', './src/extension-type-checking.js'],
};
