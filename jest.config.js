module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'jsx', 'js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/typings/'],
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}'],
  coveragePathIgnorePatterns: [
    'jest.config.js',
    '.*/typings/.*'
  ],
  resetMocks: true,
  verbose: true
};
