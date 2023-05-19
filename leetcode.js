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

/*
const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let profit;
  let maxProfit = 0;

  while (right < prices.length) {

    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;

  }
  return maxProfit;
}

const arrayOfNums = [7, 1, 5, 3, 6, 4];
maxProfit(arrayOfNums);
 */


// 05/01/2023 - #21. Merge Two Sorted Lists:
// TODO: You are given the heads of two sorted linked lists list1 and list2.
//  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//  Return the head of the merged linked list.

/*
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
 */


// 05/08/2023 - #1768. Merge Strings Alternately
// TODO: You are given two strings word1 and word2.
//  Merge the strings by adding letters in alternating order, starting with word1.
//  If a string is longer than the other, append the additional letters onto the end of the merged string.

/*
const mergeAlternately = (word1, word2) => {
  let index = 0;
  let count = 0;
  let merged = '';
  let length = Math.min(word1.length, word2.length);

  while (count < length) {
    merged += word1[index];
    word1 = word1.slice(index + 1);
    merged += word2[index];
    word2 = word2.slice(index + 1);
    count++;
  }
  if (word1) {
    merged += word1;
  }
  if (word2) {
    merged += word2;
  }
  return merged;
}

let word1 = "ab";
let word2 = "pqrs";
console.log(mergeAlternately(word1, word2));
 */


// 05/09/2023 - #1071. Greatest Common Divisor of Strings
// TODO: For two strings s and t, we say "t divides s" if and only if
//  s = t + ... + t (i.e., t is concatenated with itself one or more times).
//  Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Solution: Euclidean Algorithm

/*
const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const length = gcd(str1.length, str2.length);

  return str1.substring(0, length);
}

let str1 = "ABCABC";
let str2 = "ABC";
console.log(gcdOfStrings(str1, str2));
 */


// 05/10/2023 - #1431. Kids With the Greatest Number of Candies
// TODO: There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies
//  the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
//  Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
//  they will have the greatest number of candies among all the kids, or false otherwise.
//  Note that multiple kids can have the greatest number of candies.

/*
const kidsWithCandies = (candies, extraCandies) => {
  let array = [];
  let index = 0;
  let greatest = false;

  while (index < candies.length) {
    for (let i = 0; i < candies.length; i++) {
      if (i === index && i !== candies.length - 1) {
        i++;
      }
      if (candies[index] + extraCandies >= candies[i]) {
        greatest = true;
      } else {
        greatest = false;
        break;
      }
    }
    array.push(greatest);
    index++;
  }
  return array;
}


// Refactored for a more optimal solution
const kidsWithCandiesRefactored = (candies, extraCandies) => {
  let maxOfCandies = Math.max(...candies);
  let result = [];

  for (const i of candies) {
    if (i + extraCandies >= maxOfCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
console.log(kidsWithCandiesRefactored(candies, extraCandies));
 */


// 05/11/2023 - #605. Can Place Flowers
// TODO: You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
//  Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new
//  flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

/*
const canPlaceFlowers = (flowerbed, n) => {
  if (!n) {
    return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      n--;
      flowerbed[i] = 1;
    }
    if (!n) {
      return true;
    }
  }
  return !n;
}

let flowerbed = [1, 0, 0, 0, 1, 0, 1, 0, 0];
let n = 1;
console.log(canPlaceFlowers(flowerbed, n));
 */


// 05/12/2023 - #345. Reverse Vowels of a String
// TODO: Given a string s, reverse only all the vowels in the string and return it.
//  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/*
const reverseVowels = (s) => {
  s = s.split('');
  let vowels = [];
  let indexes = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u'
      || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
      vowels.push(s[i]);
      indexes.push(i);
    }
  }
  vowels.reverse();

  let pointer = 0;
  while (pointer < indexes.length) {
    for (let i = 0; i < s.length; i++) {
      if (i === indexes[pointer]) {
        s[i] = vowels[pointer];
        pointer++;
      }
    }
  }
  return s.join('');
}

let s = "leetcode";
console.log(reverseVowels(s));
 */


// 05/15/2023 - #151. Reverse Words in a String
// TODO: Given an input string s, reverse the order of the words.
//  A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
//  Return a string of the words in reverse order concatenated by a single space.
//  Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should
//  only have a single space separating the words. Do not include any extra spaces.

/*
const reverseWords = (s) => {
  s = s.replace(/  +/g, " ").trim();
  s = s.split(" ").reverse();
  return s.join(" ");
}

let s = "  the sky is     blue  ";
reverseWords(s);
 */


// 05/16/2023 - #238. Product of Array Except Self
// TODO: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//  You must write an algorithm that runs in O(n) time and without using the division operation.

/*
const productExceptSelf = (nums) => {
  let productArray = [];
  let index = 0;

  while (index < nums.length) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
      if (index !== i) {
        product *= nums[i];
      }
    }
    if (product === -0) {
      product = 0;
    }
    productArray.push(product);
    index++;
  }
  return productArray;
}

let nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
 */

/*
// Alternate solution:
const productExceptSelf2 = (nums) => {
  const length = nums.length;
  const result = new Array(length).fill(1);

  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }

  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }
  return result;
}

let nums = [1, 2, 3, 4];
productExceptSelf2(nums);
 */


// 05/19/2023 - #443. String Compression
// TODO: Given an array of characters chars, compress it using the following algorithm:
//  Begin with an empty string s. For each group of consecutive repeating characters in chars:
//  If the group's length is 1, append the character to s.
//  Otherwise, append the character followed by the group's length.
//  The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
//  After you are done modifying the input array, return the new length of the array.
//  You must write an algorithm that uses only constant extra space.

const compress = (chars) => {
  let s = "";
  let current = 0;
  let count  = 1;
  let next = 1;

  if (chars.length === 1) {
    return chars.length;
  }

  chars.push(" ");
  while (next < chars.length) {
    if (chars[current] === chars[next]) {
      count++;
      next++;
    }
    if (chars[current] !== chars[next] && count === 1) {
      s += chars[current];
      current = next;
      next++;
      count = 1;
    } else if (chars[current] !== chars[next]) {
      s += chars[current];
      s += count;
      current = next;
      next++;
      count = 1;
    }
  }

  chars.splice(s.length);
  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  return chars.length;
}

let chars = ["a","b","c"];
console.log(compress(chars));
