"use strict";

console.log("Запрос данных...");

const req = new Promice(function (resolve, reject) {
  setTimeout(() => {
    console.log("Подготовка данных...");
    const product = {
      name: "TV",
      price: "2000",
    };

    resolve();
  }, 2000);
});

req.then(() => {
  console.log("Данные получены");
});

// setTimeout(() => {
//   product.status = "order";
//   console.log(product);
// }, 2000);
