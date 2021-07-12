'use strict';

module.exports = {
  rules: {
    // Possible errors
    //
    // Handled by: ts(2378).
    // Not handled:
    // TypeScript does not warn about getters not returning a value when they
    // are defined using the `Object.defineProperty` function or the
    // `Reflect.defineProperty` function. ESLint does warn these cases:
    //
    // ```js
    // Object.defineProperty(foo, 'prop', {
    //   get() {}
    // });
    //
    // Reflect.defineProperty(foo, 'prop', {
    //   get() {}
    // });
    // ```
    //
    // However, those are less common than regular accessors,
    'getter-return': 'off',

    // Handled by: ts(2300).
    'no-dupe-args': 'off',

    // Handled by: ts(2300).
    'no-dupe-keys': 'off',

    // Handled by: ts(2539).
    'no-func-assign': 'off',

    // Handled by: ts(2539).
    'no-import-assign': 'off',

    // Handled by: ts(2349), ts(2351).
    'no-obj-calls': 'off',

    // Handled by: ts(2408).
    // Not handled:
    // The same case as in the 'getter-return' rule.
    'no-setter-return': 'off',

    // Handled by: ts(7027).
    'no-unreachable': 'off',

    // Handled by: ts(2358), ts(2360), ts(2365).
    'no-unsafe-negation': 'off',

    // Handled by: ts(2367).
    'valid-typeof': 'off',

    // Best practices
    //
    // Handled by: ts(2403), ts(2451).
    // Not handled:
    // When a variable declared with `var` keyword is redeclared and does not
    // change its type, then TypeScript does not warn about it whereas ESLint
    // does.
    //
    // ```js
    // var foo = 1;
    // var foo = 3;
    // ```
    //
    // However, since this config disallows using `var` anyway, this rule can be
    // disabled.
    'no-redeclare': 'off',

    // Variables
    //
    // Handled by: ts(2304), ts(2552).
    'no-undef': 'off',

    // ECMAScript 6
    //
    // Handled by: ts(2335), ts(2377), ts(17005).
    // Not handled:
    // There's a one case where TypeScript does not warn whereas ESLint does:
    //
    // ```js
    // class A extends null {
    //   constructor() {} // Throws a ReferenceError at runtime.
    // }
    // ```
    //
    // However, extending `null` throws an error when constructing an instance
    // of such a class and should be avoided, at least for now. For more
    // information, see: https://github.com/tc39/ecma262/pull/1321.
    'constructor-super': 'off',

    // Handled by: ts(2300), ts(2393).
    'no-dupe-class-members': 'off',

    // Handled by: ts(2350).
    'no-new-symbol': 'off',

    // Handled by: ts(17009), ts(17011).
    'no-this-before-super': 'off',
  },
};
