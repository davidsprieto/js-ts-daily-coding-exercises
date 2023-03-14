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
