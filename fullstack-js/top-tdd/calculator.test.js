const calculator = require('./calculator.js');

test('expect 2 + 2 to be 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('expect 2 - 2 to be 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test('expect 8 / 4 to be 2', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test('expect 10 * 2 to be 20', () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});