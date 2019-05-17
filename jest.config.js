/* tslint:disable */

module.exports = {
  roots: [
    "<rootDir>/src",
    "<rootDir>/utils",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/commonjs/",
    "/esm/",
    "/ts/",
    "/docs/",
    "/.storybook/",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: [
    "<rootDir>/utils/test-config.ts",
  ],
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/commonjs/",
    "/ts/",
    "/esm/",
    "/src/Icon/SVGs",
    "/src/Layout/Footer",
    "/src/Layout/Header",
  ],
  coverageReporters: [
    "json",
    "text"
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 75,
      functions: 62,
      lines: 86
    }
  }
};
