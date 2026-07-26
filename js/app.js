// UI Cached Variables
console.log("Hello, World!");

const titleElement = document.querySelector('#main-title');
const paragraphElement = document.querySelector('.cool')

console.log(paragraphElement.textContent);

paragraphElement.textContent = "I like pizza";
paragraphElement.style.color = "red";
paragraphElement.style.fontWeight = "bold";

titleElement.style.color = "blue";
titleElement.style.fontSize = "40px";
titleElement.style.textAlign = "center";

console.log(paragraphElement.textContent);

console.dir(titleElement);
console.dir(paragraphElement);

const bodyElement = document.querySelector('body');
console.dir(bodyElement);

const h2Element = document.createElement('h2');
h2Element.textContent = 'Comments section';

bodyElement.appendChild(h2Element);