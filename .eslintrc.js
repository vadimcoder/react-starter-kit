module.exports = {
  extends: 'airbnb',
  env: {
    browser: true
  },
  rules: {
    'object-curly-spacing': ['off'],
    'comma-dangle': ['off'],
    'max-len': ['error', 120],
    'react/jsx-filename-extension': ['off'],
    'max-lines': ['error', {max: 600, skipBlankLines: true, skipComments: true}],
    "import/prefer-default-export": ['off']
  },
  settings: {
    'import/resolver': 'webpack'
  }
};
