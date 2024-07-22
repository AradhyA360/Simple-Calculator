const buttonsE1 = document.querySelectorAll("button");
const displayE1 = document.getElementById("input");
let currentValue = "";

buttonsE1.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (button.classList.contains("clear")) {
      clearResult();
    } else if (button.classList.contains("equals")) {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
});

function clearResult() {
  currentValue = "";
  displayE1.value = currentValue;
}

function calculateResult() {
  try {
    currentValue = eval(currentValue).toString();
    displayE1.value = currentValue;
  } catch {
    displayE1.value = "Error";
  }
}

function appendValue(buttonValue) {
  if (displayE1.value === "Error") {
    displayE1.value = "";
  }
  currentValue += buttonValue;
  displayE1.value = currentValue;
}
