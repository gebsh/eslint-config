'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': [
      'warn',
      { default: 'array-simple', readonly: 'array-simple' },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Boolean: {
            message: "Use 'boolean' instead.",
            fixWith: 'boolean',
          },
          Number: {
            message: "Use 'number' instead.",
            fixWith: 'number',
          },
          BigInt: {
            message: "Use 'bigint' instead.",
            fixWith: 'bigint',
          },
          String: {
            message: "Use 'string' instead.",
            fixWith: 'string',
          },
          Symbol: {
            message: "Use 'symbol' instead.",
            fixWith: 'symbol',
          },
          Function: {
            message:
              'This type does not provide any type safety since it accepts ' +
              'any function (and also some other types which will throw at ' +
              'runtime). Specify an explicit function type instead.',
          },
          Object: {
            message:
              "Use 'object' or 'Record<string, unknown>' instead, or create " +
              'an interface or type alias for your object.',
            fixWith: 'object',
          },
          '{}': {
            message:
              "Use 'object' or 'Record<string, unknown>' instead, or create " +
              'an interface or type alias for your object.',
            fixWith: 'object',
          },
        },
        extendDefaults: false,
      },
    ],
    '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
    '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    // OFF: Enabled only in TypeScript files.
    '@typescript-eslint/explicit-function-return-type': 'off',
    // OFF: Enabled only in TypeScript files.
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // OFF: Enabled only in TypeScript files.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        overrides: {},
        multilineDetection: 'brackets',
      },
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          order: 'as-written',
          memberTypes: [
            'static-field',
            'abstract-field',
            'decorated-field',
            'instance-field',
            // TODO: Check whether this collide with the base
            // `grouped-accessor-pairs` rule.
            'static-get',
            'static-set',
            'abstract-get',
            'abstract-set',
            'decorated-get',
            'decorated-set',
            'instance-get',
            'instance-set',
            'signature',
            'constructor',
            'static-method',
            'abstract-method',
            'decorated-method',
            'instance-method',
          ],
        },
        interfaces: {
          order: 'as-written',
          memberTypes: ['constructor', 'field', 'signature', 'method'],
        },
        typeLiterals: {
          order: 'as-written',
          memberTypes: ['constructor', 'field', 'signature', 'method'],
        },
      },
    ],
    '@typescript-eslint/method-signature-style': ['warn', 'property'],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-interface': [
      'warn',
      { allowSingleExtends: true },
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        // Fixing to `unknown` is not a desirable effect in some cases and can
        // be more annoying than requiring to manually change the type or to
        // disable the rule altogether.
        fixToUnknown: false,
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    '@typescript-eslint/no-extraneous-class': [
      'warn',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],
    '@typescript-eslint/no-implicit-any-catch': [
      'error',
      { allowExplicitAny: false },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'warn',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-invalid-void-type': [
      'error',
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: false,
        allowDefinitionFiles: true,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    // OFF: Non-null assertions are commonly used with Set/Map to get an element
    // after checking whether the collection contains it with the `has` method.
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'error',
    // OFF: Enabled only in TypeScript files.
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self'],
      },
    ],
    '@typescript-eslint/no-type-alias': [
      'warn',
      {
        allowAliases: 'always',
        allowCallbacks: 'always',
        allowConditionalTypes: 'always',
        allowConstructors: 'always',
        allowLiterals: 'never',
        allowMappedTypes: 'always',
        allowTupleTypes: 'always',
        allowGenerics: 'always',
      },
    ],
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    // OFF: This config disallows variables to be declared with the `var
    // keyword. This is enforced by the base ESLint `no-var` rule.
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-as-const': 'warn',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': [
      'error',
      { allowBitwiseExpressions: true },
    ],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': [
      'warn',
      {
        checkIntersections: true,
        checkUnions: true,
        groupOrder: [
          'named',
          'keyword',
          'literal',
          'function',
          'import',
          'operator',
          'conditional',
          'tuple',
          'object',
          'intersection',
          'union',
          'nullish',
        ],
      },
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'never', types: 'never', lib: 'never' },
    ],
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      { before: false, after: true, overrides: {} },
    ],
    // OFF: As noted in the rule description, this can be cumbersome to maintain
    // and TypeScript's compiler flags should be used instead.
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: false,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'warn',
          {
            accessibility: 'explicit',
            ignoredMethodNames: [],
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'explicit',
              parameterProperties: 'explicit',
            },
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
          'error',
          {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/no-require-imports': 'error',
      },
    },
  ],
};
