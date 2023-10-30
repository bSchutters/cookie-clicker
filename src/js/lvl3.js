// lvl3.js

import {
  getScore,
  setClicValue,
  updateState,
  codyImage,
  autoClicker,
  getClicValue,
  autoClickValue,
  activateAutoClicker,
  updateClicValueText,
  updateCostTextColor,
  itemsToWatch,
  updateCostColors,
  showNotification,
  updateAutoClickValueTextMobile,
  updateClicValueTextMobile,
} from "./store.js";
import codyLvl3 from "../assets/images/Cody3D/png/Angry-Cody_3D.png";

const cardCoffeeElement = document.getElementById("card-coffee");
const costCoffeeElement = document.getElementById("cost-coffee");
const lvlCoffeeElement = document.getElementById("lvl-coffee");

let lvlCoffee = 1;
let costCoffee = 500;
let autoClicValue = 5;
const coffeeItem = itemsToWatch.find((item) => item.id === "cost-coffee");
if (coffeeItem) {
  coffeeItem.cost = () => costCoffee;
}

lvlCoffeeElement.textContent = lvlCoffee;
costCoffeeElement.textContent = costCoffee;

cardCoffeeElement.onclick = function () {
  if (lvlCoffee <= 5 && getScore() >= costCoffee) {
    lvlCoffee += 1;
    lvlCoffeeElement.textContent = lvlCoffee;
    const currentScore = getScore();
    const newScore = currentScore - costCoffee;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + autoClicValue;
    setClicValue(newClicValue);
    updateClicValueText();
    updateCostColors();
    updateClicValueTextMobile();
    updateAutoClickValueText();
    updateAutoClickValueTextMobile();

    switch (lvlCoffee) {
      case 1:
        costCoffee = 500;
        costCoffeeElement.textContent = costCoffee;
        break;
      case 2:
        activateAutoClicker(autoClickValue);
        costCoffee = 1000;
        costCoffeeElement.textContent = costCoffee;
        setInterval(autoClicker, 1000);
        showNotification("Vous avez debloquer, l'autoclicker !");
        break;
      case 3:
        costCoffee = 2500;
        costCoffeeElement.textContent = costCoffee;
        break;
      case 4:
        costCoffee = 5000;
        costCoffeeElement.textContent = costCoffee;
        break;
      case 5:
        costCoffee = 10000;
        costCoffeeElement.textContent = costCoffee;
        break;
      case 6:
        lvlCoffeeElement.textContent = "MAX";
        costCoffeeElement.textContent = "-";
        codyImage.src = codyLvl3;
        showNotification("Vous avez atteint le niveau max, GG !");
        break;
    }
  }
};
