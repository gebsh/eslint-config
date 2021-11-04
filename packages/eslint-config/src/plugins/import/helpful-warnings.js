'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // OFF: Deprecated imports are sometimes necessary. If this rule is needed,
    // then it should be configured separately in a project configuration.
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
    'import/no-mutable-exports': 'error',
    // OFF: This rule is too cumbersome to maintain.
    'import/no-unused-modules': 'off',
  },
};
