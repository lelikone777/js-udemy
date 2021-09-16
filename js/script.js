"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};

const john = Object.create(soldier);

// const John = {
//   health: 100
// };

// John.__proto__ = soldier;
// Object.setPrototypeOf(John, soldier);
john.sayHello();