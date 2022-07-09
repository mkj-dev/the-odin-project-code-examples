// container div
const container = document.querySelector('.container');

// creating first paragraph
const para = document.createElement('p');
para.setAttribute('style', 'color:red;');
para.textContent ='Hey! I\'m a red paragraph.';

container.appendChild(para);