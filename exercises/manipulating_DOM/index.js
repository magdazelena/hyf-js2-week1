const ul1 = document.getElementsByTagName("ul");

const ul2 = document.getElementById("dishes-list");

const ul3 = document.querySelector("ul");

const ul4 = document.querySelectorAll("ul");

console.log("ul1", ul1);
console.log("ul2", ul2);
console.log("ul3", ul3);
console.log("ul4", ul4);

const dishes = ["pizza", "pierogi", "pasta", "rice"];
for (let i = 0; i < dishes.length; i++) {
  //console.log(dishes[i]);
  const li = document.createElement("li");
  //console.log(li);
  //<li></li>
  li.innerText = dishes[i];
  //console.log(li);
  //<li>pizza(...)</li>
  ul2.appendChild(li);
}
