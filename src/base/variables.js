'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // OFF: This rule is annoying when a variable is initialized conditionally
    // using `if {} else {}`.
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
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
          'self',
        ],
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['warn', { typeof: true }],
    'no-undef-init': 'warn',
    // OFF: The ability to overwrite or shadow `undefined` is not a good enough
    // reason to enable this rule. Doing that is considered a bad practice and
    // giving up on using `undefined` because of such rare cases probably does
    // more harm than good.
    'no-undefined': 'off',
    'no-unused-vars': [
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
    'no-use-before-define': [
      'error',
      {
        variables: true,
        functions: true,
        classes: true,
      },
    ],
  },
};
