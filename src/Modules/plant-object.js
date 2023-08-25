import PlantRecomendation from "./plant-builder.js";
import { sheetBuilder } from "./info-sheet.js";
import { buildRecommendations } from "../config.js";

const formElements = document.getElementsByClassName("plants--form__answere");
const formulario = document.querySelector(".plants--form");

function createRecommendation(selectedIds, plantType, potType) {
  const recommendations = buildRecommendations();
  const recommendation =
    recommendations[plantType][selectedIds[2]][potType][selectedIds[4]];
  const newPlant = new PlantRecomendation({
    plant: recommendation.plant,
    soil: recommendation.soil,
    pot: recommendation.pot,
  });

  if (selectedIds[4] === "painted-decorated") {
    newPlant.addColor("blue");
  }
  for (let i = 5; i < selectedIds.length; i++) {
    if (selectedIds[i] === "moss-pole") {
      newPlant.addMoss();
    }
    if (selectedIds[i] === "pebbles") {
      newPlant.addPebbles();
    }
    if (selectedIds[i] === "mini-plants") {
      newPlant.addGreenies();
    }
  }

  return newPlant;
}

function formObject() {
  const selectedIds = [];

  if (formulario.checkValidity()) {
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.checked) {
        selectedIds.push(element.id);
      }
    }
    if (selectedIds.length >= 5) {
      const plantType = selectedIds[0];
      const potType = selectedIds[3] === "clay-pot" ? "clay-pot" : "other-pot";

      const newPlant = createRecommendation(selectedIds, plantType, potType);

      localStorage.setItem("plant-info", JSON.stringify(newPlant));
      sheetBuilder();
    }
  } else {
    alert(
      "Please, complete the required questions to show your recommendation",
    );
  }
}
export default formObject;
