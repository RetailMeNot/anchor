module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/commonjs/",
    "/esm/",
    "/ts/",
    "/docs/",
    "/.storybook/",
    "/utils/"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/utils/test-config.ts",
  coverageDirectory: "./coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/commonjs/",
    "/ts/",
    "/esm/",
    "/utils/"
  ],
  coverageReporters: [
    "json",
    "text"
  ],
  coverageThreshold: {
    global: {
      statements: 89,
      branches: 54,
      lines: 91,
      functions: 72,
    }
  }
};
