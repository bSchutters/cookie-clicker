// globalVariables.js
export let score = 0;
export let scoreElement = document.getElementById("score");
export let clicValue = 1;

export function getClicValue() {
    return clicValue;
}

export function setClicValue(newValue) {
    clicValue = newValue;
}
