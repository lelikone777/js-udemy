const log = function (a, b, ...rest1) {
  console.log(a, b, rest1);
};

log("basic", " rest", "operator", "usage");

function calcOrDouble(number, basis = 3) {
  // basis = basis || 2;   ---- старый вариант
  console.log(number * basis);
}

calcOrDouble(3);
