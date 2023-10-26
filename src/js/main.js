import "../css/style.css";
import "./store.js"; // Importez le store
import { scoreElement, codyImage } from "./store.js";

import("./store.js"); // Importez le store
import "./lvl1.js"; // Importez le niveau 1
import "./lvl2.js"; // Importez le niveau 2
import "./lvl3.js"; // Importez le niveau 3
import "./lvl4.js"; // Importez le niveau 4
import "./lvl5.js"; // Importez le niveau 5
import "./lvl6.js"; // Importez le niveau 6
import "./lvl7.js"; // Importez le niveau 7
import "./lvl8.js"; // Importez le niveau 8
import "./lvl9.js"; // Importez le niveau 9
import "./lvl10.js"; // Importez le niveau 10
import "./lvl11.js"; // Importez le niveau 11
// ... Importez d'autres niveaux si nécessaire ...

// app.js

import {
  getScore,
  getClicValue,
  setClicValue,
  subscribe,
  updateState,
  updateCostTextColor,
} from "./store.js";

let clicRate = document.getElementById("clic");
let ATRate = document.getElementById("auto-clic");

// Composant qui affiche le score
function scoreComponent(state) {
  scoreElement.textContent = state.score;
}

// Abonnez le composant à l'état
subscribe(scoreComponent);

// Modifiez l'état
updateState({ score: 1000000000 });

// Modifiez la valeur de clic
setClicValue(0);

codyImage.addEventListener("click", () => {
  const currentScore = getScore();
  const currentClicValue = getClicValue();
  updateState({ score: currentScore + currentClicValue });
});

const startModal = document.getElementById("start-modal");
const btnStartModal = document.getElementById("btn-start-modal");
const overlayStartModal = document.getElementById("overlay");

btnStartModal.onclick = function () {
  overlayStartModal.classList.add("hidden");
  startModal.classList.add("hidden");
};

const notif = document.getElementById("notif");

notif.onclick = function () {
  notif.classList.add("hidden");
};
