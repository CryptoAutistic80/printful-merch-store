const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
  dir: './apps/g7-store-web',
});

const config = {
  displayName: 'g7-store-web',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/g7-store-web',
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(config);
