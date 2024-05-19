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
const ul = document.createElement("ul");
document.body.appendChild(ul);

for (let podcast of podcasts) {
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  h1.innerText = podcast.name;
  li.appendChild(h1);

  if (podcast.imageUrl) {
    const img = document.createElement("img");
    img.src = podcast.imageUrl;
    li.appendChild(img);
  }
  ul.appendChild(li);
}

document.querySelector("button").addEventListener("click", function (event) {
  // what does the event do?
  console.log(event);
  document.body.style.backgroundColor = "red";
});
