const BIN_FILE_TYPES = require('./bin-file-types');

module.exports = {
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    [`\\.(${BIN_FILE_TYPES})$`]: '<rootDir>/__mocks__/fileMock.js'
  }
};
