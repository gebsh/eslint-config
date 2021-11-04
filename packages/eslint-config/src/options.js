'use strict';

module.exports = {
  linePaddings: {
    general: [
      // Require lines around all statements that may be block-like.
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'class',
          'do',
          'for',
          'function',
          'if',
          'switch',
          'try',
          'while',
          'with',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'block',
          'class',
          'do',
          'for',
          'function',
          'if',
          'switch',
          'try',
          'while',
          'with',
        ],
        next: '*',
      },
      // Group directives together.
      {
        blankLine: 'always',
        prev: '*',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
      // Group variable declarations together.
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      // This is an exception to the rule above: ignore expressions that are
      // placed after the variable declarations.
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: 'expression',
      },
      // Group CommonJS exports together.
      {
        blankLine: 'always',
        prev: '*',
        next: 'cjs-export',
      },
      {
        blankLine: 'always',
        prev: 'cjs-export',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'cjs-export',
        next: 'cjs-export',
      },
      // Always place a blank line before some "terminating" statements.
      {
        blankLine: 'always',
        prev: '*',
        next: ['break', 'continue', 'throw', 'return'],
      },
    ],
    imports: [
      // Group imports together.
      {
        blankLine: 'always',
        prev: '*',
        next: ['cjs-import', 'import'],
      },
      {
        blankLine: 'always',
        prev: ['cjs-import', 'import'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['cjs-import', 'import'],
        next: ['cjs-import', 'import'],
      },
    ],
  },
};
