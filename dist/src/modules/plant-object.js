import PlantRecomendation from "./plant-builder";
import sheetBuilder from "./info-sheet";
import { recommendationsMap } from "../config.js";

const formElements = document.getElementsByClassName("plants--form__answere");
// Obtener el formulario y los campos requeridos
const formulario = document.querySelector(".plants--form");

function createRecommendation(selectedIds, plantType, potType) {
  const recommendation =
    recommendationsMap[plantType][selectedIds[2]][potType][selectedIds[4]];
  const newPlant = new PlantRecomendation({
    plant: recommendation,
    soil: selectedIds[1],
    pot: `${potType}-${selectedIds[3]}`,
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

export function formObject() {
  // Crear un array para almacenar los IDs de los elementos seleccionados
  const selectedIds = [];

  // Si todos los campos están llenos, enviar el formulario
  if (formulario.checkValidity()) {
    // Recorrer los elementos de formulario para verificar cuáles están seleccionados
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.checked) {
        selectedIds.push(element.id);
      }
    }
    if (selectedIds.length >= 5) {
      const plantType = selectedIds[0];
      const potType = selectedIds[3] === "clay-pot" ? "clay" : "other-pot";
      const newPlant = createRecommendation(selectedIds, plantType, potType);

      localStorage.setItem("plant-info", JSON.stringify(newPlant));
      sheetBuilder();
    }
  } else {
    // Si no están completados, mostrar un mensaje de error
    alert(
      "Please, complete the required questions to show your recommendation",
    );
  }
}
