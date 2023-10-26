// store.js

// Var global pour élément HTML
export const scoreElement = document.getElementById("score");
const ATRate = document.getElementById("auto-clic"); // Élément pour afficher l'état de l'autoclicker

// État de l'autoclicker et valeur de l'autoclick
export let autoClickerActive = false;
export let autoClickValue = 1;

export function setAutoClickValue(newValue) {
  autoClickValue = newValue;
}
// Définition du store
const state = {
  score: 0,
  clicValue: 1,
};

// Tableau d'observateurs
const observers = [];

// Fonction pour mettre à jour l'état et notifier les observateurs
export function updateState(newState) {
  Object.assign(state, newState);
  notifyObservers();
}

// Fonction pour inscrire un observateur
export function subscribe(observer) {
  observers.push(observer);
}

// Fonction pour notifier tous les observateurs
export function notifyObservers() {
  for (const observer of observers) {
    observer(state);
  }
}

// Exportez uniquement les fonctions nécessaires pour lire et mettre à jour l'état
export function getScore() {
  return state.score;
}

export function getClicValue() {
  return state.clicValue;
}

export function setClicValue(newValue) {
  updateState({ clicValue: newValue });
}

// Fonction pour activer l'autoclicker
export function activateAutoClicker() {
  autoClickerActive = true;
}

// Fonction pour désactiver l'autoclicker
export function deactivateAutoClicker() {
  autoClickerActive = false;
  ATRate.innerText = "False";
}
export function txtAT(text) {
  ATRate.innerText = text;
}

export function updateCostTextColor(itemID) {
  const costElement = document.getElementById(itemID);

  if (getScore() >= parseInt(costElement.textContent)) {
    costElement.classList.remove("text-color-accent");
    costElement.classList.add("text-cost-green");
  } else {
    costElement.classList.remove("text-cost-green");
    costElement.classList.add("text-color-accent");
  }
}

export function autoClicker() {
  if (autoClickerActive) {
    const currentScore = getScore();
    const newScore = currentScore + autoClickValue;
    updateState({ score: newScore });
  }
}
const clicValueElement = document.getElementById("clic");

function updateClicValueText() {
  const currentClicValue = getClicValue();
  clicValueElement.textContent = ` ${currentClicValue}`;
}

export { updateClicValueText };

export const codyImage = document.getElementById("cody");
