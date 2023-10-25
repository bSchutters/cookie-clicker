import "../css/style.css";

import codyLvl1 from "../assets/images/Cody3D/png/Dreaming-Cody_3D.png";
import codyLvl2 from "../assets/images/Cody3D/png/Furious-Cody_3D.png";
import codyLvl3 from "../assets/images/Cody3D/png/Angry-Cody_3D.png";
import codyLvl4 from "../assets/images/Cody3D/png/Devil-Cody_3D.png";
import codyLvl5 from "../assets/images/Cody3D/png/Surprised-Cody_3D.png";
import codyLvl6 from "../assets/images/Cody3D/png/Poker-Cody_3D.png";
import codyLvl7 from "../assets/images/Cody3D/png/Happy-Cody_3D.png";
import codyLvl8 from "../assets/images/Cody3D/png/Smile-Cody_3D.png";
import codyLvl9 from "../assets/images/Cody3D/png/Laugh-Cody_3D.png";
import codyLvl10 from "../assets/images/Cody3D/png/Wink-Cody_3D.png";
import codyLvl11 from "../assets/images/Cody3D/png/Heart-Cody_3D.png";

// VAR GEN
let scoreElement = document.getElementById("score");
let easterEgg = document.getElementById("clic-easteregg");

let score = 500;
let clicValue = 0;
let autoClicBoolean = false;
let autoClicValue = 1;

// BUTTON CODY
let codyImage = document.getElementById("cody-lvl-1");
codyImage.addEventListener("click", () => {
  score += clicValue;
  scoreElement.textContent = score;
});

function autoClicker() {
  if (autoClicBoolean === true) {
    function autoClickerIncr() {
      score = score + autoClicValue;
      scoreElement.textContent = score;
    }
    setInterval(autoClickerIncr, 1000);
  }
}

/// LEVEL 1 - PIZZA

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
    scoreElement.textContent = score;
    clicValue = clicValue + 1;

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

/// LEVEL 2 - BURGER

let cardBurgerElement = document.getElementById("card-burger");
let costBurgerElement = document.getElementById("cost-burger");
let costBurger = 100;
let lvlBurgerElement = document.getElementById("lvl-burger");
let lvlBurger = 1;
lvlBurgerElement.textContent = lvlBurger;
costBurgerElement.textContent = costBurger;

cardBurgerElement.onclick = function () {
  if (lvlBurger <= 5 && score >= costBurger) {
    lvlBurger += 1;
    lvlBurgerElement.textContent = lvlBurger;
    score = score - costBurger;
    scoreElement.textContent = score;
    clicValue = clicValue + 2;

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
  }
};

/// LEVEL 3 - COFFEE

let cardCoffeeElement = document.getElementById("card-coffee");
let costCoffeeElement = document.getElementById("cost-coffee");
let costCoffee = 500;
let lvlCoffeeElement = document.getElementById("lvl-coffee");
let lvlCoffee = 1;
lvlCoffeeElement.textContent = lvlCoffee;
costCoffeeElement.textContent = costCoffee;

