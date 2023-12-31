const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testPathIgnorePatterns: [ '<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '__reports__',
        filename: 'jest.html',
      },
    ],
  ],
}

module.exports = createJestConfig(customJestConfig)