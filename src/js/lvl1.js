// lvl1.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
} from "./store.js";
import codyLvl1 from "../assets/images/Cody3D/png/Dreaming-Cody_3D.png";

const cardPizzaElement = document.getElementById("card-pizza");
const costPizzaElement = document.getElementById("cost-pizza");
const lvlPizzaElement = document.getElementById("lvl-pizza");

let lvlPizza = 1;
let costPizza = 10;

lvlPizzaElement.textContent = lvlPizza;
costPizzaElement.textContent = costPizza;

cardPizzaElement.onclick = function () {
  if (lvlPizza <= 5 && getScore() >= costPizza) {
    lvlPizza += 1;
    lvlPizzaElement.textContent = lvlPizza;
    const currentScore = getScore();
    const newScore = currentScore - costPizza;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 1;
    setClicValue(newClicValue);

    switch (lvlPizza) {
      case 1:
        costPizza = 10;
        costPizzaElement.textContent = costPizza;
        break;
      case 2:
        costPizza = 50;
        costPizzaElement.textContent = costPizza;
        break;
      case 3:
        costPizza = 100;
        costPizzaElement.textContent = costPizza;
        break;
      case 4:
        costPizza = 200;
        costPizzaElement.textContent = costPizza;
        break;
      case 5:
        costPizza = 500;
        costPizzaElement.textContent = costPizza;
        break;
      case 6:
        lvlPizzaElement.textContent = "MAX";
        costPizzaElement.textContent = "-";
        codyImage.src = codyLvl1;
        break;
    }
  }
};
