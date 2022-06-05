//           <div class="col">
//             <div class="card">
//               <img src="https://eloquentjavascript.net/img/cover.jpg" alt="Eloquent JavaScript, Second Edition"
//                 class="image">
//               <h2>Eloquent JavaScript, Second Edition</h2>
//               <h4 class="author">Author: Marijn Haverbeke</h4><button class="button">Buy Now</button>
//             </div>
//           </div>
//         </div>

let row = document.querySelector(".row");
books.forEach((book) => {
  let col = document.createElement("div");
  col.classList.add("col");
  let img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;
  img.classList.add("image");
  let h2 = document.createElement("h2");
  h2.innerText = book.title;
  let h4 = document.createElement("h4");
  h4.classList.add("author");
  h4.innerText = `Author: ` + book.author;
  let btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerText = "Buy Now";
  let card = document.createElement("div");
  card.classList.add("card");
  col.append(card);
  card.append(img, h2, h4, btn);
  row.append(col);
});
