function reverseString(string) {
    const stringArray = string.split('');
    let reversedString = '';

    for (i = 1; i <= stringArray.length; i++) {
        reversedString += stringArray[stringArray.length - i];
    }
    return reversedString
}

module.exports = reverseString;