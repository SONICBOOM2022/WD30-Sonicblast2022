const result = document.getElementById("result");
const clear = document.getElementById("clear");
const keys = document.querySelectorAll(".number, .operator");
const calculate = document.getElementById("calculate");

let currentCalculation = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (key.classList.contains("number")) {
      currentCalculation += key.textContent;
      result.value = currentCalculation;
    }
    if (key.classList.contains("operator")) {
      currentCalculation += " " + key.textContent + " ";
      result.value = currentCalculation;
    }
  });
});

clear.addEventListener("click", () => {
  currentCalculation = "";
  result.value = "";
});

// calculate.addEventListener("click")
