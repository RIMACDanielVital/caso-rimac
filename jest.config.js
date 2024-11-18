module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/*.steps.ts'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
