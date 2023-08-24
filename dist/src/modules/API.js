export async function fetchPlantInfo(productType, itemId) {
  const apiBaseUrl =
    "https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/";

  const apiUrl = `${apiBaseUrl}${productType}/${itemId}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener la información:", error);
    return { stock: 0 };
  }
}