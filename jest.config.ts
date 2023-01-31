import type { Config } from 'jest';

const config: Config = {
  verbose: true,

  testEnvironment: 'jest-environment-jsdom',

  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],

  // ts-jest
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },

  // @swc/jest 断然早い
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },

  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.js',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
