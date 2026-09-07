module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}