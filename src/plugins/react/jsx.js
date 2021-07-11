'use strict';

module.exports = {
  rules: {
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-child-element-spacing': 'warn',
    'react/jsx-closing-bracket-location': [
      'warn',
      {
        nonEmpty: 'line-aligned',
        selfClosing: 'line-aligned',
      },
    ],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-curly-newline': [
      'warn',
      { singleline: 'forbid', multiline: 'require' },
    ],
    'react/jsx-curly-spacing': ['warn', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    'react/jsx-indent': [
      'warn',
      2,
      { checkAttributes: true, indentLogicalExpressions: true },
    ],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-max-depth': ['warn', { max: 6 }],
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline', maximum: 1 }],
    // OFF: These newlines can sometimes improve readability. Enforcing or
    // disallowing them entirely is not a great idea. Since this rule cannot be
    // configured in a more granular way, it's disabled.
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    // OFF: It's fine to use string literals in JSX.
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': [
      'warn',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
        warnOnSpreadAttributes: true,
      },
    ],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/jsx-one-expression-per-line': ['warn', { allow: 'literal' }],
    'react/jsx-pascal-case': [
      'warn',
      { allowAllCaps: false, allowNamespace: true, ignore: [] },
    ],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],
    // OFF: There's no need to sort these, especially when it is not
    // autofixable.
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    // Since React 17, React is no longer needed to be in the JSX scope.
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
  },
};
