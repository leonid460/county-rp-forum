// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  globals: {
    'babel-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
