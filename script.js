let billTotalAmount = document.getElementById("bill-input");
let peopleTotalAmount = document.getElementById("people-input");
let customPercentage = document.getElementById("custom-input");

let percentButtons = document.querySelectorAll(".percent-list-items");
let tipTotalAmount = document.querySelector(".tip-Total-Amount");
let totalPersonAmount = document.querySelector(".total-person-amount");
let resetButton = document.querySelector(".reset-button");



// for reset button
resetButton.addEventListener("click", reset);
function reset() {
  billTotalAmount.value = "";
  peopleTotalAmount.value = "";
  customPercentage.value = "";
  tipTotalAmount.textContent = "$0.00";
  totalPersonAmount.textContent = "$0.00";
}
