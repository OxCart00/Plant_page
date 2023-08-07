function sheetBuilder() {
  const plantInfo = JSON.parse(localStorage.getItem('plant-info'));
  const sheetContainer = document.querySelector('.info-sheet--container');

  sheetContainer.innerHTML = '';
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = plantInfo.plant;
  sheetContainer.appendChild(titleElement);

  const imageContainer = document.createElement('div');
  imageContainer.id = 'imageContainer';

  const potImg = document.createElement('img');
  if (plantInfo.pot === 'simple-ceramic-too') {
  potImg.src = './assets/images/simple-ceramic-pot.png';
  }else{
    potImg.src = `./assets/images/${plantInfo.pot}.png`;
  }
  imageContainer.appendChild(potImg);

  const soilImg = document.createElement('img');
  soilImg.src = `./assets/images/soil-${plantInfo.soil}.png`;
  imageContainer.appendChild(soilImg);

  const plantImg = document.createElement('img');
  plantImg.src = `./assets/images/plant-${plantInfo.plant}.png`;
  imageContainer.appendChild(plantImg);

  sheetContainer.appendChild(imageContainer);

  const detailsElement = document.createElement('div');

  const nameElement = document.createElement('p');
  nameElement.textContent = `Name: ${plantInfo.plant}`;
  detailsElement.appendChild(nameElement);

  const soilElement = document.createElement('p');
  soilElement.textContent = `Soil: ${plantInfo.soil}`;
  detailsElement.appendChild(soilElement);

  const potElement = document.createElement('p');
  potElement.textContent = `Pot: ${plantInfo.pot}`;
  detailsElement.appendChild(potElement);

  sheetContainer.appendChild(detailsElement);
}

export default sheetBuilder;