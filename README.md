# The Komputer Store
## Table of contents
- [About](#about)
- [Description](#description)
  - [Bank](#bank)
  - [Work](#work)
  - [Laptop list](#laptop-list)
  - [Laptop details](#laptop-details)
- [Usage](#usage)

## About
The Komputer Store is a simple DOM manipulation demo that simulates a bank and
a computer store. The purpose of this project was to practice DOM manipulation
with vanilla JavaScript and writing some CSS to style the app.

## Description
The Komputer Store is a single page application that consists of four main
parts: bank, work, laptop list and laptop details.
![screenshot](https://github.com/mikkoluukko/thekomputerstore/blob/master/readme-image-1.png)

### Bank
#### Balance
The bank shows a “Bank” balance in NOK. This is the amount available to the 
user to buy a laptop.
#### Outstanding Loan (Only visible after taking a loan)
Shows the outstanding Loan value.
#### Get a loan
The Get a loan button will attempt to get a loan from the bank. When the get 
loan is clicked, it will show a popup box that allows the user to enter an 
amount.
#### Constraints:
- The user cannot get a loan more than double of their bank balance.
a. i.e. If user has 500 they cannot get a loan greater than 1000.
- The user cannot get more than one bank loan before buying a computer.
- Once the user has a loan, they must pay it back BEFORE getting another loan

### Work
#### Pay
The pay amount in NOK. Shows how much money the user has earned by “working”. 
This money is NOT part of their bank balance.
#### Bank Button
The bank button must transfer the money from the user's Pay balance, to their 
Bank balance. If the user has an outstanding loan, 10% of their salary is first 
deducted and transferred to the outstanding Loan amount. The balance after the 
10% deduction is then transferred to their bank account.
#### Work button
The work button increases the user's Pay balance by 100 NOK on each click.
#### Repay Loan button
Once the user has a loan, a new button will appear. Upon clicking this button, 
the full value of the user's current Pay amount will go towards the outstanding 
loan and NOT their bank account.

### Laptop list
A dropdown menu that shows 4 different laptops. Each laptop has a unique name, 
price, description, feature list and image. The feature list of the selected 
laptop is displayed here. Changing a laptop updates the laptop details section 
with the information for that selected laptop.

### Laptop details
The large box at the bottom is where the image, name and description as well as 
the price of the laptop are be displayed.
#### Buy Now button
The buy now button is the final action of the website. This button will attempt 
to “Buy” a laptop and validate whether the bank balance is sufficient to 
purchase the selected laptop. If the user does not have enough money in the 
“Bank”, a message is shown that they cannot afford the laptop. If the user has 
sufficient “Money” in the account, the amount is deducted from the bank and
the user receives a message that they are now the owner of the new laptop!

## Usage
In order to run this application you could for example copy this repository and 
use [Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 
to run [index.html](./index.html).