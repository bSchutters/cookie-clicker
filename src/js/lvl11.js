// lvl9.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
  setAutoClickValue,
  autoClickValue,
  txtAT,
  updateClicValueText,
  updateCostTextColor,
  updateCostColors,
  itemsToWatch,
} from "./store.js";
import codyLvl11 from "../assets/images/Cody3D/png/Heart-Cody_3D.png";

const cardSandwichElement = document.getElementById("card-sandwich");
const costSandwichElement = document.getElementById("cost-sandwich");
const lvlSandwichElement = document.getElementById("lvl-sandwich");

let lvlSandwich = 1;
let costSandwich = 100000000;
const SandwichItem = itemsToWatch.find((item) => item.id === "cost-sandwich");
if (SandwichItem) {
  SandwichItem.cost = () => costSandwich;
}

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
    if (lvlSandwich === 2) {
      setAutoClickValue(autoClickValue + 250000);
    }
    setClicValue(newClicValue);
    updateClicValueText();
    updateCostColors();

    switch (lvlSandwich) {
      case 1:
        costSandwich = 100000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 2:
        costSandwich = 1000000000;
        costSandwichElement.textContent = costSandwich;
        txtAT("True - 363613 CPS");
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
