import _ from 'lodash'; 
import myName from './myName';
import {number1, number2, addTwoNumbers, multiplyTwoNumbers} from './mathModule';

function component() {
    const element = document.createElement('div');
    const nameElement = document.createElement('p');
    const additionElement = document.createElement('p');
    const multiplicationElement = document.createElement('p');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // myName.js
    nameElement.innerText = myName('Anonymous.');
    // mathModule.js
    additionElement.innerText = addTwoNumbers(number1, number2);
    multiplicationElement.innerText = multiplyTwoNumbers(number1, number2);

    element.appendChild(nameElement);
    element.appendChild(additionElement);
    element.appendChild(multiplicationElement);

    return element;
}

document.body.appendChild(component());