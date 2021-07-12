'use strict';

module.exports = {
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    version: 'detect',
  },
  extends: [
    './src/plugins/react/base.js',
    './src/plugins/react/jsx.js',
    './src/plugins/react-hooks/base.js',
  ],
};
