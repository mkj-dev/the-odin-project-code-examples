import _ from 'lodash'; 
import myName from './myName';
import {number1, number2, addTwoNumbers, multiplyTwoNumbers} from './mathModule';
import './style.css';
import Icon from './img/icon.png';

function component() {
    const element = document.createElement('div');
    const nameElement = document.createElement('p');
    const additionElement = document.createElement('p');
    const multiplicationElement = document.createElement('p');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // myName.js
    nameElement.innerText = myName('Anonymous.');
    element.appendChild(nameElement);

    // mathModule.js
    additionElement.innerText = addTwoNumbers(number1, number2);
    multiplicationElement.innerText = multiplyTwoNumbers(number1, number2);
    element.appendChild(additionElement);
    element.appendChild(multiplicationElement);

    // Add icon to our existing div
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());