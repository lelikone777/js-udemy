"use strict";
//1)
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//
//   console.log(sum());
// }
// showThis(4, 5);

//2)
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };
// obj.sum();

//3)
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.hello = function () {
//     console.log("Hello!" + this.name);
//   };
// }
// let Ivan = new User("Ivan", 23);
// let Boris = new User("Boris", 45);
// console.log(Boris.hello());

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: "John",
};

sayName.call(user, "Smith");
sayName.apply(user, ["Smith2"]);

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция: this = window, но если "use strict" - undefined;
// 2) Контекст у методов объекта это сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта.
// 4)
