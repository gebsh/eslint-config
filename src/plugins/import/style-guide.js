'use strict';

module.exports = {
  rules: {
    'import/first': 'warn',
    // OFF: This config allows mixing exports with non-exported statements.
    // Reordering a whole file to satisfy this rule is annoying and sometimes
    // harms readability.
    'import/exports-last': 'off',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    'import/no-duplicates': ['error', { considerQueryString: true }],
    // OFF: Treating modules as a namespace can be useful if there is many
    // named exports from a file.
    'import/no-namespace': 'off',
    'import/extensions': ['warn', 'ignorePackages'],
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
        // Newlines are already enforced by the base ESLint
        // `padding-line-between-statements` rule.
        'newlines-between': 'ignore',
        alphabetize: { order: 'asc', caseInsensitive: false },
        warnOnUnassignedImports: true,
      },
    ],
    // Newlines are already enforced by the base ESLint
    // `padding-line-between-statements` rule.
    'import/newline-after-import': 'off',
    // OFF: Default exports should not be peferred.
    'import/prefer-default-export': 'off',
    // TODO: Should this be enabled?
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
    // OFF: This should be configured per-project basis, not in a shareable
    // configuration.
    'import/dynamic-import-chunkname': 'off',
  },
};
