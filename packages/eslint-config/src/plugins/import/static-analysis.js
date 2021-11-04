'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: false,
        caseSensitive: true,
        caseSensitiveStrict: true,
      },
    ],
    'import/named': ['error', { commonjs: true }],
    'import/default': 'error',
    'import/namespace': ['error', { allowComputed: false }],
    // OFF: This rule is too granular to be enabled in a shareable
    // configuration. If this rule is needed, then it should be configured
    // separately in a project configuration.
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: true },
    ],
    'import/no-dynamic-require': ['error', { esmodule: true }],
    // OFF: This rule is too granular to be enabled in a shareable
    // configuration. If this rule is needed, then it should be configured
    // separately in a project configuration.
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
