import { sheetBuilder } from "./info-sheet.js";

export const subject = {
  observers: [],
  attach(observer) {
    this.observers.push(observer);
  },
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  },
};

export const plantObserver = {
  update(data) {
    localStorage.setItem("plant-info", JSON.stringify(data));
    sheetBuilder();
  },
};
