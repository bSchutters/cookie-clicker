// lvl1.js
import {score, scoreElement, clicValue,getClicValue, setClicValue} from "./globalVariables.js";
import {codyImages} from "./images.js";

let codyImage = document.getElementById("cody-lvl-1");
codyImage.addEventListener("click", () => {
    score += clicValue;
    scoreElement.textContent = score.toString();
});

let cardPizzaElement = document.getElementById("card-pizza");
let costPizzaElement = document.getElementById("cost-pizza");
let costPizza = 10;
let lvlPizzaElement = document.getElementById("lvl-pizza");
let lvlPizza = 1;
lvlPizzaElement.textContent = lvlPizza;
costPizzaElement.textContent = costPizza;

cardPizzaElement.onclick = function () {
    if (lvlPizza <= 5 && score >= costPizza) {
        lvlPizza += 1;
        lvlPizzaElement.textContent = lvlPizza;
        score = score - costPizza;
        scoreElement.textContent = score.toString();
        let newClicValue = getClicValue() + 1;
        setClicValue(newClicValue); // Utilisez la fonction pour mettre à jour clicValue

        cardPizzaElement.onclick = function () {
            if (lvlPizza <= 5 && score >= costPizza) {
                lvlPizza += 1;
                lvlPizzaElement.textContent = lvlPizza.toString(); // Convertissez lvlPizza en chaîne.
                score = score - costPizza;
                scoreElement.textContent = score.toString(); // Convertissez score en chaîne.
                clicValue = clicValue + 1;

                switch (lvlPizza) {
                    case 1:
                        costPizza = 10;
                        costPizzaElement.textContent = costPizza.toString(); // Convertissez costPizza en chaîne.
                        break;
                    case 2:
                        costPizza = 50;
                        costPizzaElement.textContent = costPizza.toString();
                        break;
                    case 3:
                        costPizza = 100;
                        costPizzaElement.textContent = costPizza.toString();
                        break;
                    case 4:
                        costPizza = 200;
                        costPizzaElement.textContent = costPizza.toString();
                        break;
                    case 5:
                        costPizza = 500;
                        costPizzaElement.textContent = costPizza.toString();
                        break;
                    case 6:
                        lvlPizzaElement.textContent = "MAX";
                        costPizzaElement.textContent = "-";
                        codyImage.src = codyImages[0];
                        break;
                }
            }
        }
    }
}
