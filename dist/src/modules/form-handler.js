import { subject, plantObserver } from "./form-observer.js";
subject.attach(plantObserver);

export function handleFormChange() {
  const color = document.querySelector(
    '.plants--form input[name="color"]:checked',
  );
  const decoration = document.querySelector(
    '.plants--form input[name="decoration"]:checked',
  );
  const pot = document.querySelector('.plants--form input[name="pot"]:checked');
  const soil = document.querySelector(
    '.plants--form input[name="soil"]:checked',
  );
  const plants = document.querySelector('.plants--form select[name="plant"]');
  const selectedPlant = plants.options[plants.selectedIndex];
  const moss = document.querySelector(
    '.plants--form input[value="moss-pole"]:checked',
  );
  const pebbles = document.querySelector(
    '.plants--form input[value="pebbles"]:checked',
  );
  const greenies = document.querySelector(
    '.plants--form input[value="mini-plants"]:checked',
  );

  const colorOption = document.querySelector(
    '.color-options input[name="potColor"]:checked',
  );
  const decorationType = decoration ? "decorated" : "simple";

  let potValue = `${decorationType}-${pot.value}-pot`;

  if (color) {
    potValue = `painted-${potValue}`;
  }

  const formData = {
    pot: potValue,
    plant: selectedPlant.value,
    soil: soil.value,
  };

  if (color) {
    formData.color = colorOption.value;
  }

  if (pebbles) {
    formData.pebbles = "pebbles";
  }
  if (greenies) {
    formData.greenies = "mini-plants";
  }
  if (moss) {
    formData.moss = "moss-pole";
  }

  subject.notify(formData);
}
