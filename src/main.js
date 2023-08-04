import PlantRecomendation from "./Modules/plant-builder";

// Obtener el botón "Get" por su ID
const getButton = document.querySelector(".get--button");

// Obtener todos los elementos de formulario por su clase
const formElements = document.getElementsByClassName("plants--form__answere");

// Obtener el formulario y los campos requeridos
const formulario = document.querySelector('.plants--form');

// Agregar un evento de clic al botón "Get"
getButton.addEventListener("click", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

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
      let newPlant = new PlantRecomendation({ location: selectedIds[0], soil: selectedIds[1], toxicity: selectedIds[2], pot: selectedIds[3], style: selectedIds[4] });
      if (selectedIds.length > 5) {
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
      }
      // Aquí puedes realizar cualquier acción que desees con los IDs de los elementos seleccionados
      console.log("Plant Recomendation:", newPlant);
      console.log("IDs de elementos seleccionados:", selectedIds);
    }
  } else {
    // Si no están completados, mostrar un mensaje de error
    alert('Por favor, completa todos los campos obligatorios.');
  }
});






