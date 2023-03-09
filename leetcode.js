// DAILY LEETCODE CODING EXERCISES:


// 01/08/2023 - #1480. Running Sum of 1D Array:
//
// let nums = [1, 2, 3, 4];
//
// const runningSum = (nums) => {
//     for (let i = nums.length - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             nums[i] += nums[j];
//         }
//     }
//     return nums;
// }
//
// console.log(runningSum(nums));


// 01/09/2023 - #724. Find Pivot Index:
//
// let nums = [-1, -1, 0, 0, -1, -1];
//
// const pivotIndex = (nums) => {
//     let counting = true;
//     let index = 0;
//
//     while (counting) {
//         let leftSum = 0;
//         let rightSum = 0;
//
//         for (let j = 0; j < index; j++) {
//             leftSum += nums[j];
//         }
//
//         for (let i = nums.length - 1; i > index; i--) {
//             rightSum += nums[i];
//         }
//
//         if (leftSum === rightSum) {
//             return index;
//         }
//
//         if (index === nums.length - 1) {
//             return -1;
//         }
//         index++;
//     }
// }
//
// console.log(pivotIndex(nums));


// 01/21/2023 - #205. Isomorphic Strings
//
// let s = "paper";
// let t = "title";
//
// let isIsomorphic = (s, t) => {
//     const table = {}, tracker = {};
//
//     for (let i = 0; i < s.length; i++) {
//         if (!(s[i] in table) && !(t[i] in tracker)) {
//             table[s[i]] = t[i];
//             tracker[t[i]] = s[i];
//         } else {
//             if (table[s[i]] !== t[i]) return false;
//         }
//     }
//     return true;
// }
//
// console.log(isIsomorphic(s, t));


// 01/23/2023 - #392 - Is Subsequence
//
// let s = "abc";
// let t = "ahbgdc";
//
// const isSubsequence = (s, t) => {
//     let i = 0;
//     let j = 0;
//
//     while (i < s.length) {
//         if (j === t.length) {
//             return false;
//         }
//         if (s[i] === t[j]) {
//             i++;
//         }
//         j++;
//     }
//     return true;
// }
//
// isSubsequence(s, t);

// 03/07/2023 - Narcissistic Numbers:
// A narcissistic number is a non-negative integer (n) with m digits where the sum of all the individual digits raised to the power m is equal to n.
// TODO: Write a script to generate and output the first 25 narcissistic numbers:

// FIRST SOLUTION - INCOMPLETE. I KNEW THERE WAS A BETTER/EASIER WAY TO ACCOMPLISH THE TASK. SEE SECOND SOLUTION:
// const sumOfOneDigitToM = (number) => {
//   if (number === Math.pow(number, 1)) {
//     addNumberToArray(number);
//   }
// }
//
// const sumOfTwoDigitsToM = (number) => {
//   let first = Math.floor(number / 10);
//   let second = Math.floor(number % 10);
//   let result = Math.pow(first, 2) + Math.pow(second, 2);
//
//   if (number === result) {
//     addNumberToArray(number)
//   }
// }
//
// const sumOfThreeDigitsToM = (number) => {
//   let first = Math.floor(number / 100);
//   let second = Math.floor((number % 100) / 10);
//   let third = Math.floor((number % 100) % 10);
//   let result = Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3);
//
//   if (number === result) {
//     addNumberToArray(number);
//   }
// }
//
// const sumOfFourDigitsToM = (number) => {
//   let first = Math.floor(number / 1000);
//   let second = Math.floor((number % 1000) / 100);
//   let third = Math.floor(((number % 1000) / 10) % 10);
//   let fourth = Math.floor((number % 1000) % 10);
//   let result = Math.pow(first, 4) + Math.pow(second, 4) + Math.pow(third, 4) + Math.pow(fourth, 4);
//
//   if (number === result) {
//     addNumberToArray(number);
//   }
// }
//
// while (count < 17) {
//   for (let i = 0; i <= 9475; i++) {
//     if (i <= 9) {
//       sumOfOneDigitToM(i);
//     } else if (i <= 99) {
//       sumOfTwoDigitsToM(i);
//     } else if (i <= 999) {
//       sumOfThreeDigitsToM(i);
//     } else if (i < 9999) {
//       sumOfFourDigitsToM(i);
//     }
//   }
// }
//
// console.log(arrayOfNarcissisticNumbers);

// SECOND SOLUTION:
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
