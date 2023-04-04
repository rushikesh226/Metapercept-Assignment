fetch(`http://localhost:3001/data`)
  .then((res) => res.json())
  .then((data) => {
    displayData(data[0]);
  });

const displayData = (data) => {
  var cards = document.getElementById("cards");
  data.forEach((elem) => {
    console.log(elem);
    let card = document.createElement("div");

    const img = document.createElement("img");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEDQ62ge6yszQDCVqdR8YSTfh4ZSeiC_yZ8SiZ5JRCw&s";

    const mid = document.createElement("div");
    mid.setAttribute("id", "middle");
    const name = document.createElement("h4");
    name.innerText = elem.Name;

    const shortDesc = document.createElement("p");
    shortDesc.innerText = elem.ShortDesc;
    shortDesc.setAttribute("id", "shortDesc");
    const btnDiv=document.createElement("div");
    const btn = document.createElement("button");
    btn.innerText = "View";
    btn.setAttribute("class", "viewBtn");
    btnDiv.append(btn);
    mid.append(name, shortDesc, btnDiv);

    card.append(img, mid);
    cards.append(card);
  });
};
