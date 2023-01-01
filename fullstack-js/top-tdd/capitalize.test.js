const capitalize = require('./capitalize.js');

test('expect "word" to be "Word".', () => {
    expect(capitalize('word')).toBe('Word');
});

test('expect "penguin" to be "Penguin".', () => {
    expect(capitalize('penguin')).toBe('Penguin');
});