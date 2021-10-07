"use strict";

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};

const john = Object.create(soldier);

// Object.setPrototypeOf(john, soldier);

john.sayHello();