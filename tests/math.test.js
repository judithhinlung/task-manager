const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('should convert Celsius to Fahrenheit', () => {
    const temperature = celsiusToFahrenheit(0)
    expect(temperature).toBe(32)
})

test('should convert Fahrenheit to Celsius', () => {
    const temperature = fahrenheitToCelsius(32)
    expect(temperature).toBe(0)
})  