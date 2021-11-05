'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // Possible Problems
    'no-unexpected-multiline': 'off',

    // Suggestions
    'arrow-body-style': 'off',
    'no-confusing-arrow': 'off',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-mixed-operators': 'off',
    'one-var-declaration-per-line': 'off',
    'prefer-arrow-callback': 'off',
    'quote-props': 'off',

    // Layout & Formatting
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-extra-parens': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'off',
    'no-whitespace-before-property': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    // OFF: This is disabled in the official `eslint-config-prettier`
    // conguration but in reality it shouldn't be disabled. For more information
    // see: https://github.com/prettier/prettier/issues/6461.
    // 'unicode-bom': 'off'
    'wrap-iife': 'off',
    'yield-star-spacing': 'off',
  },
};
