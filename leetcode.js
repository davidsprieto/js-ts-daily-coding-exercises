// LEETCODE CODING EXERCISES:


// 01/08/2023 - #1480. Running Sum of 1D Array:
/*
let nums = [1, 2, 3, 4];

const runningSum = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            nums[i] += nums[j];
        }
    }
    return nums;
}

console.log(runningSum(nums));
 */


// 01/09/2023 - #724. Find Pivot Index:
/*
let nums = [-1, -1, 0, 0, -1, -1];

const pivotIndex = (nums) => {
    let counting = true;
    let index = 0;

    while (counting) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < index; j++) {
            leftSum += nums[j];
        }

        for (let i = nums.length - 1; i > index; i--) {
            rightSum += nums[i];
        }

        if (leftSum === rightSum) {
            return index;
        }

        if (index === nums.length - 1) {
            return -1;
        }
        index++;
    }
}

console.log(pivotIndex(nums));
 */


// 01/21/2023 - #205. Isomorphic Strings
/*
let s = "paper";
let t = "title";

let isIsomorphic = (s, t) => {
    const table = {}, tracker = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in table) && !(t[i] in tracker)) {
            table[s[i]] = t[i];
            tracker[t[i]] = s[i];
        } else {
            if (table[s[i]] !== t[i]) return false;
        }
    }
    return true;
}

console.log(isIsomorphic(s, t));
 */


// 01/23/2023 - #392. Is Subsequence
/*
let s = "abc";
let t = "ahbgdc";

const isSubsequence = (s, t) => {
    let i = 0;
    let j = 0;

    while (i < s.length) {
        if (j === t.length) {
            return false;
        }
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return true;
}

isSubsequence(s, t);
 */


// 03/14/2023 - #1. Two Sum:
// TODO: Given an array of integers 'nums' and an integer 'target',
//  return indices of the two numbers such that they add up to the target.

/*
const twoSum = (nums, target) => {
  let sum;
  let indices = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j > i && j < nums.length; j++) {
      sum = 0;
      sum += nums[i] + nums[j];
      if (sum === target) {
         indices.push(i, j);
         return indices;
      }
    }
  }
}

let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));
 */


// 03/17/2023 - #13. Roman to Integer:
// TODO: Given a Roman numeral, convert it to an integer.
/*
const romanToInt = (r) => {
  r = r.split('');
  for (let i = 0; i < r.length; i++) {
    if (r[i] === 'I') {
      r[i] = 1;
    } else if (r[i] === 'V') {
      r[i] = 5;
    } else if (r[i] === 'X') {
      r[i] = 10;
    } else if (r[i] === 'L') {
      r[i] = 50;
    } else if (r[i] === 'C') {
      r[i] = 100;
    } else if (r[i] === 'D') {
      r[i] = 500;
    } else {
      r[i] = 1000;
    }
  }
  for (let j = 0; j < r.length; j++) {
    if (r[j] === 1 && r[j + 1] === 5) {
      r.splice(r.indexOf(1), 2, 4);
    } else if (r[j] === 1 && r[j + 1] === 10) {
      r.splice(r.indexOf(1), 2, 9);
    } else if (r[j] === 10 && r[j + 1] === 50) {
      r.splice(r.indexOf(10), 2, 40);
    } else if (r[j] === 10 && r[j + 1] === 100) {
      r.splice(r.indexOf(10), 2, 90);
    } else if (r[j] === 100 && r[j + 1] === 500) {
      r.splice(r.indexOf(100), 2, 400);
    } else if (r[j] === 100 && r[j + 1] === 1000) {
      r.splice(r.indexOf(100), 2, 900);
    }
  }
  return r.reduce((sum, n) => sum + n, 0);
}

let r = 'XIVI';
romanToInt(r);
 */


// 03/26/2023 - #14. Longest Common Prefix:
// TODO: Write a function to find the longest common prefix string amongst an array of strings.
//  If there is no common prefix, return an empty string "".

/*
const longestCommonPrefix = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  for (let string of array) {
    if (string === "") {
      return "";
    }
  }
  array = array.sort((a, b) => {
    return a.length - b.length;
  });
  let count = 0;
  let prefix = "";
  let letter = "";
  for (let i = 0; i < array[0].length; i++) {
    count = 0;
    letter = array[count][i];
    for (let j = 1; j < array.length; j++) {
      if (letter === array[j][i]) {
        count++;
      } else {
        return prefix;
      }
    }
    if (count === array.length - 1) {
      prefix += letter;
    }
  }
  return prefix;
}

longestCommonPrefix(["flower", "flow", "flight"]);
 */


// 03/27/2023 - #20. Valid Parentheses:
// TODO: Given a string 's' containing just the characters '(', ')', '{', '}', '[', ']',
//  determine if the input string is valid. An input string is valid if:
//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.
//  Every close bracket has a corresponding open bracket of the same type.

/*
const pairs = {
  "(" : ")",
  "[" :"]",
  "{" : "}"
}

const isValid = (s) => {
  let stack = [];
  let closing = s[0] === ")" || s[0] === "]" || s[0] === "}";
  let opening = s.at(-1) === "(" || s.at(-1) === "[" || s.at(-1) === "{";
  let include = s.includes(")") || s.includes("]") || s.includes("}");

  if (closing || opening || !include || s.length % 2 === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (pairs[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length <= 0;
}

let s = "[[[]";
console.log(isValid(s));
 */


// 04/28/23 - #121. Best Time to Buy and Sell Stock:
// TODO: You are given an array prices where prices[i] is the price of a given stock on the ith day.
//  You want to maximize your profit by choosing a single day to buy one stock and choosing a different
//  day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.
//  If you cannot achieve any profit, return 0.

// const maxProfit = (prices) => {
//   let left = 0;
//   let right = 1;
//   let profit;
//   let maxProfit = 0;
//
//   while (right < prices.length) {
//
//     if (prices[left] < prices[right]) {
//       profit = prices[right] - prices[left];
//       maxProfit = Math.max(maxProfit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//
//   }
//   return maxProfit;
// }
//
// const arrayOfNums = [7, 1, 5, 3, 6, 4];
// maxProfit(arrayOfNums);


// 05/01/2023 - #21. Merge Two Sorted Lists:
// TODO: You are given the heads of two sorted linked lists list1 and list2.
//  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//  Return the head of the merged linked list.

class ListNode {
  constructor(value, next) {
    this.value = (value === undefined ? 0 : value);
    this.next = (next === undefined ? null : next);
  }
}

const mergeTwoLists = (list1, list2) => {
  let combined = new ListNode();
  const head = combined;
  while (list1 && list2) {
    if (list1.value < list2.value) {
      combined.next = list1;
      list1 = list1.next;
    } else {
      combined.next = list2;
      list2 = list2.next;
    }
    combined = combined.next;
  }
  if (list1) {
    combined.next = list1;
  }
  if (list2) {
    combined.next = list2;
  }
  return head.next;
}

let list1 = new ListNode(1, 2);
list1.next = 4;

let list2 = new ListNode(1, 3);
list2.next = 4;

mergeTwoLists(list1, list2);
