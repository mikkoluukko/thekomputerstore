import { laptopData } from './laptopData.js';

const loanButton = document.getElementById("loan-button");
const balanceSpan = document.getElementById("bank-balance");
const loanDiv = document.getElementById("loan-div");
const loanAmountSpan = document.getElementById("loan-amount");

const paySpan = document.getElementById("pay-span");
const bankButton = document.getElementById("bank-button");
const workButton = document.getElementById("work-button");
const payLoanButton = document.getElementById("pay-loan-button");

const laptopSelect = document.getElementById("laptop-select");
const laptopFeatures = document.getElementById("laptop-features");

const laptopImage = document.getElementById("laptop-image");
const laptopName = document.getElementById("laptop-name");
const laptopDescription = document.getElementById("laptop-description");
const laptopPriceText = document.getElementById("laptop-price");
const buyButton = document.getElementById("buy-button");

let balance = 0;
let loanAmount = 0;
let loansWithdrawn = 0;
let computersBought = 0;
let payAmount = 0;
let laptopPrice = 0;
updateAmountTexts();

for (const [index, laptop] of laptopData.entries()) {
  let option = document.createElement("option");
  option.value = index;
  option.innerHTML = laptop.name;
  laptopSelect.appendChild(option);
}

let selectedLaptop =
  laptopData[Number(laptopSelect[laptopSelect.selectedIndex].value)];
updateSelectedLaptop();

loanButton.onclick = () => {
  if (loansWithdrawn > computersBought) {
    alert("You cannot get more than one bank loan before buying a computer.");
  } else if (loanAmount > 0) {
    alert("You must pay your earlier loan before getting another one.");
  } else {
    getLoan();
  }
};

function getLoan() {
  let loanAttempt = Number(
    window.prompt("Enter amount of loan you wish to withdraw:", 0)
  );
  if (loanAttempt > 2 * balance) {
    alert("You cannot get a loan more than double of your bank balance.");
  } else if (loanAttempt != null && loanAttempt > 0) {
    loansWithdrawn++;
    loanAmount = loanAttempt;
    balance += loanAmount;
    loanDiv.style.display = "block";
    payLoanButton.style.display = "inline";
    updateAmountTexts();
  } else {
    alert("Invalid loan amount.");
  }
}

bankButton.onclick = () => {
  if (loanAmount > 0) {
    loanAmount -= 0.1 * payAmount;
    balance += 0.9 * payAmount;
  } else {
    balance += payAmount;
  }
  payAmount = 0;
  updateAmountTexts();
};

workButton.onclick = () => {
  payAmount += 100;
  updateAmountTexts();
};

payLoanButton.onclick = () => {
  if (loanAmount - payAmount >= 0) {
    loanAmount -= payAmount;
    payAmount = 0;
  } else {
    payAmount -= loanAmount;
    loanAmount = 0;
  }
  updateAmountTexts();
};

laptopSelect.onchange = () => {
  selectedLaptop =
    laptopData[Number(laptopSelect[laptopSelect.selectedIndex].value)];
  updateSelectedLaptop();
};

buyButton.onclick = () => {
  if (balance < laptopPrice) {
    alert("You don't have enough money to buy this laptop.");
  } else {
    alert("You bought " + selectedLaptop.name);
    balance -= laptopPrice;
    computersBought++;
  }
  updateAmountTexts();
};

function updateSelectedLaptop() {
  laptopPrice = selectedLaptop.price;
  laptopFeatures.innerHTML = "";
  for (const feature of selectedLaptop.features) {
    laptopFeatures.innerHTML += feature + "<br>";
  }
  laptopImage.src = selectedLaptop.image;
  laptopName.innerHTML = selectedLaptop.name;
  laptopDescription.innerHTML = selectedLaptop.description;
  laptopPriceText.innerHTML = selectedLaptop.price;
}

function updateAmountTexts() {
  loanAmountSpan.innerHTML = loanAmount;
  balanceSpan.innerHTML = balance;
  paySpan.innerHTML = payAmount;
}
