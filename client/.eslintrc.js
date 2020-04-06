module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'import/extensions': 'off',
    'no-cond-assign': 'off',
    'semi': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
