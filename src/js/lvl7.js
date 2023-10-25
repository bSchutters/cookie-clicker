// lvl6.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
} from "./store.js";
import codyLvl7 from "../assets/images/Cody3D/png/Happy-Cody_3D.png";

const cardIceCreamElement = document.getElementById("card-ice");
const costIceCreamElement = document.getElementById("cost-ice");
const lvlIceCreamElement = document.getElementById("lvl-ice");

let lvlIceCream = 1;
let costIceCream = 20000;

lvlIceCreamElement.textContent = lvlIceCream;
costIceCreamElement.textContent = costIceCream;

cardIceCreamElement.onclick = function () {
  if (lvlIceCream <= 5 && getScore() >= costIceCream) {
    lvlIceCream += 1;
    lvlIceCreamElement.textContent = lvlIceCream;
    const currentScore = getScore();
    const newScore = currentScore - costIceCream;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 1250;
    setClicValue(newClicValue);

    switch (lvlIceCream) {
      case 1:
        costIceCream = 50000;
        costIceCreamElement.textContent = costIceCream;
        break;
      case 2:
        autoClicValue = autoClicValue + 1000;
        costIceCream = 100000;
        costIceCreamElement.textContent = costIceCream;
        ATRate.innerText = "True - 1113 CPS";
        break;
      case 3:
        costIceCream = 200000;
        costIceCreamElement.textContent = costIceCream;
        break;
      case 4:
        costIceCream = 400000;
        costIceCreamElement.textContent = costIceCream;
        break;
      case 5:
        costIceCream = 800000;
        costIceCreamElement.textContent = costIceCream;
        break;
      case 6:
        lvlIceCreamElement.textContent = "MAX";
        costIceCreamElement.textContent = "-";
        codyImage.src = codyLvl7;
        break;
    }
  }
};
