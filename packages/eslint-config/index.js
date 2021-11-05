'use strict';

const extensions = ['.js', '.jsx', '.mjs', '.cjs'];

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['eslint-comments', 'import'],
  extends: [
    './src/base/possible-problems.js',
    './src/base/suggestions.js',
    './src/base/layout-and-formatting.js',
    './src/plugins/eslint-comments/best-practices.js',
    './src/plugins/eslint-comments/stylistic-issues.js',
    './src/plugins/import/static-analysis.js',
    './src/plugins/import/helpful-warnings.js',
    './src/plugins/import/module-systems.js',
    './src/plugins/import/style-guide.js',
  ],
  settings: {
    'import/extensions': extensions,
    'import/ignore': [
      'node_modules/',
      '\\.(?:css|scss|sass|less|jpg|jpeg|gif|png|svg|json)$',
    ],
    'import/resolver': {
      node: {
        extensions,
      },
    },
  },
};
