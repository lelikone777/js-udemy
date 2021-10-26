// const timerId = setTimeout(logger, 2000, "Hello123");
// clearInterval(timerId);
// function logger() {
//   console.log("text");
// }
// let id = setTimeout(function log() {
//   console.log('hello');
//   id = setTimeout(log, 500);
// },500);


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
  const elem = document.querySelector('.box');
  let pos = 0;

const id = setInterval(frame, 10);
function frame(){
  if  (pos === 300) {
    clearInterval();
  } else {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
  }
}
}

btn.addEventListener('click', myAnimation);