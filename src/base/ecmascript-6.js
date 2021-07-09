'use strict';

module.exports = {
  rules: {
    'arrow-body-style': [
      'warn',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': [
      'warn',
      {
        before: false,
        after: true,
        anonymous: { before: false, after: true },
        method: { before: false, after: false },
      },
    ],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', { includeExports: false }],
    'no-new-symbol': 'error',
    'no-restricted-exports': [
      'warn',
      {
        restrictedNamedExports: ['default'],
      },
    ],
    // OFF: Restricting imports, if necessary, should be done per project.
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'warn',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: true,
      },
    ],
    'prefer-arrow-callback': [
      'warn',
      { allowNamedFunctions: false, allowUnboundThis: false },
    ],
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: false, object: false },
      },
      { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'rest-spread-spacing': ['warn', 'never'],
    // TODO: Should this be enabled?
    'sort-imports': 'off',
    'symbol-description': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    'yield-star-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
  },
};
