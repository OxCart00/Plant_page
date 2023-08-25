export function sheetBuilder() {
  const plantInfo = JSON.parse(localStorage.getItem("plant-info"));
  const sheetContainer = document.querySelector(".info-sheet--container");
  const rgtBlock = document.querySelector(".right--block");
  const detailsElement = document.createElement("div");

  sheetContainer.style.backgroundColor = "#7f03fc";
  sheetContainer.innerHTML = "";

  const titleElement = document.createElement("h2");
  titleElement.textContent = plantInfo.plant;
  sheetContainer.appendChild(titleElement);

  const imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";

  let potImg = document.createElement("img");
  if (plantInfo.pot === "simple-ceramic-too") {
    potImg.src = "images/simple-ceramic-pot.png";
  } else if (plantInfo.pot === "simple-decorated-ceramic-too") {
    potImg.src = "../images/simple-decorated-ceramic-pot.png";
  } else if (plantInfo.pot === "painted-decorated-ceramic-too") {
    potImg.src = "../images/blue-painted-decorated-ceramic-pot.png";
  } else {
    if (plantInfo.color) {
      potImg.src = `../images/${plantInfo.color}-${plantInfo.pot}.png`;
    } else {
      potImg.src = `../images/${plantInfo.pot}.png`;
    }
  }
  imageContainer.appendChild(potImg);

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${plantInfo.plant}`;
  detailsElement.appendChild(nameElement);

  const soilElement = document.createElement("p");
  soilElement.textContent = `Soil: ${plantInfo.soil}`;
  detailsElement.appendChild(soilElement);

  const potElement = document.createElement("p");
  potElement.textContent = `Pot: ${plantInfo.pot}`;
  detailsElement.appendChild(potElement);

  if (plantInfo.color) {
    const colorElement = document.createElement("p");
    colorElement.textContent = `Color: ${plantInfo.color}`;
    detailsElement.appendChild(colorElement);
  }

  if (plantInfo.greenies || plantInfo.moss || plantInfo.pebbles) {
    const extraElement = document.createElement("p");
    extraElement.textContent = `Extras: `;
    if (plantInfo.greenies) {
      extraElement.textContent += `${plantInfo.greenies} `;
      const greeniesImg = document.createElement("img");
      greeniesImg.src = `images/${plantInfo.greenies}.png`;
      imageContainer.appendChild(greeniesImg);
    }
    if (plantInfo.pebbles) {
      extraElement.textContent += `${plantInfo.pebbles} `;
      const pebblesImg = document.createElement("img");
      pebblesImg.src = `images/${plantInfo.pebbles}.png`;
      imageContainer.appendChild(pebblesImg);
    }
    if (plantInfo.moss) {
      extraElement.textContent += `${plantInfo.moss} `;
      const mossImg = document.createElement("img");
      mossImg.src = `images/${plantInfo.moss}.png`;
      imageContainer.appendChild(mossImg);
    }
    detailsElement.appendChild(extraElement);
  }

  const soilImg = document.createElement("img");
  soilImg.src = `images/soil-${plantInfo.soil}.png`;
  imageContainer.appendChild(soilImg);

  const plantImg = document.createElement("img");
  plantImg.src = `images/plant-${plantInfo.plant}.png`;
  imageContainer.appendChild(plantImg);

  sheetContainer.appendChild(imageContainer);
  sheetContainer.appendChild(detailsElement);

  const temp = document.getElementById("customize--button");

  const customizeBtn = document.createElement("a");
  customizeBtn.textContent = "Customize!";
  customizeBtn.id = "customize--button";
  customizeBtn.href = "../pages/customize.html";
  if (!temp) {
    rgtBlock.appendChild(customizeBtn);
  }
}
export function stockBuilder() {
  const plantInfo = JSON.parse(localStorage.getItem("plant-info"));
  const sheetContainer = document.querySelector(".info-sheet--container");
  const rgtBlock = document.querySelector(".right--block");
  const detailsElement = document.createElement("div");

  const itemTitle = document.querySelector(".item--title");
  itemTitle.textContent = `${plantInfo.plant} plant with ${plantInfo.pot} pot and ${plantInfo.soil} soil`;

  sheetContainer.style.backgroundColor = "#7f03fc";
  sheetContainer.innerHTML = "";

  const titleElement = document.createElement("h2");
  titleElement.textContent = plantInfo.plant;
  sheetContainer.appendChild(titleElement);

  const imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";

  let potImg = document.createElement("img");
  if (plantInfo.pot === "simple-ceramic-too") {
    potImg.src = "images/simple-ceramic-pot.png";
  } else if (plantInfo.pot === "simple-decorated-ceramic-too") {
    potImg.src = "images/simple-decorated-ceramic-pot.png";
  } else if (plantInfo.pot === "painted-decorated-ceramic-too") {
    potImg.src = "images/blue-painted-decorated-ceramic-pot.png";
  } else {
    if (plantInfo.color) {
      potImg.src = `images/${plantInfo.color}-${plantInfo.pot}.png`;
    } else {
      potImg.src = `images/${plantInfo.pot}.png`;
    }
  }
  imageContainer.appendChild(potImg);

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${plantInfo.plant}`;
  detailsElement.appendChild(nameElement);

  const soilElement = document.createElement("p");
  soilElement.textContent = `Soil: ${plantInfo.soil}`;
  detailsElement.appendChild(soilElement);

  const potElement = document.createElement("p");
  potElement.textContent = `Pot: ${plantInfo.pot}`;
  detailsElement.appendChild(potElement);

  if (plantInfo.color) {
    const colorElement = document.createElement("p");
    colorElement.textContent = `Color: ${plantInfo.color}`;
    detailsElement.appendChild(colorElement);
  }

  if (plantInfo.greenies || plantInfo.moss || plantInfo.pebbles) {
    const extraElement = document.createElement("p");
    extraElement.textContent = `Extras: `;
    if (plantInfo.greenies) {
      extraElement.textContent += `${plantInfo.greenies} `;
      const greeniesImg = document.createElement("img");
      greeniesImg.src = `images/${plantInfo.greenies}.png`;
      imageContainer.appendChild(greeniesImg);
    }
    if (plantInfo.pebbles) {
      extraElement.textContent += `${plantInfo.pebbles} `;
      const pebblesImg = document.createElement("img");
      pebblesImg.src = `images/${plantInfo.pebbles}.png`;
      imageContainer.appendChild(pebblesImg);
    }
    if (plantInfo.moss) {
      extraElement.textContent += `${plantInfo.moss} `;
      const mossImg = document.createElement("img");
      mossImg.src = `images/${plantInfo.moss}.png`;
      imageContainer.appendChild(mossImg);
    }
    detailsElement.appendChild(extraElement);
  }

  const soilImg = document.createElement("img");
  soilImg.src = `images/soil-${plantInfo.soil}.png`;
  imageContainer.appendChild(soilImg);

  const plantImg = document.createElement("img");
  plantImg.src = `images/plant-${plantInfo.plant}.png`;
  imageContainer.appendChild(plantImg);

  sheetContainer.appendChild(imageContainer);
  sheetContainer.appendChild(detailsElement);
  const temp = document.getElementById("customize--button");

  const customizeBtn = document.createElement("a");
  customizeBtn.textContent = "Go back to customize!";
  customizeBtn.id = "customize--button";
  customizeBtn.href = "../pages/customize.html";
  if (!temp) {
    rgtBlock.appendChild(customizeBtn);
  }
}
