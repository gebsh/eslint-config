'use strict';

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  rules: {
    'array-bracket-newline': ['warn', { multiline: true, minItems: null }],
    'array-bracket-spacing': [
      'warn',
      'never',
      { singleValue: false, objectsInArrays: false, arraysInArrays: false },
    ],
    'array-element-newline': ['warn', 'consistent'],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: false }],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'warn',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'computed-property-spacing': [
      'warn',
      'never',
      { enforceForClassMembers: true },
    ],
    'dot-location': ['warn', 'property'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'generator-star-spacing': [
      'warn',
      {
        before: false,
        after: true,
        anonymous: { before: false, after: true },
        method: { before: false, after: false },
      },
    ],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    indent: ['warn', 2],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
        overrides: {},
      },
    ],
    'line-comment-position': [
      'warn',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultIgnorePatterns: true,
      },
    ],
    'linebreak-style': ['warn', 'unix'],
    'lines-around-comment': [
      'warn',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        ignorePattern: '',
        applyDefaultIgnorePatterns: true,
      },
    ],
    'lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '',
      },
    ],
    'max-statements-per-line': ['warn', { max: 1 }],
    'multiline-ternary': ['warn', 'always-multiline'],
    'new-parens': ['warn', 'always'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 1 }],
    'no-extra-parens': [
      'warn',
      'all',
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: true,
        ignoreJSX: 'multi-line',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: true,
        enforceForFunctionPrototypeMethods: true,
      },
    ],
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-spaces': ['warn', { ignoreEOLComments: false, exceptions: {} }],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-tabs': ['warn', { allowIndentationTabs: false }],
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': [
      'warn',
      'below',
      { overrides: { if: 'any', else: 'any' } },
    ],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': [
      'warn',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['var', 'let', 'const'], next: '*' },
      {
        blankLine: 'any',
        prev: ['var', 'let', 'const'],
        next: ['var', 'let', 'const'],
      },
      {
        blankLine: 'always',
        prev: [
          'class',
          'directive',
          'function',
          'import',
          // Exports are not included here because they may appear in
          // declarations like this:
          //
          // ```js
          // export const foo = 23;
          // const bar = foo + 42;
          // ```
          //
          // In such cases there shouldn't be a blank line between statements.
          'cjs-import',
          'cjs-export',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['throw', 'return'],
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'any',
        prev: 'export',
        next: 'export',
      },
      {
        blankLine: 'never',
        prev: 'cjs-import',
        next: 'cjs-import',
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: 'cjs-import',
      },
      {
        blankLine: 'any',
        prev: 'cjs-export',
        next: 'cjs-export',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'rest-spread-spacing': ['warn', 'never'],
    semi: ['warn', 'always', { omitLastInOneLineBlock: false }],
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi-style': ['warn', 'last'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': ['warn', { int32Hint: false }],
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'switch-colon-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'template-curly-spacing': ['warn', 'never'],
    'template-tag-spacing': ['warn', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
    // OFF: Wrapping regular expressions in parens is unnecessary.
    'wrap-regex': 'off',
    'yield-star-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
  },
};
