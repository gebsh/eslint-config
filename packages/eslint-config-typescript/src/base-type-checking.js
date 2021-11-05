'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      // Enforce camelCase by default.
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // Allow constants to be in UPPER_CASE.
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // Allow functions to be in PascalCase (e.g. React components).
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // Many tools such as ESLint or Webpack have options that may break
      // camelCase convention. This allows specifying object properties in other
      // formats.
      {
        selector: 'objectLiteralProperty',
        format: null,
      },
      // Disallow beginning interfaces with 'I'.
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // Require types and enum members to be in PascalCase.
      {
        selector: ['typeLike', 'enumMember'],
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      // Allow quoted properties (such as HTTP headers) to break default
      // conventions.
      {
        selector: ['property', 'method', 'accessor'],
        modifiers: ['requiresQuotes'],
        format: null,
      },
    ],
    '@typescript-eslint/no-base-to-string': ['error', { ignoredTypeNames: [] }],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: false,
        ignoreVoidOperator: false,
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: false,
      },
    ],
    // OFF: This config disallows for..in loops. This is enforced by the base
    // ESLint `no-restricted-syntax` rule.
    '@typescript-eslint/no-for-in-array': 'off',
    '@typescript-eslint/no-meaningless-void-operator': [
      'error',
      { checkNever: true },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      'warn',
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': [
      'warn',
      {
        allowConstantLoopConditions: true,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': [
      'warn',
      { typesToIgnore: [] },
    ],
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'warn',
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-readonly': [
      'warn',
      { onlyInlineLambdas: false },
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': [
      'warn',
      {
        checkParameterProperties: true,
        ignoreInferredTypes: false,
        treatMethodsAsReadonly: true,
      },
    ],
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: false },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { checkCompoundAssignments: true },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: false,
        allowNullish: true,
        allowRegExp: false,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': [
      'warn',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
  },
};
