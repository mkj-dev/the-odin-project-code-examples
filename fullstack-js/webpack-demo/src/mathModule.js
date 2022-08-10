let number1 = parseFloat(prompt('Enter number one: '));
let number2 = parseFloat(prompt('Enter number two: '));

const addTwoNumbers = (number1, number2) => {
    const addition = number1 + number2;
    return addition;
}

const multiplyTwoNumbers = (number1, number2) => {
    const multiplication = number1 * number2;
    return multiplication;
}

export {
    number1,
    number2,
    addTwoNumbers,
    multiplyTwoNumbers
};