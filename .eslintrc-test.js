module.exports = {
  extends: [
    './.eslintrc.js',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  env: {
    jest: true
  },
  rules: {
    'no-magic-numbers': ['off']
  }
};
