import PlantRecomendation from "./plant-builder";
import sheetBuilder from "./info-sheet";

const formElements = document.getElementsByClassName("plants--form__answere");
// Obtener el formulario y los campos requeridos
const formulario = document.querySelector('.plants--form');

function formObject() {
    // Crear un array para almacenar los IDs de los elementos seleccionados
    const selectedIds = [];

    // Si todos los campos están llenos, enviar el formulario
    if (formulario.checkValidity()) {
      let newPlant;
      // Recorrer los elementos de formulario para verificar cuáles están seleccionados
      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.checked) {
          selectedIds.push(element.id);
        }
      }
      if (selectedIds.length >= 5) {
        if (selectedIds[0] === 'low-light-plant') {
          if (selectedIds[2] === 'toxic-plant') {
            if (selectedIds[3] === 'clay-pot') {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-clay-pot' });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
              } else {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              }
            } else {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'sansevieria', soil: selectedIds[1], pot: `simple-${selectedIds[3]}` });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'sansevieria', soil: selectedIds[1], pot: `simple-decorated-${selectedIds[3]}` });
              } else {
                newPlant = new PlantRecomendation({ plant: 'sansevieria', soil: selectedIds[1], pot: `painted-decorated-${selectedIds[3]}` });
              }
            }
          } else {
            if (selectedIds[3] === 'clay-pot') {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'boston-fern', soil: 'drainage', pot: 'simple-clay-pot' });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'boston-fern', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
              } else {
                newPlant = new PlantRecomendation({ plant: 'boston-fern', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              }
            } else {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'boston-fern', soil: selectedIds[1], pot: `simple-${selectedIds[3]}` });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'boston-fern', soil: selectedIds[1], pot: `simple-decorated-${selectedIds[3]}` });
              } else {
                newPlant = new PlantRecomendation({ plant: 'boston-fern', soil: selectedIds[1], pot: `painted-decorated-${selectedIds[3]}` });
              }
            }
          }
        }
        else if (selectedIds[0] === 'medium-light-plant') {
          if (selectedIds[2] === 'toxic-plant') {
            if (selectedIds[3] === 'clay-pot') {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-clay-pot' });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
              } else {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              }
            } else {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'aglaonema', soil: selectedIds[1], pot: `simple-${selectedIds[3]}` });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'aglaonema', soil: selectedIds[1], pot: `simple-decorated-${selectedIds[3]}` });
              } else {
                newPlant = new PlantRecomendation({ plant: 'aglaonema', soil: selectedIds[1], pot: `painted-decorated-${selectedIds[3]}` });
              }
            }
          } else {
            if (selectedIds[3] === 'clay-pot') {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-clay-pot' });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
              } else {
                newPlant = new PlantRecomendation({ plant: 'peace-lily', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              }
            } else {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'monstera', soil: selectedIds[1], pot: `simple-${selectedIds[3]}` });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'monstera', soil: selectedIds[1], pot: `simple-decorated-${selectedIds[3]}` });
              } else {
                newPlant = new PlantRecomendation({ plant: 'monstera', soil: selectedIds[1], pot: `painted-decorated-${selectedIds[3]}` });
              }
            }
          }
        }
        else {
          if (selectedIds[2] === 'toxic-plant') {
            if (selectedIds[3] === 'clay-pot') {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'aloe-vera', soil: 'drainage', pot: 'simple-clay-pot' });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'aloe-vera', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
              } else {
                newPlant = new PlantRecomendation({ plant: 'aloe-vera', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              }
            } else {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'aloe-vera', soil: selectedIds[1], pot: `simple-${selectedIds[3]}` });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'aloe-vera', soil: selectedIds[1], pot: `simple-decorated-${selectedIds[3]}` });
              } else {
                newPlant = new PlantRecomendation({ plant: 'aloe-vera', soil: selectedIds[1], pot: `painted-decorated-${selectedIds[3]}` });
              }
            }
          } else {
            if (selectedIds[3] === 'clay-pot') {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'cactus', soil: 'drainage', pot: 'simple-clay-pot' });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'cactus', soil: 'drainage', pot: 'simple-decorated-clay-pot' });
              } else {
                newPlant = new PlantRecomendation({ plant: 'cactus', soil: 'drainage', pot: 'painted-decorated-clay-pot' });
              }
            } else {
              if (selectedIds[4] === 'simple') {
                newPlant = new PlantRecomendation({ plant: 'cactus', soil: selectedIds[1], pot: `simple-${selectedIds[3]}` });
              } else if (selectedIds[4] === 'simple-decorated') {
                newPlant = new PlantRecomendation({ plant: 'cactus', soil: selectedIds[1], pot: `simple-decorated-${selectedIds[3]}` });
              } else {
                newPlant = new PlantRecomendation({ plant: 'cactus', soil: selectedIds[1], pot: `painted-decorated-${selectedIds[3]}` });
              }
            }
          }
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
        // Aquí puedes realizar cualquier acción que desees con los IDs de los elementos seleccionados
        console.log("Plant Recomendation:", newPlant);
        console.log("IDs de elementos seleccionados:", selectedIds);
        sheetBuilder();
        localStorage.setItem("plant-info", JSON.stringify(newPlant));
      } 
      }else {
        // Si no están completados, mostrar un mensaje de error
        alert('Please, complete the required questions to show your recommendation');
    }
}
export default formObject;