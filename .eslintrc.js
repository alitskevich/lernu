module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect',
    },
    'import/ignore': [
      'node_modules'
    ],
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'lib', 'modules'],
      },
    },
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    "plugin:prettier/recommended",
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  'ignorePatterns': [
    'node_modules/',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    '**/__mocks__/**',
    'react-native.config.js',
    '.eslintrc.js'
  ],
  'rules': {
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
      }
    ],
    'import/newline-after-import': ['error', { 'count': 1 }],
    'import/namespace': [2, { 'allowComputed': true }],
    'no-undef': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxEOF': 0,
        'maxBOF': 0,
      }
    ],
    'eol-last': ['error', 'always'],
    'newline-before-return': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'max-len': [
      'error',
      {
        'code': 140,
        'tabWidth': 2,
        'ignoreStrings': true,
        'ignoreTrailingComments': true,
        'ignoreTemplateLiterals': true,
        'ignorePattern': 'createStandardAction|createSelector',
      }
    ],
    'object-shorthand': [2, 'always'],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error'],
    'no-console': ['error'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': "off",
    'semi': ['error', 'always'],
    "indent": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    'quotes': ['error', 'single'],
    'prefer-template': 'error',
    'object-curly-newline': "off",
    'eqeqeq': ['error'],
    'keyword-spacing': ['error', { 'before': true }],
    'space-before-blocks': ['error',
      {
        'functions': 'always',
        'keywords': 'always',
        'classes': 'always',
      }
    ],


    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true,
    }],
    'react/jsx-closing-bracket-location': "off",
    'react/display-name': ['off'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    'react/jsx-one-expression-per-line': 'off',


    'jest/no-disabled-tests': 'warn',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-inline-snapshots': 'off',


    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': [2, { 'default': 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': [2, { 'prefixWithI': 'always' }],
  },
};
