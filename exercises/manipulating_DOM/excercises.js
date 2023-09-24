const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const ul = document.getElementsByTagName("ul")[1];

for (let i = 0; i < podcasts.length; i++) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");

  h1.innerHTML = podcasts[i].name; //name of each podcast object
  li.appendChild(h1);

  const imageUrl = podcasts[i].imageUrl;
  //difference between null and undefined is important!
  if (imageUrl) {
    // //if has value = truthy, no value = falsy
    // const image = document.createElement("img");
    // image.setAttribute("src", imageUrl);
    // //image.src = imageUrl;
    // li.appendChild(image);
    createImageAndAppend(imageUrl, li);
  }

  ul.appendChild(li); //to ul we add li on each iteration of the loop
}

function createImageAndAppend(imageUrlParameter, elementToAppendImgTo) {
  const image = document.createElement("img");
  image.setAttribute("src", imageUrlParameter); //imageUrl comes from the parameter!!!
  //image.src = imageUrl;
  elementToAppendImgTo.appendChild(image);
}
const button = document.getElementById("toggle");

button.addEventListener("click", toggleDarkMode);

function toggleDarkMode(event) {
  if (document.body.style.backgroundColor === "black") {
    //make it white
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
