/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@stylistic/disable-legacy'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@stylistic',
    'simple-import-sort'
  ],
  rules: {
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    '@stylistic/array-bracket-newline': ['warn', { multiline: true }],
    '@stylistic/array-bracket-spacing': 'warn',
    '@stylistic/array-element-newline': [
      'warn',
      {
        consistent: true,
        multiline: true
      }
    ],
    '@stylistic/arrow-parens': ['warn', 'as-needed'],
    '@stylistic/arrow-spacing': 'warn',
    '@stylistic/block-spacing': 'warn',
    '@stylistic/brace-style': 'warn',
    '@stylistic/comma-dangle': ['warn', 'never'],
    '@stylistic/comma-spacing': 'warn',
    '@stylistic/comma-style': 'warn',
    '@stylistic/computed-property-spacing': 'warn',
    '@stylistic/dot-location': ['warn', 'property'],
    '@stylistic/eol-last': ['warn', 'always'],
    '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
    '@stylistic/function-call-spacing': 'warn',
    '@stylistic/function-paren-newline': 'warn',
    '@stylistic/generator-star-spacing': 'warn',
    '@stylistic/implicit-arrow-linebreak': 'warn',
    '@stylistic/indent': ['warn', 2],
    '@stylistic/indent-binary-ops': ['warn', 2],
    '@stylistic/jsx-child-element-spacing': 'warn',
    '@stylistic/jsx-closing-bracket-location': 'warn',
    '@stylistic/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always'
      }
    ],
    '@stylistic/jsx-curly-newline': [
      'warn',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],
    '@stylistic/jsx-curly-spacing': 'warn',
    '@stylistic/jsx-equals-spacing': 'warn',
    '@stylistic/jsx-first-prop-new-line': 'warn',
    '@stylistic/jsx-function-call-newline': 'warn',
    '@stylistic/jsx-indent': ['warn', 2],
    '@stylistic/jsx-indent-props': ['warn', 2],
    '@stylistic/jsx-max-props-per-line': [
      'warn',
      {
        maximum: {
          single: 3,
          multi: 1
        }
      }
    ],
    '@stylistic/jsx-newline': ['warn', { prevent: true }],
    '@stylistic/jsx-one-expression-per-line': [
      'warn',
      {
        allow: 'single-child'
      }
    ],
    '@stylistic/jsx-pascal-case': ['warn', { allowNamespace: true }],
    '@stylistic/jsx-props-no-multi-spaces': 'warn',
    '@stylistic/jsx-closing-tag-location': ['warn'],
    '@stylistic/jsx-quotes': 'warn',
    '@stylistic/jsx-self-closing-comp': 'warn',
    '@stylistic/jsx-sort-props': 'warn',
    '@stylistic/jsx-tag-spacing': 'warn',
    '@stylistic/jsx-wrap-multilines': 'warn',
    '@stylistic/key-spacing': 'warn',
    '@stylistic/keyword-spacing': 'warn',
    '@stylistic/line-comment-position': [0],
    '@stylistic/linebreak-style': 'warn',
    '@stylistic/lines-around-comment': 'warn',
    '@stylistic/lines-between-class-members': 'warn',
    '@stylistic/max-len': ['warn', { code: 120 }],
    '@stylistic/max-statements-per-line': 'warn',
    '@stylistic/member-delimiter-style': 'warn',
    '@stylistic/multiline-comment-style': 'warn',
    '@stylistic/multiline-ternary': 'warn',
    '@stylistic/new-parens': 'warn',
    '@stylistic/newline-per-chained-call': 'warn',
    '@stylistic/no-confusing-arrow': 'warn',
    '@stylistic/no-extra-parens': 'warn',
    '@stylistic/no-extra-semi': 'warn',
    '@stylistic/no-floating-decimal': 'warn',
    '@stylistic/no-mixed-operators': 'warn',
    '@stylistic/no-mixed-spaces-and-tabs': 'warn',
    '@stylistic/no-multi-spaces': 'warn',
    '@stylistic/no-multiple-empty-lines': 'warn',
    '@stylistic/no-tabs': 'warn',
    '@stylistic/no-trailing-spaces': 'warn',
    '@stylistic/no-whitespace-before-property': 'warn',
    '@stylistic/nonblock-statement-body-position': 'warn',
    '@stylistic/object-curly-newline': 'warn',
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/object-property-newline': 'warn',
    '@stylistic/one-var-declaration-per-line': 'warn',
    '@stylistic/operator-linebreak': ['warn', 'before'],
    '@stylistic/padded-blocks': ['warn', 'never'],
    '@stylistic/padding-line-between-statements': 'warn',
    '@stylistic/quote-props': ['warn', 'as-needed'],
    '@stylistic/quotes': ['warn', 'single'],
    '@stylistic/rest-spread-spacing': 'warn',
    '@stylistic/semi': 'warn',
    '@stylistic/semi-spacing': 'warn',
    '@stylistic/semi-style': 'warn',
    '@stylistic/space-before-blocks': 'warn',
    '@stylistic/space-before-function-paren': ['warn', 'never'],
    '@stylistic/space-in-parens': 'warn',
    '@stylistic/space-infix-ops': 'warn',
    '@stylistic/space-unary-ops': 'warn',
    '@stylistic/spaced-comment': 'warn',
    '@stylistic/switch-colon-spacing': 'warn',
    '@stylistic/template-curly-spacing': 'warn',
    '@stylistic/template-tag-spacing': 'warn',
    '@stylistic/type-annotation-spacing': 'warn',
    '@stylistic/type-generic-spacing': 'warn',
    '@stylistic/type-named-tuple-spacing': 'warn',
    '@stylistic/wrap-iife': 'warn',
    '@stylistic/wrap-regex': 'warn',
    '@stylistic/yield-star-spacing': 'warn'
  }
};
