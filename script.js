let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-input");
let customInput = document.getElementById("custom-input");

const percentButtons = document.querySelectorAll(".percent-list-items");
const totalTipAmount = document.querySelector(".tip-amount-per-person");
const totalPersonAmount = document.querySelector(".total-per-person-amount");
const resetButton = document.querySelector(".reset-button");

const errorMessage1 = document.querySelector(".error-text1");
const errorMessage2 = document.querySelector(".error-text2");

/* Calculations */

// Gets % value for each preset button and then calculates
percentButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let percentValue = e.target.innerHTML;
    percentValue = parseFloat(percentValue) / 100;

    let tipAmountPerPerson =
      (billInput.value / peopleInput.value) * percentValue;
    totalTipAmount.innerHTML = "$" + tipAmountPerPerson.toFixed(2);

    let totalPerPerson =
      billInput.value / peopleInput.value + tipAmountPerPerson;
    totalPersonAmount.innerHTML = "$" + totalPerPerson.toFixed(2);

    customInput.value = "";

    if (
      billInput.value == "0" ||
      billInput.value === "" ||
      peopleInput.value == "0" ||
      peopleInput.value === ""
    ) {
      totalTipAmount.innerHTML = "$0.00";
      totalPersonAmount.innerHTML = "$0.00";
    }
  });
});

//Calcualtes using custom %
customInput.addEventListener("keyup", cusPercentage);

function cusPercentage() {
  let cusPercentValue = parseFloat(customInput.value) / 100;

  let tipAmountPerPerson =
    (billInput.value / peopleInput.value) * cusPercentValue;
  totalTipAmount.innerHTML = "$" + tipAmountPerPerson.toFixed(2);

  let totalPerPerson = billInput.value / peopleInput.value + tipAmountPerPerson;
  totalPersonAmount.innerHTML = "$" + totalPerPerson.toFixed(2);
}

// Calculates total without tip
billInput.addEventListener("keyup", TotalPerPersonCalc);
peopleInput.addEventListener("keyup", TotalPerPersonCalc);

function TotalPerPersonCalc() {
  let totalPersonCalc = billInput.value / peopleInput.value;
  totalPersonAmount.innerHTML = "$" + totalPersonCalc.toFixed(2);
}

/* Input Verification Functions */
billInput.addEventListener("keyup", verifyBillInput);

function verifyBillInput() {
  if (billInput.value === "0" || billInput.value === "") {
    billInput.style.outline = "2px solid hsl(15, 38%, 57%)";
    errorMessage1.style.display = "block";
    totalTipAmount.innerHTML = "$0.00";
    totalPersonAmount.innerHTML = "$0.00";
  } else {
    billInput.style.outline = "2px solid hsl(172, 31%, 51%)";
    errorMessage1.style.display = "none";
  }

  if (peopleInput.value == "0" || peopleInput.value === "") {
    totalTipAmount.innerHTML = "$0.00";
    totalPersonAmount.innerHTML = "$0.00";
  }
}

peopleInput.addEventListener("keyup", verifyPeopleInput);

function verifyPeopleInput() {
  if (peopleInput.value === "0" || peopleInput.value === "") {
    peopleInput.style.outline = "2px solid hsl(15, 38%, 57%)";
    errorMessage2.style.display = "block";
    totalTipAmount.innerHTML = "$0.00";
    totalPersonAmount.innerHTML = "$0.00";
  } else {
    peopleInput.style.outline = "2px solid hsl(172, 31%, 51%)";
    errorMessage2.style.display = "none";
  }
}

customInput.addEventListener("keyup", () => {
  customInput.style.outline = "2px solid hsl(172, 31%, 51%)";
  customInput.style.caretColor = "hsl(172, 31%, 51%)";

  if (peopleInput.value == "0" || peopleInput.value === "") {
    totalTipAmount.innerHTML = "$0.00";
    totalPersonAmount.innerHTML = "$0.00";
  }
});

// Reset Button
resetButton.addEventListener("click", reset);

function reset() {
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";
  totalTipAmount.innerHTML = "$0.00";
  totalPersonAmount.innerHTML = "$0.00";
}
