'use strict';

module.exports = {
  rules: {
    'import/unambiguous': 'warn',
    // OFF: CommonJS modules are allowed.
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    // OFF: This should be configured per-project basis, not in a shareable
    // configuration.
    'import/no-nodejs-modules': 'off',
    'import/no-import-module-exports': ['error', { exceptions: [] }],
  },
};
