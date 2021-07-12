'use strict';

module.exports = {
  rules: {
    // OFF: It's too general rule to specify it in a shareable configuration.
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
        ],
      },
    ],
    // OFF: Those descriptions are really nice and useful but their style is
    // awful. Also, they must be placed (at least partially) on the same line as
    // a comment and that may result in problems with satisfying the ESLint's
    // `max-len` rule.
    'eslint-comments/require-description': 'off',
  },
};
