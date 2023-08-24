import formObject from "./plant-object.js";

function initForm() {
  const getButton = document.querySelector(".get--button");
  const clearButton = document.querySelector(".clear--button");
  const sheetContainer = document.querySelector(".info-sheet--container");
  const formulario = document.querySelector(".plants--form");

  // Agregar un evento de clic al botón "Get"
  getButton.addEventListener("click", function (event) {
    event.preventDefault();
    formObject();
  });

  // Agregar un evento de clic al botón "Clear"
  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    sheetContainer.style.backgroundColor = "white";
    sheetContainer.innerHTML = "";
    formulario.reset();
  });
}
export default initForm;
