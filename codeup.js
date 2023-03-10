// CODEUP APPENDIX - GENERAL CODING CHALLENGES:


// 03/07/2023 - Narcissistic Numbers:
// A narcissistic number is a non-negative integer (n) with m digits where the sum of all the individual digits raised to the power m is equal to n.
// TODO: Write a script to generate and output the first 25 narcissistic numbers:

// FIRST SOLUTION - INCOMPLETE. I KNEW THERE WAS A BETTER/EASIER WAY TO ACCOMPLISH THE TASK. SEE SECOND SOLUTION:
/*
const sumOfOneDigitToM = (number) => {
  if (number === Math.pow(number, 1)) {
    addNumberToArray(number);
  }
}

const sumOfTwoDigitsToM = (number) => {
  let first = Math.floor(number / 10);
  let second = Math.floor(number % 10);
  let result = Math.pow(first, 2) + Math.pow(second, 2);

  if (number === result) {
    addNumberToArray(number)
  }
}

const sumOfThreeDigitsToM = (number) => {
  let first = Math.floor(number / 100);
  let second = Math.floor((number % 100) / 10);
  let third = Math.floor((number % 100) % 10);
  let result = Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3);

  if (number === result) {
    addNumberToArray(number);
  }
}
 */

/*
const sumOfFourDigitsToM = (number) => {
  let first = Math.floor(number / 1000);
  let second = Math.floor((number % 1000) / 100);
  let third = Math.floor(((number % 1000) / 10) % 10);
  let fourth = Math.floor((number % 1000) % 10);
  let result = Math.pow(first, 4) + Math.pow(second, 4) + Math.pow(third, 4) + Math.pow(fourth, 4);

  if (number === result) {
    addNumberToArray(number);
  }
}

while (count < 17) {
  for (let i = 0; i <= 9475; i++) {
    if (i <= 9) {
      sumOfOneDigitToM(i);
    } else if (i <= 99) {
      sumOfTwoDigitsToM(i);
    } else if (i <= 999) {
      sumOfThreeDigitsToM(i);
    } else if (i < 9999) {
      sumOfFourDigitsToM(i);
    }
  }
}

console.log(arrayOfNarcissisticNumbers);
 */

// SECOND SOLUTION:
/*
let num = 0;
let count = 0;
let arrayOfNarcissisticNumbers = [];

while (count < 25) {
  let array = String(num).split('');
  let length = array.length;
  let total = 0;
  for (const number of array) {
    total += Math.pow(+number, length);
  }
  if (total === num) {
    arrayOfNarcissisticNumbers.push(num);
    count++;
  }
  num++;
}

console.log(arrayOfNarcissisticNumbers);
 */


// 03/09/2023 - Maximum Subsequence Sum:
// TODO: Write a function that, given an array of both positive and negative integers, will find the maximum sum of
//  contiguous numbers within that array. Some examples would be:
// Input: -2, -3, 4, -1, -2, 1, 5, -3
// Output: 7
//
// Input: −7, 1, −3, 4, −1, 2, 1, −5, 4
// Output: 6

/*
const maximumSubsequenceSum = (array) => {
  let i, sum;
  let j = 1;
  let index = 0;
  let calculating = true;
  let max = array.at(0);

  while (calculating) {
    sum = 0;
    for (i = index; i <= j && j < array.length; i++) {
      sum += array.at(i);
    }
    if (sum > max) {
      max = sum;
    }
    if (j === array.length - 1) {
      index++;
      j = index;
    }
    j++;
    if (index === array.length - 1) {
      calculating = false;
    }
  }
  return max;
}

let array = [-7, 1, -3, 4, -1, 2, 1, -5, 4];
maximumSubsequenceSum(array);
 */

// 03/10/2023 - String Reversal:
// TODO: Write a function that takes in a string variable and returns that string reversed.
//  While most languages provide their own built-in functions to do this, the point of this challenge is to write your own.

// First Solution:
let string = "Hello, my name is David.";
let reverse;

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

reverse = reverseString(string);
console.log(reverse);


// Another Solution:
let s = "I am a computer science student seeking to master my craft of software development.";

const reverseStringAgain = (s) => {
  let r = '';
  for (let i = s.length - 1; i >= 0; i--) {
    r += s.at(i);
  }
  return r;
}

let r = reverseStringAgain(s);
console.log(r);
