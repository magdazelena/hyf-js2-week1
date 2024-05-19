window.addEventListener("DOMContentLoaded", createFavouriteDishes);

function createFavouriteDishes() {
  const title = window.document.getElementsByTagName("title");
  console.log(title);
  const ul = document.querySelector("ul");
  console.log("query selector", ul);
  console.log("tag", document.getElementsByTagName("ul"));
  console.log("id", document.getElementById("dishes1"));
  console.log("class", document.getElementsByClassName("dishes"));

  const dishes = ["Pasta", "sushi", "dumplings", "burger", "kebab"];
  for (let dish of dishes) {
    console.log(dish);
    //const li = `<li>${dish}</li>`; // -- this creates a string
    // console.log(li);
    const li = document.createElement("li");
    li.innerText = dish;
    ul.appendChild(li);
  }
}