cardCoffeeElement.onclick = function () {
  if (lvlCoffee <= 5 && score >= costCoffee) {
    lvlCoffee += 1;
    lvlCoffeeElement.textContent = lvlCoffee;
    score = score - costCoffee;
    scoreElement.textContent = score;
    clicValue = clicValue + 5;

    switch (lvlCoffee) {
      case 1:
        costCoffee = 500;
        costCoffeeElement.textContent = costCoffee;
        break;
      case 2:
        autoClicBoolean = true;
        autoClicker();
        costCoffee = 1000;
        costCoffeeElement.textContent = costCoffee;
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

/// LEVEL 4 - DORAYAKI

let cardDorayakiElement = document.getElementById("card-dorayaki");
let costDorayakiElement = document.getElementById("cost-dorayaki");
let costDorayaki = 1500;
let lvlDorayakiElement = document.getElementById("lvl-dorayaki");
let lvlDorayaki = 1;
lvlDorayakiElement.textContent = lvlDorayaki;
costDorayakiElement.textContent = costDorayaki;

cardDorayakiElement.onclick = function () {
  if (lvlDorayaki <= 5 && score >= costDorayaki) {
    lvlDorayaki += 1;
    lvlDorayakiElement.textContent = lvlDorayaki;
    score = score - costDorayaki;
    scoreElement.textContent = score;
    clicValue = clicValue + 50;

    switch (lvlDorayaki) {
      case 1:
        costDorayaki = 1000;
        costDorayakiElement.textContent = costDorayaki;
        break;
      case 2:
        autoClicValue = autoClicValue + 2;
        costDorayaki = 2000;
        costDorayakiElement.textContent = costDorayaki;
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
/// LEVEL 5 - FRIES

let cardFriesElement = document.getElementById("card-fries");
let costFriesElement = document.getElementById("cost-fries");
let costFries = 5000;
let lvlFriesElement = document.getElementById("lvl-fries");
let lvlFries = 1;
lvlFriesElement.textContent = lvlFries;
costFriesElement.textContent = costFries;

cardFriesElement.onclick = function () {
  if (lvlFries <= 5 && score >= costFries) {
    lvlFries += 1;
    lvlFriesElement.textContent = lvlFries;
    score = score - costFries;
    scoreElement.textContent = score;
    clicValue = clicValue + 150;

    switch (lvlFries) {
      case 1:
        costFries = 5000;
        costFriesElement.textContent = costFries;
        break;
      case 2:
        autoClicValue = autoClicValue + 10;
        costFries = 10000;
        costFriesElement.textContent = costFries;
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

/// LEVEL 6 - HOT DOG

let cardHotDogElement = document.getElementById("card-HotDog");
let costHotDogElement = document.getElementById("cost-hotTog");
let costHotDog = 10000;
let lvlHotDogElement = document.getElementById("lvl-HotDog");
let lvlHotDog = 1;
lvlHotDogElement.textContent = lvlHotDog;
costHotDogElement.textContent = costHotDog;

cardHotDogElement.onclick = function () {
  if (lvlHotDog <= 5 && score >= costHotDog) {
    lvlHotDog += 1;
    lvlHotDogElement.textContent = lvlHotDog;
    score = score - costHotDog;
    scoreElement.textContent = score;
    clicValue = clicValue + 1000;

    switch (lvlHotDog) {
      case 1:
        costHotDog = 10000;
        costHotDogElement.textContent = costHotDog;
        break;
      case 2:
        autoClicValue = autoClicValue + 100;
        costHotDog = 30000;
        costHotDogElement.textContent = costHotDog;
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

/// LEVEL 7-ICE CREAM

let cardIceCreamElement = document.getElementById("card-ice");
let costIceCreamElement = document.getElementById("cost-ice");
let costIceCream = 20000;
let lvlIceCreamElement = document.getElementById("lvl-ice");
let lvlIceCream = 1;
lvlIceCreamElement.textContent = lvlIceCream;
costIceCreamElement.textContent = costIceCream;

cardIceCreamElement.onclick = function () {
  if (lvlIceCream <= 5 && score >= costIceCream) {
    lvlIceCream += 1;
    lvlIceCreamElement.textContent = lvlIceCream;
    score = score - costIceCream;
    scoreElement.textContent = score;
    clicValue = clicValue + 1500;

    switch (lvlIceCream) {
      case 1:
        costIceCream = 50000;
        costIceCreamElement.textContent = costIceCream;
        break;
      case 2:
        autoClicValue = autoClicValue + 1000;
        costIceCream = 100000;
        costIceCreamElement.textContent = costIceCream;
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

/// LEVEL 8 - KEBAB

let cardKebabElement = document.getElementById("card-kebab");
let costKebabElement = document.getElementById("cost-kebab");
let costKebab = 200000;
let lvlKebabElement = document.getElementById("lvl-kebab");
let lvlKebab = 1;
lvlKebabElement.textContent = lvlKebab;
costKebabElement.textContent = costKebab;

cardKebabElement.onclick = function () {
  if (lvlKebab <= 5 && score >= costKebab) {
    lvlKebab += 1;
    lvlKebabElement.textContent = lvlKebab;
    score = score - costKebab;
    scoreElement.textContent = score;
    clicValue = clicValue + 1000;

    switch (lvlKebab) {
      case 1:
        costKebab = 200000;
        costKebabElement.textContent = costKebab;
        break;
      case 2:
        autoClicValue = autoClicValue + 2500;
        costKebab = 400000;
        costKebabElement.textContent = costKebab;
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

/// LEVEL 9 - MILK

let cardMilkElement = document.getElementById("card-milk");
let costMilkElement = document.getElementById("cost-milk");
let costMilk = 1000000;
let lvlMilkElement = document.getElementById("lvl-milk");
let lvlMilk = 1;
lvlMilkElement.textContent = lvlMilk;
costMilkElement.textContent = costMilk;

cardMilkElement.onclick = function () {
  if (lvlMilk <= 5 && score >= costMilk) {
    lvlMilk += 1;
    lvlMilkElement.textContent = lvlMilk;
    score = score - costMilk;
    scoreElement.textContent = score;
    clicValue = clicValue + 2000;

    switch (lvlMilk) {
      case 1:
        costMilk = 1000000;
        costMilkElement.textContent = costMilk;
        break;
      case 2:
        autoClicValue = autoClicValue + 10000;
        costMilk = 2000000;
        costKMilk;
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

/// LEVEL 10 - MUFFIN

let cardMuffinElement = document.getElementById("card-muffin");
let costMuffinElement = document.getElementById("cost-muffin");
let costMuffin = 200000;
let lvlMuffinElement = document.getElementById("lvl-muffin");
let lvlMuffin = 1;
lvlMuffinElement.textContent = lvlMuffin;
costMuffinElement.textContent = costMuffin;

cardMuffinElement.onclick = function () {
  if (lvlMuffin <= 5 && score >= costMuffin) {
    lvlMuffin += 1;
    lvlMuffinElement.textContent = lvlMuffin;
    score = score - costMuffin;
    scoreElement.textContent = score;
    clicValue = clicValue + 5000;

    switch (lvlMuffin) {
      case 1:
        costMuffin = 5000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 2:
        autoClicValue = autoClicValue + 100000;
        costMuffin = 10000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 3:
        costMuffin = 20000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 4:
        costMuffin = 40000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 5:
        costMuffin = 80000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 6:
        lvlMuffinElement.textContent = "MAX";
        costMuffinElement.textContent = "-";
        codyImage.src = codyLvl10;
        break;
    }
  }
};

/// LEVEL 11 - SANDWICH

let cardSandwichElement = document.getElementById("card-sandwich");
let costSandwichElement = document.getElementById("cost-sandwich");
let costSandwich = 200000;
let lvlSandwichElement = document.getElementById("lvl-sandwich");
let lvlSandwich = 1;
lvlSandwichElement.textContent = lvlSandwich;
costSandwichElement.textContent = costSandwich;

cardSandwichElement.onclick = function () {
  if (lvlSandwich <= 5 && score >= costSandwich) {
    lvlSandwich += 1;
    lvlSandwichElement.textContent = lvlSandwich;
    score = score - costSandwich;
    scoreElement.textContent = score;
    clicValue = clicValue + 50000;

    switch (lvlSandwich) {
      case 1:
        costSandwich = 100000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 2:
        autoClicValue = autoClicValue + 250000;
        costSandwich = 1000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 3:
        costSandwich = 10000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 4:
        costSandwich = 100000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 5:
        costSandwich = 1000000000000;
        costSandwichElement.textContent = costSandwich;
        break;
      case 6:
        lvlSandwichElement.textContent = "MAX";
        costSandwichElement.textContent = "-";
        codyImage.src = codyLvl11;
        break;
    }
  }
};
