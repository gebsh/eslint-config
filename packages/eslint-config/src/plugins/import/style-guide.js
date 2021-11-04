'use strict';

const options = require('../../options.js');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'import/first': 'warn',
    // OFF: This config allows mixing exports with non-exported statements.
    // Reordering a whole file to satisfy this rule is annoying and sometimes
    // harms readability.
    'import/exports-last': 'off',
    'no-duplicate-imports': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    // OFF: Treating modules as a namespace can be useful if there is many
    // named exports from a file.
    'import/no-namespace': 'off',
    'import/extensions': ['warn', 'ignorePackages'],
    'padding-line-between-statements': [
      'warn',
      ...options.linePaddings.general,
    ],
    'sort-imports': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown',
        ],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: false },
        warnOnUnassignedImports: true,
      },
    ],
    'import/newline-after-import': ['warn', { count: 1 }],
    // OFF: Default exports should not be peferred.
    'import/prefer-default-export': 'off',
    // OFF: This rule is too granular to be enabled in a shareable
    // configuration. If this rule is needed, then it should be configured
    // separately in a project configuration.
    'import/max-dependencies': 'off',
    // OFF: Importing modules for side effects is sometimes necessary.
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    // OFF: Using named exports is perfectly fine.
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': [
      'warn',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: true,
      },
    ],
    // OFF: Grouping exports is unnecessary and, since this rule cannot be
    // automatically fixed, is cumbersome to do by hand.
    'import/group-exports': 'off',
    // OFF: This rule is too granular to be enabled in a shareable
    // configuration. If this rule is needed, then it should be configured
    // separately in a project configuration.
    'import/dynamic-import-chunkname': 'off',
  },
};
