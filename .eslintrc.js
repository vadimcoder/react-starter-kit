module.exports = {
  extends: 'airbnb',
  env: {
    browser: true
  },
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 120],
    'react/jsx-filename-extension': ['off'],
    'max-lines': ['error', {max: 600, skipBlankLines: true, skipComments: true}]
  }
};
