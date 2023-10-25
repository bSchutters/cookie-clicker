// lvl9.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
} from "./store.js";
import codyLvl11 from "../assets/images/Cody3D/png/Heart-Cody_3D.png";

const cardSandwichElement = document.getElementById("card-sandwich");
const costSandwichElement = document.getElementById("cost-sandwich");
const lvlSandwichElement = document.getElementById("lvl-sandwich");

let lvlSandwich = 1;
let costSandwich = 100000000;

lvlSandwichElement.textContent = lvlSandwich;
costSandwichElement.textContent = costSandwich;

cardSandwichElement.onclick = function () {
  if (lvlSandwich <= 5 && getScore() >= costSandwich) {
    lvlSandwich += 1;
    lvlSandwichElement.textContent = lvlSandwich;
    const currentScore = getScore();
    const newScore = currentScore - costSandwich;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 50000;
    setClicValue(newClicValue);

    switch (lvlSandwich) {
      case 1:
        costSandwich = 100000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 2:
        autoClicValue = autoClicValue + 250000;
        costSandwich = 1000000000;
        costSandwichElement.textContent = costSandwich;
        ATRate.innerText = "True - 363613 CPS";
        break;
      case 3:
        costSandwich = 10000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 4:
        costSandwich = 100000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 5:
        costSandwich = 1000000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 6:
        lvlSandwichElement.textContent = "MAX";
        costSandwichElement.textContent = "-";
        codyImage.src = codyLvl11;
        break;
    }
  }
};
