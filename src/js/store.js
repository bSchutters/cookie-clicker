// store.js
//var global
export const scoreElement = document.getElementById("score");
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

export function autoClicker() {
  if (autoClicBoolean === true) {
    function autoClickerIncr() {
      score = score + autoClicValue;
      scoreElement.textContent = score;
    }
    setInterval(autoClickerIncr, 1000);
  }
}

export const codyImage = document.getElementById("cody");
