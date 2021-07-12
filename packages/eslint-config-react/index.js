'use strict';

module.exports = {
  plugins: ['react', 'react-hooks'],
  extends: [
    './src/react/base.js',
    './src/react/jsx.js',
    './src/react-hooks/base.js',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    version: 'detect',
  },
};
