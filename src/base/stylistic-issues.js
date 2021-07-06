'use strict';

module.exports = {
  ruels: {
    'array-bracket-newline': ['warn', { multiline: true, minItems: null }],
    'array-bracket-spacing': [
      'warn',
      'never',
      { singleValue: false, objectsInArrays: false, arraysInArrays: false },
    ],
    'array-element-newline': ['warn', 'consistent'],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: false }],
    camelcase: [
      'warn',
      {
        properties: 'never',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
        allow: ['^UNSAFE_'],
      },
    ],
    // OFF: When this rule is enabled and code is temporary commented-out, it
    // changes letter case causing syntax errors.
    'capitalized-comments': 'off',
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
    'consistent-this': ['warn', 'self'],
    'eol-last': ['warn', 'always'],
    'func-call-spacing': ['warn', 'never'],
    'func-name-matching': [
      'warn',
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: true,
      },
    ],
    'func-names': ['warn', 'always', { generators: 'always' }],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'multiline-arguments'],
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
    // OFF: Just disabled.
    'id-match': 'off',
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
    'max-depth': ['warn', 3],
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
    'max-lines': [
      'warn',
      { max: 260, skipBlankLines: true, skipComments: true },
    ],
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
    // OFF: I think that this is too granular.
    'max-statements': 'off',
    'max-statements-per-line': ['warn', { max: 1 }],
    'multiline-comment-style': ['warn', 'separate-lines'],
    'multiline-ternary': ['warn', 'always-multiline'],
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
    'new-parens': ['warn', 'always'],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 1 }],
    'no-array-constructor': 'error',
    'no-bitwise': ['warn', { int32Hint: false, allow: [] }],
    // OFF: `continue` statements are not harmful and they have valid use cases.
    // Disallowing them entirely to prevent abusing them is definitely much more
    // harmful as it creates a sense that they are inherently evil and should be
    // avoided at all cost.
    'no-continue': 'off',
    // OFF: Though I prefer to write all comments above a line of code, it is
    // sometimes useful to be able to put a small comment on the same line as
    // code.
    'no-inline-comments': 'off',
    'no-lonely-if': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['*', '/'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['&', '|', '>>', '>>>', '<<'],
          ['&&', '||'],
          ['==', '!=', '===', '!=='],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-assign': ['warn', { ignoreNonDeclaration: false }],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-object': 'error',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: false }],
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
    'no-tabs': ['warn', { allowIndentationTabs: false }],
    // OFF: There's nothing wrong with using the ternary operator.
    'no-ternary': 'off',
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    // OFF: This configuration uses leading underscores to indicate
    // intentionally unused variables.
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
    'no-whitespace-before-property': 'warn',
    'nonblock-statement-body-position': [
      'warn',
      'below',
      { overrides: { if: 'any', else: 'any' } },
    ],
    'object-curly-newline': ['warn', { multiline: true, consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': ['warn', 'initializations'],
    'operator-assignment': ['warn', 'always'],
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
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'warn',
    'quote-props': [
      'warn',
      'as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    semi: ['warn', 'always', { omitLastInOneLineBlock: false }],
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi-style': ['warn', 'last'],
    // OFF: This rule is not autofixable. It would be too much of a burden to
    // maintain a proper order by hand.
    'sort-keys': 'off',
    // OFF: I don't see the point of sorting variables by their name.
    'sort-vars': 'off',
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
    'spaced-comment': [
      'warn',
      'always',
      {
        line: {
          markers: ['/', '!'],
          exceptions: [],
        },
        block: {
          markers: ['!', ':', '::'],
          exceptions: [],
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'template-tag-spacing': ['warn', 'never'],
    'unicode-bom': ['error', 'never'],
    // OFF: Wrapping regular expressions in parens is unnecessary.
    'wrap-regex': 'off',
  },
};
