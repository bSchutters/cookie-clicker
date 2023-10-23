import '/src/css/style.css';
import { setupCounter } from "./counter.js";

let codyImage = document.getElementById("cody-lvl-1");
let scoreElement = document.getElementById("score");
let score = 0;
codyImage.addEventListener("click", () => {
  score += 1;
  scoreElement.textContent = score;
});
<<<<<<< HEAD
// Coddy count//
=======

>>>>>>> ce4761f7e3a71460ef39fae9ac74dd539ae06160
