// function createCard() {
//   const card = document.createElement("div");
// }
// function createElements(parent, elType, myClass) {
//   const element = document.createElement(elType);
//   element.classList.add(myClass);
//   parent.appendChild(element);
//   return element;
// }
// // design and implement the layout of the movie card via DOM manipulation{}

// const main = document.body;
// const cardElement = createElements(main, "div", "card");
// function showMovieCard() {
//   console.log(cardElement);
// }
// console.log(cardElement);
// showMovieCard();
// // function ssomething() {
// //   console.log(card);
// // }

// // ssomething();

// const form = document.getElementById("form");
// const field = document.getElementById("field");
// const description = document.getElementById("description");

// form.querySelector(".field").innerHTML = "Title";
// -----------------

function myFunction(argument) {
  //function
  console.log(argument);
}

myFunction("hello");

const myFunctionArrow = (argument) => console.log(argument);

myFunctionArrow("hello arrow");

const add = (a, b) => a + b;
//console.log(add1(2, 3));
console.log(addF(2, 3));
const add1 = (a, b) => {
  //something else happens
  return a + b;
};

console.log(add(1, 2));

function addF(a, b) {
  return a + b;
}
console.log(addF(1, 2));

// for (let i = 0; i < Array.length; i++) {

// }

// for (const i in array) {

// }

const fruits = ["apple", "banana", "pear"];

fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

fruits.forEach((veggie) => console.log(veggie));

fruits.forEach((fruit, ind, index) => console.log(index));

const array1 = [1, 4, 9, 16];
array1.forEach((x) => x * 2);
console.log(array1); //doesn't work

const array2 = array1.map((x) => x * 2);
console.log(array2);

const array3 = array1.map((x, i) => x + i);
console.log(array3);

const fruitsElements = fruits.map((fruit) => {
  const p = document.createElement("p");
  p.innerText = fruit;
  return p;
});
console.log(fruitsElements);
fruitsElements.forEach((el) => console.log(typeof el));

fruitsElements.forEach((el) => document.body.appendChild(el));

fruits.forEach((fruit) => {
  const p = document.createElement("p");
  p.innerText = fruit;
  document.body.appendChild(p);
});

const toRemove = "pear";
const modified = fruits.filter((fruit) => fruit != toRemove);
console.log(modified);
