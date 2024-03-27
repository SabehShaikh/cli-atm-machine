#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Welcome to your ATM Made By Sabeh Shaikh!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number:",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash (preset amounts)"],
    });
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter your amount",
            type: "number",
        });
        if (amountAns.amount > myBalance) {
            console.log(`Insufficient funds: You do not have enough balance.`);
        }
        else {
            // myBalance = myBalance - amountAns.amount;
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash (preset amounts)") {
        let fastCashOptions = await inquirer.prompt({
            name: "fastCash",
            message: "Select a preset amount:",
            type: "list",
            choices: ["1000", "2000", "5000"],
        });
        if (fastCashOptions.fastCash > myBalance) {
            console.log(`Insufficient funds: You do not have enough balance for ${fastCashOptions.fastCash}`);
        }
        else {
            myBalance -= fastCashOptions.fastCash;
            console.log(`You have withdrawn ${fastCashOptions.fastCash}.`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code!");
}
