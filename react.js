'use strict';

module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    version: 'detect',
  },
  extends: ['./src/plugins/react/base.js', './src/plugins/react/jsx.js'],
};
