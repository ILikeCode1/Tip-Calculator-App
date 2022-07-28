let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-input");
let customInput = document.getElementById("custom-input");

let percentButtons = document.querySelectorAll(".percent-list-items");
let totalTipAmount = document.querySelector(".total-tip-amount");
let totalPersonAmount = document.querySelector(".total-person-amount");
let resetButton = document.querySelector(".reset-button");

let errorMessage1 = document.querySelector(".error-text1");
let errorMessage2 = document.querySelector(".error-text2");

// Calculations




// Input Functions

billInput.addEventListener("keyup", verifyBillInput);

function verifyBillInput() {
  if (billInput.value === "0" || billInput.value === "") {
    billInput.style.outline = "2px solid hsl(15, 38%, 57%)";
    errorMessage1.style.display = "block";
  } else {
    billInput.style.outline = "2px solid hsl(172, 31%, 51%)";
    errorMessage1.style.display = "none";
  }
}

peopleInput.addEventListener("keyup", verifyPeopleInput);

function verifyPeopleInput() {
  if (peopleInput.value === "0" || peopleInput.value === "") {
    peopleInput.style.outline = "2px solid hsl(15, 38%, 57%)";
    errorMessage2.style.display = "block";
  } else {
    peopleInput.style.outline = "2px solid hsl(172, 31%, 51%)";
    errorMessage2.style.display = "none";
  }
}

customInput.addEventListener("keyup", () => {
  customInput.style.outline = "2px solid hsl(172, 31%, 51%)";
  customInput.style.caretColor = "hsl(172, 31%, 51%)";
});


// Reset Button

resetButton.addEventListener("click", reset);

function reset() {
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";
  tipTotalAmount.innerHTML = "$0.00";
  totalPersonAmount.innerHTML = "$0.00";
}
