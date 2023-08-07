import formObject from "./Modules/plant-object";
// Obtener el botón "Get" por su ID
const getButton = document.querySelector(".get--button");
// Obtener todos los elementos de formulario por su clase


// Agregar un evento de clic al botón "Get"
getButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el envío del formulario
formObject();
});