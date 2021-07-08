'use strict';

module.exports = {
  rules: {
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // TODO: off
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
