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

const commentElements = document.querySelectorAll("#comments li");

commentElements.forEach((commentElement) => {
    commentElement.style.fontSize = "30px";
});

const buttonElement = document.querySelector('button');
if (buttonElement.hasAttribute('disabled') === true) {
    buttonElement.removeAttribute('disabled');
}

buttonElement.setAttribute("id", "submit");

console.log(buttonElement);

console.log(buttonElement.getAttribute("id"));

buttonElement.classList.add("btn");

console.log(buttonElement.className);

buttonElement.classList.remove("btn");

console.log(buttonElement.className);

buttonElement.classList.add("action-button");

console.log(buttonElement.className);

console.log(buttonElement.classList.contains("action-button")); // true
console.log(buttonElement.classList.contains("btn")); // false

buttonElement.classList.replace(
    "action-button",
    "primary-button"
);

console.log(buttonElement.className);

buttonElement.classList.toggle("dark");

console.log(buttonElement.className);