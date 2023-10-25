// lvl9.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
} from "./store.js";
import codyLvl9 from "../assets/images/Cody3D/png/Laugh-Cody_3D.png";

const cardMilkElement = document.getElementById("card-milk");
const costMilkElement = document.getElementById("cost-milk");
const lvlMilkElement = document.getElementById("lvl-milk");

let lvlMilk = 1;
let costMilk = 1000000;

lvlMilkElement.textContent = lvlMilk;
costMilkElement.textContent = costMilk;

cardMilkElement.onclick = function () {
  if (lvlMilk <= 5 && getScore() >= costMilk) {
    lvlMilk += 1;
    lvlMilkElement.textContent = lvlMilk;
    const currentScore = getScore();
    const newScore = currentScore - costMilk;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 2000;
    setClicValue(newClicValue);

    switch (lvlMilk) {
      case 1:
        costMilk = 1000000;
        costMilkElement.textContent = costMilk;
        break;
      case 2:
        autoClicValue = autoClicValue + 10000;
        costMilk = 2000000;
        costMilkElement.textContent = costKMilk;
        ATRate.innerText = "True - 13613 CPS";
        break;
      case 3:
        costMilk = 4000000;
        costMilkElement.textContent = costMilk;
        break;
      case 4:
        costMilk = 8000000;
        costMilkElement.textContent = costMilk;
        break;
      case 5:
        costMilk = 16000000;
        costMilkElement.textContent = costMilk;
        break;
      case 6:
        lvlMilkElement.textContent = "MAX";
        costMilkElement.textContent = "-";
        codyImage.src = codyLvl9;
        break;
    }
  }
};
