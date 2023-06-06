/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: {
        target: "es2021",
      },
    },
  },
  resolver: 'jest-webpack-resolver',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [`node_modules`],
  transform: {
    '^.+\\.tsx|.ts?$': 'ts-jest'
  }
};