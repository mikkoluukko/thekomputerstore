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

const laptops = [
    {
        "name" : "Intol Celeroon E10",
        "price" : 1500,
        "features" : [
            "It has a screen", 
            "There's a keyboard", 
            "(Some keys might be missing)"
        ],
        "description" : "This laptop will turn on! It is perfect for the first " +
            "time user who likes to have a computer around!"
    },
    {
        "name" : "Intol Celeroon X3M",
        "price" : 2000,
        "features" : [
            "14-inch screen", 
            "Integrated speakers", 
            "Bluetooth"
        ],
        "description" : "Extremely stylish computer! Perfect for the user " +
            "who values style over functionality!"
    },
    {
        "name" : "Linovo Stinkpad",
        "price" : 2500,
        "features" : [
            "15-inch screen", 
            "Odor included", 
            "Ethernet port"
        ],
        "description" : "Smelliest business laptop around! Perfect for the user " +
            "with a nose for quality!"
    },
    {
        "name" : "PowerPotato 3000",
        "price" : 3000,
        "features" : [
            "Hologram display", 
            "Thought control input", 
            "Weight only 0.1 kg"
        ],
        "description" : "Half potato, half science fiction! Perfect for the " +
            "power user who desires the best possible quality!"
    }
];

for (const [index, laptop] of laptops.entries()) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = laptop.name;
    laptopSelect.appendChild(option);
}

let selectedLaptop = laptops[Number(laptopSelect[laptopSelect.selectedIndex].value)];
updateSelectedLaptop();

loanButton.onclick = function() {
    if (loansWithdrawn > computersBought) {
        alert("You cannot get more than one bank loan before buying a computer.");
    } else if (loanAmount > 0) {
        alert("You must pay your earlier loan before getting another one.");
    } else {
        let message = "Enter amount of loan you wish to withdraw:";    
        let loanAttempt = Number(window.prompt(message, 0));
        if (loanAttempt > 2 * balance) {
            alert("You cannot get a loan more than double of your bank balance.");
        } else if (loanAttempt != null && loanAttempt > 0) {
            loansWithdrawn++;
            loanAmount = loanAttempt;
            balance += loanAmount;
            loanDiv.style.display = "block";
            payLoanButton.style.display = "inline";
            updateAmountTexts();
        }
    }
}

bankButton.onclick = function() {
    if (loanAmount > 0) {
        loanAmount -= 0.1 * payAmount;
        balance += 0.9 * payAmount;
    } else {
        balance += payAmount;
    }    
    payAmount = 0;
    updateAmountTexts();
}

workButton.onclick = function() {
    payAmount += 100;
    updateAmountTexts();  
}

payLoanButton.onclick = function() {
    if (loanAmount - payAmount >= 0) {
        loanAmount -= payAmount;
        payAmount = 0;
    } else {
        payAmount -= loanAmount;
        loanAmount = 0;        
    }
    updateAmountTexts();  
}

laptopSelect.onchange = function() {
    selectedLaptop = laptops[Number(laptopSelect[laptopSelect.selectedIndex].value)];
    updateSelectedLaptop();
}

buyButton.onclick = function() {
    if (balance < laptopPrice) {
        alert("You don't enough money to buy this laptop.")
    } else {
        alert("You bought " + selectedLaptop.name);
        balance -= laptopPrice;
        computersBought++;
    }    
    updateAmountTexts();  
}

function updateSelectedLaptop() {
    laptopPrice = selectedLaptop.price;
    laptopFeatures.innerHTML = "";
    for (feature of selectedLaptop.features) {
        laptopFeatures.innerHTML += feature + "<br>";
    }
    laptopName.innerHTML = selectedLaptop.name;
    laptopDescription.innerHTML = selectedLaptop.description;
    laptopPriceText.innerHTML = selectedLaptop.price;
}

function updateAmountTexts() {
    loanAmountSpan.innerHTML = loanAmount;
    balanceSpan.innerHTML = balance;
    paySpan.innerHTML = payAmount;
}