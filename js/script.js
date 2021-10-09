"use strict";

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

const wrapper = document.querySelector('.wrapper');


hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';
let num = 400;
box.style.cssText = `background-color: blue; width: ${num}px`;

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');
wrapper.append(div);
div.innerHTML = `<h1>ldsmklpdskposdl</h1>`;
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

// div.textContent = `hello`;



// wrapper.prepend(div);
// hearts[1].after(div);
// circles[0].remove();
// hearts[1].replaceWith(circles[0]);

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);

