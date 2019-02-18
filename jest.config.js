module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx'],
  testRegex: '\\.(spec|e2e|snapshot)\\.js$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    'src/redux/reducers/**/*.{js,jsx}',
    '!src/redux/reducers/**/index.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageReporters: ['json', 'html', 'lcov'],
  coverageDirectory: '<rootDir>/tests/__coverage__/',
  setupFilesAfterEnv: ['<rootDir>/setup-jasmine-env.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
