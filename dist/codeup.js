"use strict";
// CODEUP APPENDIX - GENERAL CODING CHALLENGES:
let passwordSpecs = [];
let passwordLength;
let passwordSpecialChars;
let passwordDigits;
let passwordCase;
const runPasswordGeneratorScript = () => {
    alert("Welcome to random password generator, please answer the following questions in order to properly generate your password with your desired specifications.");
    const passwordLengthPrompt = () => {
        passwordLength = +prompt("Please enter the length of your password (must contain at least 10 characters):");
        if (passwordLength >= 10) {
            passwordSpecs.push(passwordLength);
        }
        else {
            alert("Incorrect password length!");
            passwordLengthPrompt();
        }
    };
    passwordLengthPrompt();
    const passwordSpecialCharsPrompt = () => {
        passwordSpecialChars = +prompt("How many special characters would you like in your password? (enter '0' if none):");
        if (passwordSpecialChars >= 0) {
            passwordSpecs.push(passwordSpecialChars);
        }
        else {
            alert("Incorrect input!");
            passwordSpecialCharsPrompt();
        }
    };
    passwordSpecialCharsPrompt();
    const passwordDigitsPrompt = () => {
        passwordDigits = +prompt("How many digits would you like in your password? (enter '0' if none):");
        if (passwordDigits >= 0) {
            passwordSpecs.push(passwordDigits);
        }
        else {
            alert("Incorrect input!");
            passwordDigitsPrompt();
        }
    };
    passwordDigitsPrompt();
    const passwordCasePrompt = () => {
        passwordCase = prompt("Would you like your password to include upper case, lower case, or both types of cases in your password?");
        passwordCase = passwordCase.toLowerCase().trim().replace(" ", "");
        if (passwordCase === "uppercase" || "lowercase" || "both") {
            passwordSpecs.push(passwordCase);
        }
        else {
            alert("Incorrect input!");
            passwordCasePrompt();
        }
    };
    passwordCasePrompt();
    console.log(passwordSpecs);
};
runPasswordGeneratorScript();
const buttonTriggerPasswordGeneratorScript = document.querySelector("button");
buttonTriggerPasswordGeneratorScript.addEventListener("click", runPasswordGeneratorScript);
