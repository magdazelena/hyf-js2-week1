function main() {
  //all my logic connected DOM
  const button1 = document.getElementById("button-1");

  button1.addEventListener("click", incrementCounter);

  const button2 = document.getElementById("button-2");

  button2.addEventListener("click", incrementCounter);
  button2.addEventListener("click", logSomethingIn3sec);
}

function logSomethingIn3sec() {
  setTimeout(function () {
    console.log("hello there");
  }, 3000);
}

let counter = 0;
function incrementCounter() {
  console.log(counter);
  //counter += 1;
  counter = counter + 1;
  //console.log(counter++);
}

document.addEventListener("DOMContentLoaded", main);
