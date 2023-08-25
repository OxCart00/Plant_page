import { fetchPlantInfo } from "./API.js";
import { stockConfig } from "../config.js";

const infoAccordion = document.querySelector(".description .accordion-content");
const tipsAccordion = document.querySelector(".tips .accordion-content");

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
function createAlert(message, backgroundColor) {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.style.backgroundColor = backgroundColor;
  return alert;
}
function createAndAppendElement(tag, text, container) {
  const element = document.createElement(tag);
  element.textContent = text;
  container.appendChild(element);
}
function handleInfo(data) {
  console.log("Datos de la respuesta:", data);
  createAndAppendElement("p", data.description, infoAccordion);
  createAndAppendElement("p", `HUMIDITY: ${data.care.humidity}`, tipsAccordion);
  createAndAppendElement("p", `LIGHT: ${data.care.light}`, tipsAccordion);
  createAndAppendElement(
    "p",
    `TEMPERATURE: ${data.care.temperature}`,
    tipsAccordion,
  );
  createAndAppendElement("p", `WATER: ${data.care.water}`, tipsAccordion);
}
export async function getObjectInformation() {
  const plantInfo = JSON.parse(localStorage.getItem("plant-info"));
  const clayPot = plantInfo.pot.split("-").includes("clay");
  const potType = clayPot ? "clay" : "ceramic";
  const isDecorated = plantInfo.pot.split("-").includes("decorated");
  const isPainted = plantInfo.pot.split("-").includes("painted");
  const plantName =
    plantInfo.plant === "peace-lily" ? "peaceLily" : plantInfo.plant;
  const potId =
    stockConfig.potOptions[potType][isDecorated ? "decorated" : "simple"][
      isPainted ? "painted" : "unpainted"
    ];

  const objectPromises = [
    fetchPlantInfo("plant", plantName),
    fetchPlantInfo("pot", potId),
    fetchPlantInfo("soil", plantInfo.soil),
  ];

  try {
    const objectsInfo = await Promise.all(objectPromises);
    const inventAccordion = document.querySelector(
      ".inventory .accordion-content",
    );
    for (let i = 0; i < objectsInfo.length; i++) {
      const objectType = i === 0 ? "plant" : i === 1 ? "pot" : "soil";
      const objectName =
        i === 0 ? plantInfo.plant : i === 1 ? potId : plantInfo.soil;

      if (objectsInfo[i].stock <= 10 && objectsInfo[i].stock !== 0) {
        const alertMessage = `${objectName} ${objectType}: Only ${objectsInfo[i].stock} items left on stock`;
        const alert = createAlert(alertMessage, "yellow");
        inventAccordion.appendChild(alert);
      }

      if (objectsInfo[i].stock === 0) {
        const alertMessage = `${objectName} ${objectType} is out of stock, please select a different ${objectType}`;
        const alert = createAlert(alertMessage, "red");
        inventAccordion.appendChild(alert);
      }
    }
    checkStockMiddleware(objectsInfo);

    const descriptionUrl =
      plantInfo.plant === "peace-lily"
        ? "https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/peaceLily"
        : `https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${plantInfo.plant}`;

    fetch(descriptionUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(handleInfo)
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  } catch (error) {
    console.error("Error al obtener información de objetos:", error);
  }
}
