/**
 * Jest configuration file
 */

module.exports = {
  verbose: true,
  automock: false,
  setupFiles: ["<rootDir>/setupTest.js"],
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  testMatch: ["**/(*.)+(test).[jt]s?(x)"],
  globals: {
    collectCoverageFrom: [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/cypress/**",
    ],
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
