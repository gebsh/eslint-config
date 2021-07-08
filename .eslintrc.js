'use strict';

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: ['./index.js', './prettier.js'],
};

module.exports = config;
