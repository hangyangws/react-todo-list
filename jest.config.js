module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@api(.*)$': '<rootDir>/src/api$1',
    '@components(.*)$': '<rootDir>/src/components$1',
    '@config(.*)$': '<rootDir>/src/config$1',
    '@pages(.*)$': '<rootDir>/src/pages$1',
    '@resource(.*)$': '<rootDir>/src/resource$1',
    '@store(.*)$': '<rootDir>/src/store$1',
    '@utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/test/file.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/test/style.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
};
