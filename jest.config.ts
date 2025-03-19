export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/src/**/*.test.tsx', '**/src/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/main\\.tsx'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/utils/',
    '<rootDir>/src/main\\.tsx',
    '<rootDir>/mocks/.*',
  ],
};
