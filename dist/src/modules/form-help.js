import { handleFormChange } from "./form-handler.js";

const plantInfo = JSON.parse(localStorage.getItem("plant-info"));
const pots = document.querySelectorAll('.plants--form input[name="pot"]');
const decoration = document.querySelectorAll(
  '.plants--form input[name="decoration"]',
);
const color = document.querySelectorAll('.plants--form input[name="color"]');
const plants = document.querySelector('.plants--form select[name="plant"]');
const soil = document.querySelectorAll('.plants--form input[name="soil"]');
const potType = plantInfo.pot.split("-")[1];
const isClayPot = potType === "clay";
const isDecoratedPot = plantInfo.pot.includes("decorated");
const isPaintedPot = plantInfo.pot.includes("painted");

const setRadioButton = (elements, valueToCheck) => {
  elements.forEach((button) => {
    button.checked = button.value === valueToCheck;
  });
};

export function customFormInit() {
  setRadioButton(pots, isClayPot ? "clay" : "ceramic");
  setRadioButton(decoration, isDecoratedPot ? "decorated" : "");
  setRadioButton(color, isPaintedPot ? "painted" : "");

  for (let i = 0; i < plants.options.length; i++) {
    const plantValue = plants.options[i].value;
    if (plantInfo.plant.includes(plantValue)) {
      plants.options[i].selected = true;
    }
  }

  setRadioButton(soil, plantInfo.soil);

  if (plantInfo.greenies) {
    const greenies = document.querySelector(
      '.plants--form input[value="mini-plants"]',
    );
    greenies.checked = true;
  }
  if (plantInfo.pebbles) {
    const pebbles = document.querySelector(
      '.plants--form input[value="pebbles"]',
    );
    pebbles.checked = true;
  }
  if (plantInfo.moss) {
    const moss = document.querySelector(
      '.plants--form input[value="moss-pole"]',
    );
    moss.checked = true;
  }
  const formElements = document.querySelectorAll(
    ".plants--form input, .plants--form select",
  );
  formElements.forEach((element) => {
    element.addEventListener("change", handleFormChange);
  });
}
