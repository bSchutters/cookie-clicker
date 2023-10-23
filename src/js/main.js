import '../css/style.css';
// VAR GEN
let scoreElement = document.getElementById("score");

let score = 1000000000000000;
let multiplier = 0;
let clicValue = 0;

// BUTTON CODY
let codyImage = document.getElementById("cody-lvl-1");
codyImage.addEventListener("click", () => {
    score += clicValue;
    scoreElement.textContent = score;
});

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
    }

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
            break;
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
    }

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
            break;
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
    }

    switch (lvlKebab) {
        case 1:
            costKebab = 200000;
            costKebabElement.textContent = costKebab;
            break;
        case 2:
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
            break;
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
    }

    switch (lvlMilk) {
        case 1:
            costMilk = 1000000;
            costMilkElement.textContent = costMilk;
            break;
        case 2:
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
            break;
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
    }

    switch (lvlMuffin) {
        case 1:
            costMuffin = 5000000;
            costMuffinElement.textContent = costMuffin;
            break;
        case 2:
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
            break;
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
    }

    switch (lvlSandwich) {
        case 1:
            costSandwich = 100000000;
            costSandwichElement.textContent = costSandwich;
            break;
        case 2:
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
            break;
    }
};
