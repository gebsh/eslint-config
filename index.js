'use strict';

module.exports = {
  plugins: ['eslint-comments', 'import'],
  extends: [
    './src/base/possible-errors.js',
    './src/base/best-practices.js',
    './src/base/strict-mode.js',
    './src/base/variables.js',
    './src/base/stylistic-issues.js',
    './src/base/ecmascript-6.js',
    './src/plugins/eslint-comments/best-practices.js',
    './src/plugins/eslint-comments/stylistic-issues.js',
    './src/plugins/import/static-analysis.js',
    './src/plugins/import/helpful-warnings.js',
  ],
};
