const validatePIN = require('../index')

describe('validatePIN', () => {

    test('if pin.length is not 4 or 6 return false', () => {
        const actualOutput = validatePIN('1')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin.length is not 4 or 6 return false', () => {
        const actualOutput = validatePIN('12')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin.length is not 4 or 6 return false', () => {
        const actualOutput = validatePIN('123')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin.length is not 4 or 6 return false', () => {
        const actualOutput = validatePIN('12345')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin.length is not 4 or 6 return false', () => {
        const actualOutput = validatePIN('1234567')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not between 0 and 9 return false', () => {
        const actualOutput = validatePIN('4a56')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not between 0 and 9 return false', () => {
        const actualOutput = validatePIN('.123')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not between 0 and 9 return false', () => {
        const actualOutput = validatePIN('789:')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not between 0 and 9 return false', () => {
        const actualOutput = validatePIN('9¾9¾')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not positive return false', () => {
        const actualOutput = validatePIN('-1234')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not positive return false', () => {
        const actualOutput = validatePIN('-44444')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin digit is not positive return false', () => {
        const actualOutput = validatePIN('-44444')
        const expectedOutput = false
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin.length is 4 return true', () => {
        const actualOutput = validatePIN('1234')
        const expectedOutput = true
        expect(actualOutput).toBe(expectedOutput)
    })

    test('if pin.length is 6 return true', () => {
        const actualOutput = validatePIN('123456')
        const expectedOutput = true
        expect(actualOutput).toBe(expectedOutput)
    })
})