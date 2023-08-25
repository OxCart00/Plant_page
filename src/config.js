const plantInfo = JSON.parse(localStorage.getItem("plant-info"));

export function buildRecommendations() {
  let selectedIds = [];
  const formElements = document.getElementsByClassName("plants--form__answere");
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.checked) {
      selectedIds.push(element.id);
    }
  }
  const recommendationsMap = {
    selectedIds: selectedIds,
    "low-light-plant": {
      "toxic-plant": {
        "clay-pot": {
          simple: {
            plant: "peace-lily",
            soil: "drainage",
            pot: "simple-clay-pot",
          },
          "simple-decorated": {
            plant: "peace-lily",
            soil: "drainage",
            pot: "simple-decorated-clay-pot",
          },
          "painted-decorated": {
            plant: "peace-lily",
            soil: "drainage",
            pot: "painted-decorated-clay-pot",
          },
        },
        "other-pot": {
          simple: {
            plant: "sansevieria",
            soil: selectedIds[1],
            pot: `simple-${selectedIds[3]}`,
          },
          "simple-decorated": {
            plant: "sansevieria",
            soil: selectedIds[1],
            pot: `simple-decorated-${selectedIds[3]}`,
          },
          "painted-decorated": {
            plant: "sansevieria",
            soil: selectedIds[1],
            pot: `painted-decorated-${selectedIds[3]}`,
          },
        },
      },
      "non-toxic-plant": {
        "clay-pot": {
          simple: {
            plant: "fern",
            soil: "drainage",
            pot: "simple-clay-pot",
          },
          "simple-decorated": {
            plant: "fern",
            soil: "drainage",
            pot: "simple-decorated-clay-pot",
          },
          "painted-decorated": {
            plant: "fern",
            soil: "drainage",
            pot: "painted-decorated-clay-pot",
          },
        },
        "other-pot": {
          simple: {
            plant: "fern",
            soil: selectedIds[1],
            pot: `simple-${selectedIds[3]}`,
          },
          "simple-decorated": {
            plant: "fern",
            soil: selectedIds[1],
            pot: `simple-decorated-${selectedIds[3]}`,
          },
          "painted-decorated": {
            plant: "fern",
            soil: selectedIds[1],
            pot: `painted-decorated-${selectedIds[3]}`,
          },
        },
      },
    },
    "medium-light-plant": {
      "toxic-plant": {
        "clay-pot": {
          simple: {
            plant: "peace-lily",
            soil: "drainage",
            pot: "simple-clay-pot",
          },
          "simple-decorated": {
            plant: "peace-lily",
            soil: "drainage",
            pot: "simple-decorated-clay-pot",
          },
          "painted-decorated": {
            plant: "peace-lily",
            soil: "drainage",
            pot: "painted-decorated-clay-pot",
          },
        },
        "other-pot": {
          simple: {
            plant: "aglaonema",
            soil: selectedIds[1],
            pot: `simple-${selectedIds[3]}`,
          },
          "simple-decorated": {
            plant: "aglaonema",
            soil: selectedIds[1],
            pot: `simple-decorated-${selectedIds[3]}`,
          },
          "painted-decorated": {
            plant: "aglaonema",
            soil: selectedIds[1],
            pot: `painted-decorated-${selectedIds[3]}`,
          },
        },
      },
      "non-toxic-plant": {
        "clay-pot": {
          simple: {
            plant: "peace-lily",
            soil: "drainage",
            pot: "simple-clay-pot",
          },
          "simple-decorated": {
            plant: "peace-lily",
            soil: "drainage",
            pot: "simple-decorated-clay-pot",
          },
          "painted-decorated": {
            plant: "peace-lily",
            soil: "drainage",
            pot: "painted-decorated-clay-pot",
          },
        },
        "other-pot": {
          simple: {
            plant: "monstera",
            soil: selectedIds[1],
            pot: `simple-${selectedIds[3]}`,
          },
          "simple-decorated": {
            plant: "monstera",
            soil: selectedIds[1],
            pot: `simple-decorated-${selectedIds[3]}`,
          },
          "painted-decorated": {
            plant: "monstera",
            soil: selectedIds[1],
            pot: `painted-decorated-${selectedIds[3]}`,
          },
        },
      },
    },
    "outdoor-plant": {
      "toxic-plant": {
        "clay-pot": {
          simple: {
            plant: "aloe",
            soil: "drainage",
            pot: "simple-clay-pot",
          },
          "simple-decorated": {
            plant: "aloe",
            soil: "drainage",
            pot: "simple-decorated-clay-pot",
          },
          "painted-decorated": {
            plant: "aloe",
            soil: "drainage",
            pot: "painted-decorated-clay-pot",
          },
        },
        "other-pot": {
          simple: {
            plant: "aloe",
            soil: selectedIds[1],
            pot: `simple-${selectedIds[3]}`,
          },
          "simple-decorated": {
            plant: "aloe",
            soil: selectedIds[1],
            pot: `simple-decorated-${selectedIds[3]}`,
          },
          "painted-decorated": {
            plant: "aloe",
            soil: selectedIds[1],
            pot: `painted-decorated-${selectedIds[3]}`,
          },
        },
      },
      "non-toxic-plant": {
        "clay-pot": {
          simple: {
            plant: "cactus",
            soil: "drainage",
            pot: "simple-clay-pot",
          },
          "simple-decorated": {
            plant: "cactus",
            soil: "drainage",
            pot: "simple-decorated-clay-pot",
          },
          "painted-decorated": {
            plant: "cactus",
            soil: "drainage",
            pot: "painted-decorated-clay-pot",
          },
        },
        "other-pot": {
          simple: {
            plant: "cactus",
            soil: selectedIds[1],
            pot: `simple-${selectedIds[3]}`,
          },
          "simple-decorated": {
            plant: "cactus",
            soil: selectedIds[1],
            pot: `simple-decorated-${selectedIds[3]}`,
          },
          "painted-decorated": {
            plant: "cactus",
            soil: selectedIds[1],
            pot: `painted-decorated-${selectedIds[3]}`,
          },
        },
      },
    },
  };
  return recommendationsMap;
}

export const stockConfig = {
  potOptions: {
    ceramic: {
      simple: {
        painted: `ceramic-simple-${plantInfo.color}`,
        unpainted: "ceramic-simple-unpainted",
      },
      decorated: {
        painted: `ceramic-decorated-${plantInfo.color}`,
        unpainted: "ceramic-decorated-unpainted",
      },
    },
    clay: {
      simple: {
        painted: `clay-simple-painted-${plantInfo.color}`,
        unpainted: "clay-simple-unpainted",
      },
      decorated: {
        painted: `clay-decorated-${plantInfo.color}`,
        unpainted: "clay-decorated-unpainted",
      },
    },
  },
};
