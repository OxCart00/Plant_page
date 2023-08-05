function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

function sheetBuilder() {
  const plantInfo = JSON.parse(localStorage.getItem("plant-info"));
  const sheetContainer = document.querySelector(".info-sheet--container");
  sheetContainer.innerHTML = ``;
  // Create and insert the title element
  const titleElement = document.createElement("h2");
  titleElement.textContent = plantInfo.plant;
  sheetContainer.appendChild(titleElement);

  // Create and insert the container div for the images
  const imageContainer = document.createElement("div");
  imageContainer.id = "imageContainer";

  // Create and insert individual image elements (you can loop through an array of image URLs)
  const potImg = document.createElement("img");
  if (plantInfo.pot === "simple-ceramic-too") {
    for (let i = 0; i < images.length; i++) {
      if (images[i].includes('simple-ceramic-pot.png')) {
        potImg.src = images[i];
        break; // Detiene el bucle una vez que encuentra la imagen
      }
    }
  } else {
    potImg.src = `../images/${plantInfo.pot}.png`;
  }
  imageContainer.appendChild(potImg);

  const soilImg = document.createElement("img");
  soilImg.src = `../images/soil-${plantInfo.soil}.png`;
  imageContainer.appendChild(soilImg);

  const plantImg = document.createElement("img");
  plantImg.src = `images/plant-${plantInfo.plant}.png`;
  imageContainer.appendChild(plantImg);

  sheetContainer.appendChild(imageContainer);

  // Create and insert the recommendation details
  const detailsElement = document.createElement("div");

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${plantInfo.plant}`;
  detailsElement.appendChild(nameElement);

  const soilElement = document.createElement("p");
  soilElement.textContent = `Soil: ${plantInfo.soil}`;
  detailsElement.appendChild(soilElement);

  const potElement = document.createElement("p");
  potElement.textContent = `Pot: ${plantInfo.pot}`;
  detailsElement.appendChild(potElement);

  // const colorElement = document.createElement('p');
  // colorElement.textContent = `Color: ${recommendation.pot.color}`;
  // detailsElement.appendChild(colorElement);

  // const extrasElement = document.createElement('p');
  // extrasElement.textContent = `Extras: ${recommendation.extras.join(', ')}`;
  // detailsElement.appendChild(extrasElement);

  sheetContainer.appendChild(detailsElement);
}

export default sheetBuilder;
