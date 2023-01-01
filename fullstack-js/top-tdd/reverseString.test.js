const reverseString = require('./reverseString.js');

test('expect "word" to be "drow".', () => {
    expect(reverseString('word')).toBe('drow');
});

test('expect "This penguin" to be "niugnep sihT".', () => {
    expect(reverseString('This penguin')).toBe('niugnep sihT');
});