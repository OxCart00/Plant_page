import PlantRecomendation from "./Modules/plant-builder";

// Obtener el botón "Get" por su ID
const getButton = document.querySelector(".get--button");


// Agregar un evento de clic al botón "Get"
getButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener todos los elementos de formulario por su clase
  const formElements = document.getElementsByClassName("plants--form__answere");

  // Crear un array para almacenar los IDs de los elementos seleccionados
  const selectedIds = [];

  // Recorrer los elementos de formulario para verificar cuáles están seleccionados
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.checked) {
      selectedIds.push(element.id);
    }
  }
  if (selectedIds.length != 0) {
    let newPlant = new PlantRecomendation({ location: selectedIds[0], soil: selectedIds[1], toxicity: selectedIds[2], pot: selectedIds[3], style: selectedIds[4] });
    // Aquí puedes realizar cualquier acción que desees con los IDs de los elementos seleccionados
    console.log("IDs de elementos seleccionados:", newPlant);
  }

});






