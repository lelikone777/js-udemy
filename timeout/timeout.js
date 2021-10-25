const timerId = setTimeout(logger, 2000, "Hello123");
clearInterval(timerId);
function logger() {
  console.log("text");
}
