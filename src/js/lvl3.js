// lvl1.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  autoClicker,
} from "./store.js";
import { codyImages } from "./images.js";

// const codyImage = document.getElementById("cody-lvl-1");

// codyImage.addEventListener("click", () => {
//   const currentScore = getScore();
//   const currentClicValue = getClicValue();
//   updateState({ score: currentScore + currentClicValue });
// });

const cardCoffeeElement = document.getElementById("card-coffee");
const costCoffeeElement = document.getElementById("cost-coffee");
const lvlCoffeeElement = document.getElementById("lvl-coffee");

let lvlCoffee = 1;
let costCoffee = 500;

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
    const newClicValue = currentClicValue + 5;
    setClicValue(newClicValue);

    switch (lvlCoffee) {
      case 1:
        costCoffee = 500;
        costCoffeeElement.textContent = costCoffee;
        break;
      case 2:
        autoClicBoolean = true;
        // autoClicker();
        costCoffee = 1000;
        costCoffeeElement.textContent = costCoffee;
        ATRate.innerText = "True - 1 CPS";

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
        break;
    }
  }
};
