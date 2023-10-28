// store.js

// Var global pour élément HTML
export const scoreElement = document.getElementById("score");
export const codyImage = document.getElementById("cody");
export const userName = document.getElementById("start-modal-input-username");
export const rankLvlElements = document.getElementsByClassName("rank");
export const costElements = document.getElementsByClassName("cost");
export const startModal = document.getElementById("start-modal");
export const btnStartModal = document.getElementById("btn-start-modal");
export const overlayStartModal = document.getElementById("overlay");
export const notif = document.getElementById("notif");

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
    updateCostColors();
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
    updateState({clicValue: newValue});
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

export function getCostById(id) {
    const item = itemsToWatch.find((item) => item.id === id);
    if (item && item.cost) {
        return item.cost();
    }
    return null;
}

export const itemsToWatch = [
    {id: "cost-pizza", cost: null},
    {id: "cost-burger", cost: null},
    {id: "cost-coffee", cost: null},
    {id: "cost-dorayaki", cost: null},
    {id: "cost-fries", cost: null},
    {id: "cost-HotDog", cost: null},
    {id: "cost-ice", cost: null},
    {id: "cost-kebab", cost: null},
    {id: "cost-milk", cost: null},
    {id: "cost-muffin", cost: null},
    {id: "cost-sandwich", cost: null},
];

export function updateCostColors() {
    for (const item of itemsToWatch) {
        if (item.cost) {
            updateCostTextColor(item.id, item.cost());
        }
    }
}

export function updateCostTextColor(itemID, cost) {
    const costElement = document.getElementById(itemID);
    const currentScore = getScore();

    if (costElement) {
        if (currentScore >= cost) {
            costElement.classList.remove("text-color-accent");
            costElement.classList.add("text-cost-green");
        } else {
            costElement.classList.add("text-color-accent");
            costElement.classList.remove("text-cost-green");
        }
    } else {
        console.warn("L'élément avec l'ID", itemID, "n'a pas été trouvé.");
    }
}

export function autoClicker() {
    if (autoClickerActive) {
        const currentScore = getScore();
        const newScore = currentScore + autoClickValue;
        updateState({score: newScore});
    }
}

const clicValueElement = document.getElementById("clic");

function updateClicValueText() {
    const currentClicValue = getClicValue();
    clicValueElement.textContent = ` ${currentClicValue}`;
}

export {updateClicValueText};
