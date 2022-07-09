// container div
const container = document.querySelector('.container');

// create first paragraph
const para = document.createElement('p');
para.setAttribute('style', 'color:red;');
para.textContent ='Hey! I\'m a red paragraph.';

container.appendChild(para);

// create blue h3
const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue;');
h3.textContent = 'I\'m blue.';

container.appendChild(h3);

// create content div
const content = document.createElement('div');
content.setAttribute('style', 'border: 1px solid black; background: pink; width: 200px; height: 100px;');

// Create h2 element
const h2 = document.createElement('h2');
h2.textContent = 'I\'m in a div';
para.textContent = 'Me too!';

content.appendChild(h2);
content.appendChild(para);

container.appendChild(content);