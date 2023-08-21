import sheetBuilder from "./modules/info-sheet.js";
sheetBuilder();

const plantInfo = JSON.parse(localStorage.getItem('plant-info'));

const pots = document.querySelectorAll('.plants--form input[name="pot"]');
pots.forEach(button => {
  if ((plantInfo.pot.split("-")).includes("clay")) {
    if (button.value == "clay") {
      button.checked = true;
    }
  } else {
    if (button.value == "ceramic") {
      button.checked = true;
    }
  }
})
const decoration = document.querySelectorAll('.plants--form input[name="decoration"]');
decoration.forEach(button => {
  if ((plantInfo.pot.split("-")).includes("decorated")) {
    button.checked = true;
  } else {
    button.checked = false;
  }
})

const color = document.querySelectorAll('.plants--form input[name="color"]');
color.forEach(button => {
  if ((plantInfo.pot.split("-")).includes("painted")) {
    button.checked = true;
    const colorBtn = document.querySelector('.color-options input[value="blue"]');
    colorBtn.checked = true;
  } else {
    button.checked = false;
  }
})

const plants = document.querySelector('.plants--form select[name="plant"]');
for (let i = 0; i < plants.options.length; i++) {
  if ((plants.options[i].value).includes(plantInfo.plant.split("-"))) {
    plants.options[i].selected = true;
  }  
}

const soil = document.querySelectorAll('.plants--form input[name="soil"]');
soil.forEach(button => {
  if ((button.value).includes(plantInfo.soil.split("-"))) {
    button.checked = true;
  } else {
    button.checked = false;
  }
})

if (plantInfo.greenies) {
  const greenies = document.querySelector('.plants--form input[value="mini plants"]');
  greenies.checked = true;
}
if (plantInfo.pebbles) {
  const pebbles = document.querySelector('.plants--form input[value="pebbles"]');
  pebbles.checked = true;
}
if (plantInfo.moss) {
  const moss = document.querySelector('.plants--form input[value="moss pole"]');
  moss.checked = true;
}
const subject = {
  observers: [],
  attach(observer) {
    this.observers.push(observer);
  },
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
};

const plantObserver = {
  update(data) {

  }
};

subject.attach(plantObserver);

function handleFormChange() {
  const formData = {

  };
  subject.notify(formData);
}