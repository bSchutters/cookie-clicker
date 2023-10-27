// lvl8.js
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
  itemsToWatch,
  updateCostColors,
} from "./store.js";
import codyLvl8 from "../assets/images/Cody3D/png/Smile-Cody_3D.png";

const cardKebabElement = document.getElementById("card-kebab");
const costKebabElement = document.getElementById("cost-kebab");
const lvlKebabElement = document.getElementById("lvl-kebab");

let lvlKebab = 1;
let costKebab = 200000;
const KebabItem = itemsToWatch.find((item) => item.id === "cost-kebab");
if (KebabItem) {
  KebabItem.cost = () => costKebab;
}

lvlKebabElement.textContent = lvlKebab;
costKebabElement.textContent = costKebab;

cardKebabElement.onclick = function () {
  if (lvlKebab <= 5 && getScore() >= costKebab) {
    lvlKebab += 1;
    lvlKebabElement.textContent = lvlKebab;
    const currentScore = getScore();
    const newScore = currentScore - costKebab;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 1500;
    if (lvlKebab === 2) {
      setAutoClickValue(autoClickValue + 2500);
    }
    setClicValue(newClicValue);
    updateClicValueText();
    updateCostColors();

    switch (lvlKebab) {
      case 1:
        costKebab = 200000;
        costKebabElement.textContent = costKebab;
        break;
      case 2:
        costKebab = 400000;
        costKebabElement.textContent = costKebab;
        txtAT("True - 3613 CPS");
        break;
      case 3:
        costKebab = 800000;
        costKebabElement.textContent = costKebab;
        break;
      case 4:
        costKebab = 1600000;
        costKebabElement.textContent = costKebab;
        break;
      case 5:
        costKebab = 3200000;
        costKebabElement.textContent = costKebab;
        break;
      case 6:
        lvlKebabElement.textContent = "MAX";
        costKebabElement.textContent = "-";
        codyImage.src = codyLvl8;
        break;
    }
  }
};
