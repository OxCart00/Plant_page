import { fetchPlantInfo } from "./API.js";

export function buildAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      content.classList.toggle("active");
    });
  });
}
function checkStockMiddleware(objectInfos) {
  const zeroStockFound = objectInfos.some(
    (objectInfo) => objectInfo && objectInfo.stock === 0,
  );
  if (zeroStockFound) {
    console.log(
      "Se encontró un objeto con stock igual a 0. Cancelando la ejecución.",
    );
    const priceAccordion = document.querySelector(".price");
    const descriptionAccordion = document.querySelector(".description");
    const tipssAccordion = document.querySelector(".tips");
    priceAccordion.style.display = "none";
    descriptionAccordion.style.display = "none";
    tipssAccordion.style.display = "none";

    const ofsMessage = document.querySelector(".productInfo--container");
    ofsMessage.innerHTML = ``;
    ofsMessage.textContent =
      "One of the items you ordered is out of stock. Please check the Inventory Alerts";
    ofsMessage.style.backgroundColor = "red";
    throw new Error("Stock igual a 0 encontrado");
  }
}
export async function getObjectInformation() {
  const plantInfo = JSON.parse(localStorage.getItem("plant-info"));
  let potId = "";
  if (plantInfo.pot.split("-").includes("ceramic")) {
    if (plantInfo.pot.split("-").includes("decorated")) {
      if (plantInfo.pot.split("-").includes("painted")) {
        potId = `ceramic-decorated-${plantInfo.color}`;
      } else {
        potId = "ceramic-decorated-unpainted";
      }
    } else {
      if (plantInfo.pot.split("-").includes("painted")) {
        potId = `ceramic-simple-${plantInfo.color}`;
      } else {
        potId = "ceramic-simple-unpainted";
      }
    }
  } else {
    if (plantInfo.pot.split("-").includes("decorated")) {
      if (plantInfo.pot.split("-").includes("painted")) {
        potId = `clay-decorated-${plantInfo.color}`;
      } else {
        potId = "clay-decorated-unpainted";
      }
    } else {
      if (plantInfo.pot.split("-").includes("painted")) {
        potId = `clay-simple-${plantInfo.color}`;
      } else {
        potId = "clay-simple-unpainted";
      }
    }
  }
  const objectPromises = [
    fetchPlantInfo("plant", plantInfo.plant),
    fetchPlantInfo("pot", potId),
    fetchPlantInfo("soil", plantInfo.soil),
  ];

  try {
    const objectsInfo = await Promise.all(objectPromises);
    const inventAccordion = document.querySelector(
      ".inventory .accordion-content",
    );
    for (let i = 0; i < objectsInfo.length; i++) {
      if (objectsInfo[i].stock <= 10 && objectsInfo[i].stock != 0) {
        if (i === 0) {
          const alert = document.createElement("div");
          alert.textContent = `${plantInfo.plant} plant: Only ${objectsInfo[i].stock} items left on stock`;
          alert.style.backgroundColor = "yellow";
          inventAccordion.appendChild(alert);
        }
        if (i === 1) {
          const alert = document.createElement("div");
          alert.textContent = `${potId} pot: Only ${objectsInfo[i].stock} items left on stock`;
          alert.style.backgroundColor = "yellow";
          inventAccordion.appendChild(alert);
        }
        if (i === 2) {
          const alert = document.createElement("div");
          alert.textContent = `${plantInfo.soil} soil: Only ${objectsInfo[i].stock} items left on stock`;
          alert.style.backgroundColor = "yellow";
          inventAccordion.appendChild(alert);
        }
      }
      if (objectsInfo[i].stock === 0) {
        if (i === 0) {
          const alert = document.createElement("div");
          alert.textContent = `${plantInfo.plant} plant is out of stock, please select a different Plant`;
          alert.style.backgroundColor = "red";
          inventAccordion.appendChild(alert);
        }
        if (i === 1) {
          const alert = document.createElement("div");
          alert.textContent = `${potId} pot is out of stock, please select a different Pot`;
          alert.style.backgroundColor = "red";
          inventAccordion.appendChild(alert);
        }
        if (i === 2) {
          const alert = document.createElement("div");
          alert.textContent = `${plantInfo.soil} soil is out of stock, please select a different Soil`;
          alert.style.backgroundColor = "red";
          inventAccordion.appendChild(alert);
        }
      }
    }
    checkStockMiddleware(objectsInfo);
    const infoAccordion = document.querySelector(
      ".description .accordion-content",
    );
    const tipsAccordion = document.querySelector(".tips .accordion-content");
    let descriptionUrl = "";
    if (plantInfo.plant == "peace-lily") {
      descriptionUrl = `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/peaceLily`;
    } else {
      descriptionUrl = `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${plantInfo.plant}`;
    }

    fetch(descriptionUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de la respuesta:", data);
        const description = document.createElement("p");
        description.textContent = data.description;
        infoAccordion.appendChild(description);
        const humi = document.createElement("p");
        humi.textContent = `HUMIDITY: ${data.care.humidity}`;
        tipsAccordion.appendChild(humi);
        const lig = document.createElement("p");
        lig.textContent = `LIGHT: ${data.care.light}`;
        tipsAccordion.appendChild(lig);
        const tempt = document.createElement("p");
        tempt.textContent = `TEMPERATURE: ${data.care.temperature}`;
        tipsAccordion.appendChild(tempt);
        const wata = document.createElement("p");
        wata.textContent = `WATER: ${data.care.water}`;
        tipsAccordion.appendChild(wata);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  } catch (error) {
    console.error("Error al obtener información de objetos:", error);
  }
}