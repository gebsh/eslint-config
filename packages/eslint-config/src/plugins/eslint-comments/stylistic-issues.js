'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // OFF: This rule is too granular to be enabled in a shareable
    // configuration. If this rule is needed, then it should be configured
    // separately in a project configuration.
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
    // OFF: Those descriptions are really nice and useful but their cannot span
    // multiple lines when used with the `eslint-disable-next-line` comment. For
    // that reason, this rule is disabled for now. It can be re-enabled when
    // this limitation is addressed. For more information see:
    // https://github.com/eslint/eslint/issues/14284.
    'eslint-comments/require-description': 'off',
  },
};
