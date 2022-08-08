module.exports = {
    preset: 'ts-jest',
    testMatch: [
        '<rootDir>/testing/unitTests/*.test.[jt]s?(x)'
    ],
    testEnvironment: 'node'
}