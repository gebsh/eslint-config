'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

/**
 * @type {import('eslint').Linter.Config}
 */
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
    'arrow-body-style': [
      'warn',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'block-scoped-var': 'error',
    camelcase: [
      'warn',
      {
        properties: 'never',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: [],
      },
    ],
    // OFF: When this rule is enabled and code is temporary commented-out, it
    // changes letter case causing syntax errors where the code is uncommented.
    'capitalized-comments': 'off',
    'class-methods-use-this': ['warn', { exceptMethods: [] }],
    complexity: ['warn', 12],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    'consistent-this': ['warn', 'self'],
    curly: ['warn', 'all'],
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'default-case-last': 'warn',
    'default-param-last': 'error',
    'dot-notation': ['warn', { allowKeywords: true, allowPattern: '' }],
    eqeqeq: ['error', 'always', { null: 'always' }],
    'func-name-matching': [
      'warn',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': ['warn', 'always', { generators: 'always' }],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': ['warn', 'e', 'ex', 'err', 'cb'],
    'id-length': [
      'warn',
      {
        min: 2,
        max: 32,
        properties: 'never',
        exceptions: ['$', '_', 'i', 'j', 'k', 'x', 'y', 'z'],
        exceptionPatterns: [],
      },
    ],
    // OFF: There is no need to configure this rule in this configuration.
    'id-match': 'off',
    // OFF: This rule is annoying when a variable is initialized conditionally
    // using `if {} else {}`.
    'init-declarations': 'off',
    'max-classes-per-file': ['warn', 3],
    'max-depth': ['warn', 3],
    // OFF: This rule is too invasive. In most cases it's better to manually
    // manage files and split them when there's a feeling that they may be too
    // long, than to do it artificially just to satisfy this rule.
    'max-lines': 'off',
    'max-lines-per-function': [
      'warn',
      {
        max: 60,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: false,
      },
    ],
    'max-nested-callbacks': ['warn', 2],
    'max-params': ['warn', 4],
    // OFF: This rule is too granular to be enabled in this configuration.
    'max-statements': 'off',
    'multiline-comment-style': ['warn', 'separate-lines'],
    'new-cap': [
      'warn',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        newIsCapExceptionPattern: '',
        capIsNew: true,
        capIsNewExceptions: [],
        capIsNewExceptionPattern: '',
        properties: false,
      },
    ],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': ['warn', { int32Hint: false, allow: [] }],
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'no-console': 'warn',
    // OFF: `continue` statements are not harmful and they have valid use cases.
    // Disallowing them entirely to prevent abusing them is definitely much more
    // harmful as it creates a sense that they are inherently evil and should be
    // avoided at all cost.
    'no-continue': 'off',
    'no-delete-var': 'error',
    // OFF: Regular expressions with the equals sign does not really look like
    // division unlike this rule description claims.
    'no-div-regex': 'off',
    // OFF: After using this rule for a long time, I actually *do* prefer the
    // else-return pattern now. I believe that Rust can be partially blamed for
    // this change.
    'no-else-return': 'off',
    'no-empty': ['warn', { allowEmptyCatch: false }],
    'no-empty-function': [
      'warn',
      { allow: ['functions', 'arrowFunctions', 'methods'] },
    ],
    // OFF: This is handled by the `eqeqeq` rule.
    'no-eq-null': 'off',
    'no-eval': ['error', { allowIndirect: false }],
    'no-extend-native': ['error', { exceptions: [] }],
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
    'no-extra-label': 'error',
    'no-extra-semi': 'warn',
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
    // OFF: Though I prefer to write all comments above a line of code, it is
    // sometimes useful to be able to put a small comment on the same line as
    // code.
    'no-inline-comments': 'off',
    'no-invalid-this': ['warn', { capIsConstructor: true }],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    // OFF: Although this rule seems to be very helpful, in practice it's very
    // annoying. It is hard to configure it in a way that it would catch
    // unacceptable cases and it would not bloat everything in warnings or
    // errors at the same time.
    'no-magic-numbers': 'off',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['*', '/'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['~', '&', '|', '^', '>>', '>>>', '<<'],
          ['&&', '||'],
          ['==', '!=', '===', '!=='],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-multi-assign': ['warn', { ignoreNonDeclaration: false }],
    'no-multi-str': 'warn',
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'warn',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
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
    // OFF: Although I like `+= 1` in, for example, Rust, I believe that in JS
    // using `++` or `--` is cleaner since this language misses some Rust
    // features that make usage of incrementation/decrementation much rarer.
    // Moreover, the documentation of this rule mentions that the reason for
    // enabling it is that these operators are subject to automatic semicolon
    // insertion. However, this configuration requires using semicolons anyway
    // so that is not a problem.
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-regex-spaces': 'error',
    'no-restricted-exports': [
      'warn',
      {
        restrictedNamedExports: ['default'],
      },
    ],
    'no-restricted-globals': [
      'error',
      ...confusingBrowserGlobals,
      {
        name: 'escape',
        message:
          "Global 'escape' function is not recommended in new code. Use 'encodeURI' or 'encodeURIComponent' functions instead.",
      },
      {
        name: 'unescape',
        message:
          "Global 'unescape' function is not recommended in new code. Use 'decodeURI' or 'decodeURIComponent' functions instead.",
      },
      { name: 'isNaN', message: "Use 'Number.isNaN()' instead." },
      { name: 'isFinite', message: "Use 'Number.isFinite()' instead." },
      {
        name: 'parseInt',
        message: "Use 'Number()' or 'Number.parseInt()' instead.",
      },
      {
        name: 'parseFloat',
        message: "Use 'Number()' or 'Number.parseFloat()' instead.",
      },
    ],
    // OFF: Restricting imports, if necessary, should be done per project.
    'no-restricted-imports': 'off',
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
    'no-restricted-syntax': [
      'warn',
      {
        selector: 'ForInStatement',
        message:
          'The for..in loop iterates over all enumerable properties (including ' +
          'inherited ones). Usually this is not a behavior you want. Use the ' +
          "for..of loop or transform the object into an array using 'Object.keys', " +
          "'Object.values', or 'Object.entries' and use 'Array.prototype.forEach' instead.",
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-shadow': [
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
          'next',
          'self',
        ],
      },
    ],
    'no-shadow-restricted-names': 'error',
    // OFF: There's nothing wrong with using the ternary operator as long as it
    // is not abused (i.e. nesting it).
    'no-ternary': 'off',
    'no-undef-init': 'warn',
    // OFF: Preventing usage of `undefined` because there's a very rare
    // possibility (which is considered a bad practice anyway) that it might be
    // overwritten probably does more harm than good.
    'no-undefined': 'off',
    // OFF: This configuration uses leading underscores to indicate that a
    // variable is intentionally unused.
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['warn', { defaultAssignment: true }],
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
    'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',

    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'error',
      { ignoreImport: false, ignoreExport: false, ignoreDestructuring: false },
    ],
    'no-useless-return': 'warn',
    'no-var': 'error',
    'no-void': ['error', { allowAsStatement: false }],
    // OFF: Those comments should not be treated as an error or a warning. It's
    // fine to use them.
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': [
      'warn',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: true,
      },
    ],
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': ['warn', 'initializations'],
    'operator-assignment': ['warn', 'always'],
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
    'prefer-exponentiation-operator': 'warn',
    'prefer-named-capture-group': 'warn',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quote-props': [
      'warn',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],
    radix: ['warn', 'always'],
    // OFF: Asynchronous functions don't have to use the `await` operator.
    // Moreover, it's clearer, in my opinion, to mark with `async` a function
    // that does not use the `await` operator inside itself but still returns a
    // `Promise`.
    'require-await': 'off',
    'require-unicode-regexp': 'warn',
    'require-yield': 'error',
    // OFF: The `eslint-plugin-import` is responsible for this.
    'sort-imports': 'off',
    // OFF: This rule is not autofixable. It would be too much of a burden to
    // maintain a proper order by hand.
    'sort-keys': 'off',
    // OFF: I don't see any point of sorting variables by their name.
    'sort-vars': 'off',
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          markers: ['/', '!'],
          exceptions: [],
        },
        block: {
          markers: ['!'],
          exceptions: [],
          balanced: true,
        },
      },
    ],
    strict: ['error', 'global'],
    'symbol-description': 'warn',
    'vars-on-top': 'warn',
    yoda: ['warn', 'never', { exceptRange: true, onlyEquality: false }],
  },
};
