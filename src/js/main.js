import "../css/style.css";
import "./store.js"; // Importez le store
import {
  getScore,
  getClicValue,
  setClicValue,
  subscribe,
  updateState,
  updateCostColors,
  scoreElement,
  codyImage,
  userName,
  btnStartModal,
  overlayStartModal,
  startModal,
  notif,
  rankLvlElements,
  costElements,
} from "./store.js";

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
// Modifiez la valeur de clic
setClicValue(1);

//Composant qui garde getUserName
function getUserName() {
  const user = userName.value;

  // Stocker le username dans le localStorage
  localStorage.setItem("userName", user);
}

// Abonnez le composant à l'état
subscribe(getUserName);

// Récupérer username depuis le localStorage s'il existe
const storeUser = localStorage.getItem("userName");
if (storeUser !== null) {
  updateState(userName);
} else {
  updateState("???");
}

// Composant qui affiche et garde le score
function scoreComponent(state) {
  scoreElement.textContent = state.score;

  // Stocker le score dans le localStorage
  localStorage.setItem("score", state.score.toString());
}

// Abonnez le composant à l'état
subscribe(scoreComponent);

const storedScore = localStorage.getItem("score");

// Récupérer le score depuis le localStorage s'il existe
if (storedScore !== null) {
  updateState({ score: parseInt(storedScore, 10) });
} else {
  // Si le score n'existe pas dans le localStorage, initialisez-le
  updateState({ score: 10 });
}

// Composant qui affiche et garde les bonus
function getLvlAndCostValues() {
  // Créez un objet pour stocker les valeurs
  const valuesToStore = {
    clicValue: getClicValue(),
  };

  for (let i = 0; i < rankLvlElements.length; i++) {
    const rankValue = rankLvlElements[i].textContent;
    const costValue = costElements[i].textContent;
    valuesToStore[`rank${i}`] = rankValue;
    valuesToStore[`cost${i}`] = costValue;
  }

  // Convertissez l'objet en une chaîne JSON pour le stocker dans le localStorage
  const serializedValues = JSON.stringify(valuesToStore);

  // Enregistrez la chaîne JSON dans le localStorage
  localStorage.setItem("rankLvlCostValues", serializedValues);
}

// Abonnez le composant à l'état
subscribe(getLvlAndCostValues);

// Récupérez la chaîne JSON du localStorage
const storedData = localStorage.getItem("rankLvlCostValues");

// Récupérez la chaîne JSON du localStorage
if (storedData !== null) {
  // 1 Désérialisez la chaîne JSON en un objet JavaScript
  const rankLvlCostValues = JSON.parse(storedData);

  // 2 Utilisez l'objet pour mettre à jour les éléments HTML correspondants
  const rankLvlElements = document.getElementsByClassName("rank");
  const costElements = document.getElementsByClassName("cost");

  for (let i = 0; i < rankLvlElements.length; i++) {
    if (rankLvlCostValues[`rank${i}`]) {
      rankLvlElements[i].textContent = rankLvlCostValues[`rank${i}`];
    }
    if (rankLvlCostValues[`cost${i}`]) {
      costElements[i].textContent = rankLvlCostValues[`cost${i}`];
    }
  }
}

// Abonnez le composant à l'état
subscribe(scoreComponent);

// Récupérer le score depuis le localStorage s'il existe
if (storedScore !== null) {
  updateState({ score: parseInt(storedScore, 10) });
} else {
  // Si le score n'existe pas dans le localStorage, initialisez-le
  updateState({ score: 100000000000000 });
}

if (storedData !== null) {
  // 1 Désérialisez la chaîne JSON en un objet JavaScript
  const rankLvlCostValues = JSON.parse(storedData);

  // 2 Utilisez l'objet pour mettre à jour les éléments HTML correspondants
  for (let i = 0; i < rankLvlElements.length; i++) {
    if (rankLvlCostValues[`rank${i}`]) {
      rankLvlElements[i].textContent = rankLvlCostValues[`rank${i}`];
    }
    if (rankLvlCostValues[`cost${i}`]) {
      costElements[i].textContent = rankLvlCostValues[`cost${i}`];
    }
  }
  // 3 Mettez à jour le clicValue
  if (rankLvlCostValues.clicValue) {
    setClicValue(rankLvlCostValues.clicValue);
  }
}

codyImage.addEventListener("click", () => {
  const currentScore = getScore();
  const currentClicValue = getClicValue();
  updateState({ score: currentScore + currentClicValue });
  updateCostColors();
});

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
