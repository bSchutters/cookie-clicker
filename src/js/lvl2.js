// lvl2.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
  updateClicValueText,
  updateCostTextColor,
  itemsToWatch,
  updateCostColors,
} from "./store.js";
import codyLvl2 from "../assets/images/Cody3D/png/Furious-Cody_3D.png";

const cardBurgerElement = document.getElementById("card-burger");
const costBurgerElement = document.getElementById("cost-burger");
const lvlBurgerElement = document.getElementById("lvl-burger");

let lvlBurger = 1;
let costBurger = 100;
const burgerItem = itemsToWatch.find((item) => item.id === "cost-burger");
if (burgerItem) {
  burgerItem.cost = () => costBurger;
}

lvlBurgerElement.textContent = lvlBurger;
costBurgerElement.textContent = costBurger;

cardBurgerElement.onclick = function () {
  if (lvlBurger <= 5 && getScore() >= costBurger) {
    lvlBurger += 1;
    lvlBurgerElement.textContent = lvlBurger;
    const currentScore = getScore();
    const newScore = currentScore - costBurger;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 2;
    setClicValue(newClicValue);
    updateClicValueText();
    updateCostColors();

    switch (lvlBurger) {
      case 1:
        costBurger = 100;
        costBurgerElement.textContent = costBurger;
        break;
      case 2:
        costBurger = 250;
        costBurgerElement.textContent = costBurger;
        break;
      case 3:
        costBurger = 500;
        costBurgerElement.textContent = costBurger;
        break;
      case 4:
        costBurger = 1000;
        costBurgerElement.textContent = costBurger;
        break;
      case 5:
        costBurger = 2500;
        costBurgerElement.textContent = costBurger;
        break;
      case 6:
        lvlBurgerElement.textContent = "MAX";
        costBurgerElement.textContent = "-";
        codyImage.src = codyLvl2;
        break;
    }
    if (lvlPizza <= 5) {
      costPizzaElement.textContent = costBurger;
      updateCostColors("cost-burger");
    }
  }
};
