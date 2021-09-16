"use strict";

const arr = [12,2,31,4,15];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b) {
    return a - b;
}

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));


// arr[99] = 0;
// console.log(arr);
// console.log(arr.length);

// arr.forEach(function(item,i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });




// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }