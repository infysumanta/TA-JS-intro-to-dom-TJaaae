let ul = document.querySelector("ul");
let allPeople = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);
allPeople.forEach((peoples) => {
  let li = document.createElement("li");
  li.classList.add("box");
  let div = document.createElement("div");
  div.classList.add("flex");
  div.classList.add("justify");
  let img = document.createElement("img");
  img.src = peoples.image;
  img.alt = peoples.name;
  let h2 = document.createElement("h2");
  h2.innerText = peoples.name;
  div.append(img, h2);
  let p = document.createElement("p");
  p.innerText = peoples.description;
  let button = document.createElement("button");
  let a = document.createElement("a");
  a.innerText = "Learn More!";
  a.href = peoples.wikiLink;
  button.append(a);
  li.append(div, p, button);
  ul.append(li);
});
