// lvl6.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
} from "./store.js";
import codyLvl6 from "../assets/images/Cody3D/png/Poker-Cody_3D.png";

const cardHotDogElement = document.getElementById("card-HotDog");
const costHotDogElement = document.getElementById("cost-HotDog");
const lvlHotDogElement = document.getElementById("lvl-HotDog");

let lvlHotDog = 1;
let costHotDog = 10000;

lvlHotDogElement.textContent = lvlHotDog;
costHotDogElement.textContent = costHotDog;

cardHotDogElement.onclick = function () {
  if (lvlHotDog <= 5 && getScore() >= costHotDog) {
    lvlHotDog += 1;
    lvlHotDogElement.textContent = lvlHotDog;
    const currentScore = getScore();
    const newScore = currentScore - costHotDog;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 1000;
    setClicValue(newClicValue);

    switch (lvlHotDog) {
      case 1:
        costHotDog = 10000;
        costHotDogElement.textContent = costHotDog;
        break;
      case 2:
        autoClicValue = autoClicValue + 100;
        costHotDog = 30000;
        costHotDogElement.textContent = costHotDog;
        ATRate.innerText = "True - 113 CPS";
        break;
      case 3:
        costHotDog = 60000;
        costHotDogElement.textContent = costHotDog;
        break;
      case 4:
        costHotDog = 120000;
        costHotDogElement.textContent = costHotDog;
        break;
      case 5:
        costHotDog = 240000;
        costHotDogElement.textContent = costHotDog;
        break;
      case 6:
        lvlHotDogElement.textContent = "MAX";
        costHotDogElement.textContent = "-";
        codyImage.src = codyLvl6;
        break;
    }
  }
};
