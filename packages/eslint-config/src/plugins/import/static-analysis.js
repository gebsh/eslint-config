'use strict';

module.exports = {
  rules: {
    'import/no-unresolved': [
      'error',
      { commonjs: true, amd: false, caseSensitive: true },
    ],
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': ['error', { allowComputed: false }],
    // OFF: This should be configured per-project basis, not in a shareable
    // configuration.
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: true },
    ],
    'import/no-dynamic-require': 'error',
    // OFF: This should be configured per-project basis, not in a shareable
    // configuration.
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': [
      'warn',
      { commonjs: true, amd: false, maxDepth: '∞', ignoreExternal: false },
    ],
    'import/no-useless-path-segments': ['warn', { noUselessIndex: true }],
    'import/no-relative-parent-imports': 'warn',
    'import/no-relative-packages': 'error',
  },
};
