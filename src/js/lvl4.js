// lvl4.js
import {
  getScore,
  setClicValue,
  updateState,
  codyImage,
  autoClicker,
  getClicValue,
  autoClickerActive,
  autoClickValue,
  activateAutoClicker,
  deactivateAutoClicker,
  setAutoClickValue,
  txtAT,
  updateClicValueText,
  updateCostTextColor,
  updateCostColors,
  itemsToWatch,
} from "./store.js";
import codyLvl4 from "../assets/images/Cody3D/png/Devil-Cody_3D.png";

const cardDorayakiElement = document.getElementById("card-dorayaki");
const costDorayakiElement = document.getElementById("cost-dorayaki");
const lvlDorayakiElement = document.getElementById("lvl-dorayaki");

let lvlDorayaki = 1;
let costDorayaki = 1500;
const dorayakiItem = itemsToWatch.find((item) => item.id === "cost-dorayaki");
if (dorayakiItem) {
  dorayakiItem.cost = () => costDorayaki;
}

lvlDorayakiElement.textContent = lvlDorayaki;
costDorayakiElement.textContent = costDorayaki;

cardDorayakiElement.onclick = function () {
  if (lvlDorayaki <= 5 && getScore() >= costDorayaki) {
    lvlDorayaki += 1;
    lvlDorayakiElement.textContent = lvlDorayaki;
    const currentScore = getScore();
    const newScore = currentScore - costDorayaki;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 50;

    if (lvlDorayaki === 2) {
      setAutoClickValue(autoClickValue + 2);
    }
    setClicValue(newClicValue);
    updateClicValueText();
    updateCostColors();

    switch (lvlDorayaki) {
      case 1:
        costDorayaki = 1000;
        costDorayakiElement.textContent = costDorayaki;
        break;
      case 2:
        costDorayaki = 2000;
        costDorayakiElement.textContent = costDorayaki;
        txtAT("True - 3 CPS");
        break;
      case 3:
        costDorayaki = 4000;
        costDorayakiElement.textContent = costDorayaki;
        break;
      case 4:
        costDorayaki = 8000;
        costDorayakiElement.textContent = costDorayaki;
        break;
      case 5:
        costDorayaki = 16000;
        costDorayakiElement.textContent = costDorayaki;
        break;
      case 6:
        lvlDorayakiElement.textContent = "MAX";
        costDorayakiElement.textContent = "-";
        codyImage.src = codyLvl4;
        break;
    }
  }
};
