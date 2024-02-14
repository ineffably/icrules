/** @type {import('ts-jest').JestConfigWithTsJest} */
const path = require('path');
const { lstatSync, readdirSync } = require('fs');
const basePath = path.resolve(__dirname, 'packages');
const packages = readdirSync(basePath).filter(name => (lstatSync(path.join(basePath, name)).isDirectory()));

module.exports = {
  resolver: 'ts-jest-resolver',
  preset: 'ts-jest',
  rootDir: './',
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/core/src/**/*.ts',
    '<rootDir>/packages/editor/src/**/*.ts',
  ],
  testMatch: [
    '<rootDir>/packages/core/test/**/*.test.ts',
    '<rootDir>/packages/editor/test/**/*.test.ts'
  ],
  moduleNameMapper: {
    ...packages.reduce(
       (acc, name) => ({
          ...acc,
          [`@ahoopen/${name}(.*)$`]:
          `<rootDir>/packages/./${name}/src/$1`,
     }),
   {},
  ),
 },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`/node_modules/`],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageReporters: ['json', 'html', 'text'],
  transform: {
    '^.+\\.tsx|.ts?$': 'ts-jest'
  }
};