// homeworks:
// 1. callback function declaration -> scope of today's class
// const button = new HTMLElement();

// button.addEventListener("click", function () {
//   something();
// }); //wrong

// button.addEventListener("click", something);

// button.addEventListener("click", function () {
//   console.log("something else");
// });
// button.addEventListener("click", function () {
//   something();
//   console.log("something else");
// });

// function something() {
//   console.log("do something");
// }
// 2. DRY // Don't Repeat Yourself
// function createButtonAndNameIt() {
//     //do all the copied logic inside
// }
// 3. const/let

// for(let i = 0; i < array.length;i++) {
//     ///
//     let item = array[i];

//     //something happens
//     item = 'something else';
// }

// for( const i in array) {

// }

// const string1 = 'xx'
// string1 = 'something else';

// 4. ChatGPT

// arrow function vs function
function someLogic() {
  console.log("here i am");
  someLogicArrow();
}

//someLogicArrow();

const someLogicArrow = () => {
  console.log("so am I");
  yetAnother();
};

const yetAnother = () => {
  console.log("something");
};
someLogic();

// anonymous functions

//named function:
function someLogic() {
  console.log("named");
}
someLogic();

(function () {
  console.log("anonymous");
})();

(function () {
  console.log("anonymous");
})();

// button.addEventListener("click", someLogic);

// button.addEventListener("click", function () {
//   console.log("something");
// });

// button.addEventListener("click", () => {
//   console.log("something");
// });
console.log("-------------");
const fruits = ["apple", "pear", "peach", "banana"];

// foreach
// when you want to call a function on every element of the array, BUT not returning anything or not manipulating the array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("for each: ");

fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit, i) => console.log(fruit, i));

fruits.forEach((fruit, i) => {
  console.log(fruit, i);
  const name = fruit + i;
  console.log(name);
});

// map
//map calls a function on every item of an array and returns a value
//output of map will be another array with modified values according to the passed function

// {
//     name: //fruit name,
//     index: //i
// }

//return an object for each string in the fruits array
const objectFruits = fruits.map((fruit, i) => {
  return {
    name: fruit,
    index: i,
  };
});
const objectFruitsShort = fruits.map((fruit, i) => ({
  name: fruit,
  index: i,
}));
console.log(objectFruits);
console.log(objectFruitsShort);

// fruits.forEach((fruit, i) => {
//   return {
//     name: fruit,
//     index: i,
//   };
// });
// console.log(fruits);

const array1 = [1, 4, 9, 16];

// returned a new array of modified numbers
const map1 = array1.map((x) => x * 2);
console.log(array1, map1);
// const array2 = array1.forEach((x) => x * 2);
// console.log(array2);

// filter
// filter returns a copy of input array with values matching the condition of the callback function
const numbers = [0, 1, 2, 3, 4, 5];
const numbersBiggerThan3 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3) numbersBiggerThan3.push(numbers[i]);
}
console.log(numbersBiggerThan3);

const numbersBiggerThan3F = numbers.filter((number) => number > 3);
console.log(numbersBiggerThan3F);
const numbersLessThan2 = numbers.filter((number) => number < 2);
console.log(numbersLessThan2);

const numbersHalf = numbers.filter((number, i) => i < numbers.length / 2);
console.log(numbersHalf);
