import "../css/style.css";
import "./store.js"; // Importez le store
import { scoreElement, codyImage } from "./store.js";

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
  getCostById,
  updateCostColors,
} from "./store.js";

let clicRate = document.getElementById("clic");
let ATRate = document.getElementById("auto-clic");

// Composant qui affiche le score
// Composant qui affiche le score
function scoreComponent(state) {
  scoreElement.textContent = state.score;

  // Stocker le score dans le localStorage
  localStorage.setItem("score", state.score.toString());
}

// Abonnez le composant à l'état
subscribe(scoreComponent);

// Récupérer le score depuis le localStorage s'il existe
const storedScore = localStorage.getItem("score");
if (storedScore !== null) {
  updateState({ score: parseInt(storedScore, 10) });
} else {
  // Si le score n'existe pas dans le localStorage, initialisez-le
  updateState({ score: 100000000 });
}

// Modifiez la valeur de clic
setClicValue(0);

codyImage.addEventListener("click", () => {
  const currentScore = getScore();
  const currentClicValue = getClicValue();
  updateState({ score: currentScore + currentClicValue });
  updateCostColors();
});

const startModal = document.getElementById("start-modal");
const btnStartModal = document.getElementById("btn-start-modal");
const overlayStartModal = document.getElementById("overlay");
const btnInfoRules = document.getElementById("info-rules");
const btnInfoRulesMobile = document.getElementById("info-rules-mobile");

btnStartModal.onclick = function () {
  overlayStartModal.classList.add("hidden");
  startModal.classList.add("hidden");
};

btnInfoRules.onclick = function () {
  overlayStartModal.classList.remove("hidden");
  startModal.classList.remove("hidden");
};

btnInfoRulesMobile.onclick = function () {
  startModal.classList.remove("hidden");
};

const notif = document.getElementById("notif");

notif.onclick = function () {
  notif.classList.add("hidden");
};

//MENU BURGER OPEN CLOSE

const iconBurgerMenu = document.getElementById("icon-burger-mobile");
const rightMain = document.getElementById("right-main");
const leftMain = document.getElementById("left-main");
const closeLvlMenuBtn = document.getElementById("close-lvl-menu");

iconBurgerMenu.onclick = function () {
  rightMain.classList.add("hidden");
  rightMain.classList.remove("flex");
  leftMain.classList.remove("hidden");
  leftMain.classList.add("flex");
  closeLvlMenuBtn.classList.remove("hidden");
};

closeLvlMenuBtn.onclick = function () {
  rightMain.classList.add("flex");
  rightMain.classList.remove("hidden");
  leftMain.classList.remove("flex");
  leftMain.classList.add("hidden");
  closeLvlMenuBtn.classList.add("hidden");
};
