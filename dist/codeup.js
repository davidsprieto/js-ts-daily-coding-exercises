"use strict";
// CODEUP APPENDIX - GENERAL CODING CHALLENGES:
let passwordLength;
let passwordSpecialChars;
let passwordDigits;
let passwordCase;
let password = [];
// Generate random password script:
const runPasswordGeneratorScript = () => {
    alert("Welcome to random password generator, please answer the following questions in order to properly generate your password with your desired specifications.");
    const passwordLengthPrompt = () => {
        passwordLength = +prompt("Please enter the length of your password (must contain at least 10 characters):");
        if (passwordLength < 10) {
            alert("Incorrect password length!");
            passwordLengthPrompt();
        }
    };
    passwordLengthPrompt();
    const passwordSpecialCharsPrompt = () => {
        passwordSpecialChars = +prompt("How many special characters would you like in your password? (enter '0' if none):");
        if (passwordSpecialChars < 0) {
            alert("Incorrect input!");
            passwordSpecialCharsPrompt();
        }
    };
    passwordSpecialCharsPrompt();
    const passwordDigitsPrompt = () => {
        passwordDigits = +prompt("How many digits would you like in your password? (enter '0' if none):");
        if (passwordDigits < 0) {
            alert("Incorrect input!");
            passwordDigitsPrompt();
        }
    };
    passwordDigitsPrompt();
    const passwordCasePrompt = () => {
        passwordCase = prompt("Would you like your password to include upper case, lower case, or both types of cases in your password?");
        passwordCase = passwordCase.toLowerCase().trim().replace(" ", "");
        if (passwordCase !== "uppercase" && passwordCase !== "lowercase" && passwordCase !== "both") {
            alert("Incorrect input!");
            passwordCasePrompt();
        }
    };
    passwordCasePrompt();
    const randomNumber = () => {
        return Math.floor(Math.random() * 27);
    };
    const randomSpecialChar = (amount) => {
        const specialCharsList = "!@#$%^&*()_-+<>?,./{}[]|~=";
        while (password.length !== amount) {
            password.push(specialCharsList.charAt(randomNumber()));
        }
    };
    const randomDigits = (amount) => {
        while (password.length !== (password.length + amount)) {
            password.push(Math.floor(Math.random() * 10));
        }
    };
    const randomLetter = () => {
        const lowerLetterList = "abcdefghijklmnopqrstuvwxyz";
        const upperLetterList = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
        if (passwordCase === "uppercase") {
            while (password.length !== passwordLength) {
                password.push(upperLetterList.charAt(randomNumber()));
            }
        }
        else if (passwordCase === "lowercase") {
            while (password.length !== passwordLength) {
                password.push(lowerLetterList.charAt(randomNumber()));
            }
        }
        else {
            while (password.length !== passwordLength) {
                password.push(upperLetterList.charAt(randomNumber()));
                password.push(lowerLetterList.charAt(randomNumber()));
            }
        }
    };
    const shufflePassword = (array) => {
        const newArray = [...array];
        const length = newArray.length;
        for (let i = 0; i < length; i++) {
            const randomPosition = Math.floor(newArray.length - i);
            const randomValue = newArray.splice(randomPosition, 1);
            newArray.push(...randomValue);
        }
        return newArray.join('');
    };
    if (passwordSpecialChars > 0) {
        randomSpecialChar(passwordSpecialChars);
    }
    if (passwordDigits > 0) {
        randomDigits(passwordDigits);
    }
    randomLetter();
    return shufflePassword(password);
};
runPasswordGeneratorScript();
const buttonTriggerPasswordGeneratorScript = document.querySelector("button");
buttonTriggerPasswordGeneratorScript.addEventListener("click", runPasswordGeneratorScript);
