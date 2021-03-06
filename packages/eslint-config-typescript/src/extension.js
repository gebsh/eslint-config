'use strict';

const options = require('../../eslint-config/src/options.js');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'warn',
      '1tbs',
      { allowSingleLine: false },
    ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['warn', 'never'],
    indent: 'off',
    '@typescript-eslint/indent': ['warn', 2],
    'init-declarations': 'off',
    // OFF: The is also disabled in the base ESLint configuration.
    '@typescript-eslint/init-declarations': 'off',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
        overrides: {},
      },
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true, exceptAfterOverload: true },
    ],
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    // OFF: This is handled by the 'eslint-plugin-import' included in the base
    // configuration.
    '@typescript-eslint/no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow: [
          'functions',
          'arrowFunctions',
          'methods',
          'private-constructors',
          'protected-constructors',
          'decoratedFunctions',
        ],
      },
    ],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
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
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'warn',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['warn', { capIsConstructor: true }],
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'warn',
    'no-magic-numbers': 'off',
    // OFF: The is also disabled in the base ESLint configuration.
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      { builtinGlobals: true, ignoreDeclarationMerge: true },
    ],
    'no-restricted-imports': 'off',
    // OFF: The is also disabled in the base ESLint configuration.
    '@typescript-eslint/no-restricted-imports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [
          'resolve',
          'reject',
          'acc',
          'accumulator',
          'e',
          'ex',
          'err',
          'error',
          'cb',
          'callback',
          'data',
          'done',
          'self',
        ],
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        variables: true,
        functions: true,
        classes: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    // TODO: Enable when the bug with this rule is fixed. For more information
    // see: https://github.com/typescript-eslint/typescript-eslint/issues/4091.
    // 'padding-line-between-statements': 'off',
    // '@typescript-eslint/padding-line-between-statements': [
    //   'warn',
    //   ...options.linePaddings.general,
    //   // Require lines around interfaces.
    //   {
    //     blankLine: 'always',
    //     prev: '*',
    //     next: 'interface',
    //   },
    //   {
    //     blankLine: 'always',
    //     prev: 'interface',
    //     next: '*',
    //   },
    //   // Groups type definitions together.
    //   {
    //     blankLine: 'always',
    //     prev: '*',
    //     next: 'type',
    //   },
    //   {
    //     blankLine: 'always',
    //     prev: 'type',
    //     next: '*',
    //   },
    //   {
    //     blankLine: 'never',
    //     prev: 'type',
    //     next: 'type',
    //   },
    // ],
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    semi: 'off',
    '@typescript-eslint/semi': [
      'warn',
      'always',
      { omitLastInOneLineBlock: false },
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['warn', { int32Hint: false }],
  },
};
