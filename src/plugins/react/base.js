'use strict';

module.exports = {
  rules: {
    // OFF: Prop names such as "enabled" match attributes of native HTML
    // elements.
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: false },
    ],
    // OFF: This rule is very annoying. Both styles are fine and can be used
    // interchangeably.
    'react/destructuring-assignment': 'off',
    // OFF: React does a pretty good job of inferring this name.
    'react/display-name': 'off',
    'react/forbid-component-props': [
      'error',
      { forbid: ['className', 'style'] },
    ],
    // OFF: This rule is too general to enable it in this configuration.
    'react/forbid-dom-props': 'off',
    // OFF: This rule is too general to enable it in this configuration.
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    // OFF: Function style is already enforced by the base `func-style` rule.
    'react/function-component-definition': 'off',
    'react/no-access-state-in-setstate': 'error',
    // OFF: It may be desirable to put inline elements adjacent to each other.
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    // TODO: Enable?
    'react/no-deprecated': 'off',
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    // TODO: Enable?
    // OFF: Some components might have little code and it makes more sense to
    // put them in the same file as they are logically coupled.
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'warn',
    'react/no-render-return-value': 'error',
    // OFF: A state is an integral part of a component and it changing it should
    // not be disallowed.
    'react/no-set-state': 'off',
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': ['error', { ignore: [] }],
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    // OFF: It seems that there's no way (or the docs of this rule are too vague
    // to me) to specify that props with a leading underscore should not be
    // considered unused.
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': ['error', 'disallow-in-func'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'warn',
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/prop-types': [
      'warn',
      { ignore: [], customValidators: [], skipUndeclared: false },
    ],
    // OFF: Since React 17, React is no longer needed to be in the JSX scope.
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: false },
    ],
    // OFF: If this is required, then this rule should be set per-project basis.
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react/sort-comp': [
      'warn',
      {
        order: [
          'static-variables',
          'instance-variables',
          'getters',
          'setters',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          'instance-methods',
          'everything-else',
          'render',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    // OFF: There's no need to sort these alphabetically, especially when it
    // is not autofixable.
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': ['warn', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/style-prop-object': ['error', { allow: [] }],
    'react/void-dom-elements-no-children': 'error',
  },
};
