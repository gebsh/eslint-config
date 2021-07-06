'use strict';

module.exports = {
  rules: {
    'accessor-pairs': [
      'warn',
      {
        getWithoutSet: true,
        setWithoutGet: false,
        enforceForClassMembers: true,
      },
    ],
    'array-callback-return': [
      'error',
      { allowImplicit: true, checkForEach: true },
    ],
    'block-scoped-var': 'warn',
    'class-methods-use-this': ['warn', { exceptMethods: [] }],
    complexity: ['warn', 12],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    curly: ['warn', 'all'],
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'default-case-last': 'warn',
    'default-param-last': 'error',
    'dot-location': ['warn', 'property'],
    'dot-notation': ['warn', { allowKeywords: true, allowPattern: '' }],
    eqeqeq: ['error', 'always', { null: 'always' }],
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['warn', 3],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    // OFF: Regular expressions with the equals sign does not really look like
    // division.
    'no-div-regex': 'off',
    'no-else-return': ['warn', { allowElseIf: false }],
    'no-empty-function': [
      'warn',
      { allow: ['functions', 'arrowFunctions', 'methods'] },
    ],
    'no-empty-pattern': 'error',
    // OFF: This is handled by the `eqeqeq` rule.
    'no-eq-null': 'off',
    'no-eval': ['error', { allowIndirect: false }],
    'no-extend-native': ['error', { exceptions: [] }],
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': ['warn', { commentPattern: '^fallthrough$' }],
    'no-floating-decimal': 'warn',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implicit-coercion': [
      'warn',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
        allow: ['!!'],
      },
    ],
    'no-implicit-globals': ['error', { lexicalBindings: true }],
    'no-implied-eval': 'error',
    'no-invalid-this': ['warn', { capIsConstructor: true }],
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    // OFF: Although this rule seems to be very helpful, in practice it's very
    // annoying. It is hard to configure it in a way that it would catch
    // unacceptable cases and it would not bloat everything in warnings or
    // errors at the same time.
    'no-magic-numbers': 'off',
    'no-multi-spaces': ['warn', { ignoreEOLComments: false, exceptions: {} }],
    'no-multi-str': 'warn',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [],
        ignorePropertyModificationsForRegex: [],
      },
    ],
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-restricted-properties': [
      'error',
      {
        object: 'window',
        property: 'escape',
        message:
          "Global 'escape' function is not recommended in new code. Use 'encodeURI' or 'encodeURIComponent' functions instead.",
      },
      {
        object: 'self',
        property: 'escape',
        message:
          "Global 'escape' function is not recommended in new code. Use 'encodeURI' or 'encodeURIComponent' functions instead.",
      },
      {
        object: 'global',
        property: 'escape',
        message:
          "Global 'escape' function is not recommended in new code. Use 'encodeURI' or 'encodeURIComponent' functions instead.",
      },
      {
        object: 'globalThis',
        property: 'escape',
        message:
          "Global 'escape' function is not recommended in new code. Use 'encodeURI' or 'encodeURIComponent' functions instead.",
      },
      {
        object: 'window',
        property: 'unescape',
        message:
          "Global 'unescape' function is not recommended in new code. Use 'decodeURI' or 'decodeURIComponent' functions instead.",
      },
      {
        object: 'self',
        property: 'unescape',
        message:
          "Global 'unescape' function is not recommended in new code. Use 'decodeURI' or 'decodeURIComponent' functions instead.",
      },
      {
        object: 'global',
        property: 'unescape',
        message:
          "Global 'unescape' function is not recommended in new code. Use 'decodeURI' or 'decodeURIComponent' functions instead.",
      },
      {
        object: 'globalThis',
        property: 'unescape',
        message:
          "Global 'unescape' function is not recommended in new code. Use 'decodeURI' or 'decodeURIComponent' functions instead.",
      },
      {
        object: 'window',
        property: 'isNaN',
        message: "Use 'Number.isNaN()' instead.",
      },
      {
        object: 'self',
        property: 'isNaN',
        message: "Use 'Number.isNaN()' instead.",
      },
      {
        object: 'global',
        property: 'isNaN',
        message: "Use 'Number.isNaN()' instead.",
      },
      {
        object: 'globalThis',
        property: 'isNaN',
        message: "Use 'Number.isNaN()' instead.",
      },
      {
        object: 'window',
        property: 'isFinite',
        message: "Use 'Number.isFinite()' instead.",
      },
      {
        object: 'self',
        property: 'isFinite',
        message: "Use 'Number.isFinite()' instead.",
      },
      {
        object: 'global',
        property: 'isFinite',
        message: "Use 'Number.isFinite()' instead.",
      },
      {
        object: 'globalThis',
        property: 'isFinite',
        message: "Use 'Number.isFinite()' instead.",
      },
      {
        object: 'window',
        property: 'parseInt',
        message: "Use 'Number()' or 'Number.parseInt()' instead.",
      },
      {
        object: 'self',
        property: 'parseInt',
        message: "Use 'Number()' or 'Number.parseInt()' instead.",
      },
      {
        object: 'global',
        property: 'parseInt',
        message: "Use 'Number()' or 'Number.parseInt()' instead.",
      },
      {
        object: 'globalThis',
        property: 'parseInt',
        message: "Use 'Number()' or 'Number.parseInt()' instead.",
      },
      {
        object: 'window',
        property: 'parseFloat',
        message: "Use 'Number()' or 'Number.parseFloat()' instead.",
      },
      {
        object: 'self',
        property: 'parseFloat',
        message: "Use 'Number()' or 'Number.parseFloat()' instead.",
      },
      {
        object: 'global',
        property: 'parseFloat',
        message: "Use 'Number()' or 'Number.parseFloat()' instead.",
      },
      {
        object: 'globalThis',
        property: 'parseFloat',
        message: "Use 'Number()' or 'Number.parseFloat()' instead.",
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],
    'no-unused-labels': 'warn',
    'no-useless-call': 'warn',
    'no-useless-catch': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-void': ['error', { allowAsStatement: false }],
    // OFF: Those comments should not be treated as an error or a warning. It's
    // fine to use them.
    'no-warning-comments': 'off',
    'no-with': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],
    radix: ['warn', 'always'],
    // OFF: Asynchronous functions don't have to use the `await` operator.
    // Moreover, it's clearer, in my opinion, to mark with `async` a function
    // that does not use the `await` operator inside itself but still returns a
    // `Promise`.
    'require-await': 'off',
    'require-unicode-regexp': 'warn',
    'vars-on-top': 'warn',
    'wrap-iife': ['warn', 'inside', { functionPrototypeMethods: true }],
    yoda: ['warn', 'never', { exceptRange: true, onlyEquality: false }],
  },
};
