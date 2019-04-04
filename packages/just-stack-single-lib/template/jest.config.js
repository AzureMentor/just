const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  reporters: [path.resolve(__dirname, 'node_modules/just-scripts/lib/jest/JestReporter.js')]
};
