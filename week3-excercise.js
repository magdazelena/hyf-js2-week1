function main() {
  //all my logic connected DOM
  const button1 = document.getElementById("button-1");

  button1.addEventListener("click", incrementCounter);

  const button2 = document.getElementById("button-2");

  //button2.addEventListener("click", incrementCounter);
  button2.addEventListener("click", () => logSomethingIn3sec(1000));
  //button2.addEventListener("click", keepIncrementing);
}
const delayTime = 50; // this is because something

function sendMessageToController() {
  console.log("hey there");
}
function logSomethingIn3sec(delay) {
  setTimeout(sendMessageToController, delay);
}

let interval;
function keepIncrementing() {
  interval = setInterval(incrementCounter, 1000);
}

let counter = 0;

function increment() {
  return (counter += 1);
}

console.log(increment());

function incrementCounter() {
  if (counter > 5) {
    if (interval) clearInterval(interval);
  }
  console.log(counter);
  //counter += 1;
  counter = counter + 1;
  //console.log(counter++);
}

document.addEventListener("DOMContentLoaded", main);

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;

// array.reduce(callback, initialValue);
// callback function inside reduce: (accumulator, currentValue, index?)
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

// [ {..., quality: 'bad'}, {..., quality: 'good'}]

// array.reduce(callback, {goodMovies: 0, badMovies: 0, avgMovies: 0})

//callback -> (acc, current) => { if(current.quality === 'bad') return {...acc, badMovies: acc.badMovies + 1 }}
