module.exports = {
  extends: 'airbnb',
  env: {
    browser: true
  },
  rules: {
    'object-curly-spacing': ['warn', 'never'],
    'comma-dangle': ['warn', 'never'],
    'max-len': ['warn', 120],
    'react/jsx-filename-extension': ['off'],
    'max-lines': ['warn', {max: 600, skipBlankLines: true, skipComments: true}]
  }
};
