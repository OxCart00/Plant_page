const plantInfo = JSON.parse(localStorage.getItem("plant-info"));

export const stockConfig = {
  potOptions: {
    ceramic: {
      simple: {
        painted: `ceramic-simple-${plantInfo.color}`,
        unpainted: "ceramic-simple-unpainted"
      },
      decorated: {
        painted: `ceramic-decorated-${plantInfo.color}`,
        unpainted: "ceramic-decorated-unpainted"
      }
    },
    clay: {
      simple: {
        painted: `clay-simple-painted-${plantInfo.color}`,
        unpainted: "clay-simple-unpainted"
      },
      decorated: {
        painted: `clay-decorated-${plantInfo.color}`,
        unpainted: "clay-decorated-unpainted"
      }
    }
  }
};