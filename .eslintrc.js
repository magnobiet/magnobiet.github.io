module.exports = {
  env: {
    es6: true,
    node: false,
    browser: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'indent': ['error', 'space'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error', {
      'allow': ['log', 'warn', 'error', 'debug']
    }],
    'quotes': ['error', 'single'],
    'camelcase': ['error'],
    'semi': ['error', 'always'],
  }
};
