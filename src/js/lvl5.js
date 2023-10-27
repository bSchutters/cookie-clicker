// lvl5.js
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
import codyLvl5 from "../assets/images/Cody3D/png/Surprised-Cody_3D.png";

const cardFriesElement = document.getElementById("card-fries");
const costFriesElement = document.getElementById("cost-fries");
const lvlFriesElement = document.getElementById("lvl-fries");

let lvlFries = 1;
let costFries = 5000;

const FriesItem = itemsToWatch.find((item) => item.id === "cost-fries");
if (FriesItem) {
  FriesItem.cost = () => costFries;
}

lvlFriesElement.textContent = lvlFries;
costFriesElement.textContent = costFries;

cardFriesElement.onclick = function () {
  if (lvlFries <= 5 && getScore() >= costFries) {
    lvlFries += 1;
    lvlFriesElement.textContent = lvlFries;
    const currentScore = getScore();
    const newScore = currentScore - costFries;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 150;
    if (lvlFries === 2) {
      setAutoClickValue(autoClickValue + 10);
    }
    setClicValue(newClicValue);
    updateClicValueText();
    updateCostColors();

    switch (lvlFries) {
      case 1:
        costFries = 5000;
        costFriesElement.textContent = costFries;
        break;
      case 2:
        costFries = 10000;
        costFriesElement.textContent = costFries;
        txtAT("True - 13 CPS");
        break;
      case 3:
        costFries = 20000;
        costFriesElement.textContent = costFries;
        break;
      case 4:
        costFries = 40000;
        costFriesElement.textContent = costFries;
        break;
      case 5:
        costFries = 80000;
        costFriesElement.textContent = costFries;
        break;
      case 6:
        lvlFriesElement.textContent = "MAX";
        costFriesElement.textContent = "-";
        codyImage.src = codyLvl5;
        break;
    }
  }
};
