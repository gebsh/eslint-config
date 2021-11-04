'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/unambiguous': 'warn',
    // OFF: CommonJS modules are allowed.
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    // OFF: This rule is too granular to be enabled in a shareable
    // configuration. If this rule is needed, then it should be configured
    // separately in a project configuration.
    'import/no-nodejs-modules': 'off',
    'import/no-import-module-exports': ['error', { exceptions: [] }],
  },
};
