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

/*
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
 */


// 05/22/2023 - #283. Move Zeroes
// TODO: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//  Note that you must do this in-place without making a copy of the array.

/*
const moveZeroes = (nums) => {
  let i = 0;
  let c = 0;
  let p, t;

  for (const num of nums) {
    if (num === 0) {
      c++;
    }
  }
  t = c;
  c = 0;

    while (i < nums.length) {
      if (c === t) {
        break;
      }
      p = nums[i];
      if (nums[i] === 0) {
        nums.splice(i, 1);
        nums.splice(nums.length, 0, p);
        c++;
      }
      if (nums[i] === 0) {
        i = 0;
      } else {
        i++;
      }
    }
  return nums;
}

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));

// Alternate solution using array destructuring:
const moveZeroes2 = (nums) => {
  let g = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      g++;
    } else {
      [nums[i - g], nums[i]] = [nums[i], nums[i - g]];
    }
  }
  return nums;
}

let nums2 = [0, 1, 0, 3, 12];
console.log(moveZeroes2(nums2));
 */


// 05/23/2023 - #11. Container With Most Water
// TODO: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//  Find two lines that together with the x-axis form a container, such that the container contains the most water.
//  Return the maximum amount of water a container can store.
//  Notice that you may not slant the container.

/*
const maxArea = (height) => {
    let area = 0, i = 0, j = height.length - 1;

    while (i < j) {
        const temp = (j - i) * Math.min(height[i], height[j]);
        area = Math.max(area,  temp);
        if (height[i] > height[j]) {
            j -= 1;
        } else {
            i += 1;
        }
    }
    return area;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
 */


// 05/24/2023 - #1679. Max Number of K-Sum Pairs
// TODO: You are given an integer array nums and an integer k.
//  In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
//  Return the maximum number of operations you can perform on the array.

/*
// First solution: time limit exceeded
const maxOperations = (nums, k) => {
    let i = 0, j = i + 1, operations = 0;

    while (nums[j]) {
        let iNum = nums[i];
        let jNum = nums[j];

        if (iNum + jNum === k) {
            operations++;
            nums.splice(i, 1);
            nums.splice(j - 1, 1);
            i = 0;
            j = i;
        }
        if (j === nums.length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return operations;
}

let nums = [80, 75, 31, 85, 66, 36, 95, 45, 59, 9, 75, 35, 70, 35, 93, 59, 99, 55, 80, 42, 51, 51, 87, 57, 77, 50, 63, 54, 47, 6, 39, 25, 6, 28, 79, 5, 52, 95, 10, 29, 37, 5, 84, 98, 44, 67, 69, 84, 100, 2, 50, 15, 100, 27, 75, 12, 3, 94, 46, 32, 44, 71, 11, 72, 54, 90, 81, 50, 68, 33, 82, 43, 87, 40, 4, 59, 57, 73, 66, 74, 11, 4, 21, 76, 69, 37, 27, 21, 80, 28, 65, 83, 37, 57, 59, 81, 98, 44, 42, 42, 20, 54, 99, 50, 49, 38, 50, 11, 81, 92, 38, 46, 62, 1, 76, 55, 30, 51, 1, 64, 83, 77, 6, 33, 46, 68, 23, 51, 8, 87, 74, 2, 26, 44, 8, 54, 37, 60, 68, 77, 29, 62, 79, 31, 86, 28, 96, 57, 45, 43, 7, 29, 89, 66, 6, 53, 97, 33, 24, 42, 82, 19, 57, 8, 55, 76, 96, 88, 38, 58, 10, 10, 56, 48, 17, 1, 20, 16, 79, 42, 33, 7, 78, 5, 41, 16, 55, 58, 43, 87, 52, 62, 93, 70, 5, 70, 65, 38, 65, 82, 42, 89, 63, 79, 40, 22, 94, 40, 35, 1, 16, 42, 93, 19, 27, 70, 95, 60, 23, 5, 81, 93, 17, 28, 96, 75, 23, 8, 48, 44, 66, 1, 58, 10, 49, 86, 3, 47, 52, 44, 31, 90, 60, 62, 43, 3, 64, 80, 95, 72, 42, 56, 84, 73, 62, 3, 94, 24, 84, 24, 46, 73, 76, 4, 65, 39, 48, 72, 10, 23, 26, 68, 3, 8, 86, 58, 87, 89, 66, 32, 31, 33, 15, 28, 97, 6, 33, 22, 96, 61, 45, 16, 50, 89, 98, 46, 3, 41, 50, 31, 20, 91, 73, 37, 28, 85, 3, 90, 22, 58, 69, 70, 74, 61, 56, 42, 70, 55, 87, 33, 6, 17, 36, 79, 57, 5, 73, 53, 11, 18, 82, 77, 98, 92, 84, 93, 100, 52, 18, 100, 3, 62, 64, 61, 13, 54, 69, 20, 63, 36, 4, 45, 10, 7, 36, 93, 3, 64, 72, 51, 10, 85, 61, 47, 42, 57, 74, 97, 29, 73, 65, 1, 70, 71, 74, 16, 40, 31, 16, 15, 6, 86, 73, 52, 4, 34, 97, 4, 24, 59, 50, 87, 3, 13, 21, 95, 82, 28, 60, 22, 92, 38, 19, 77, 68, 16, 49, 34, 75, 6, 56, 47, 27, 91, 64, 40, 56, 3, 92, 79, 59, 18, 60, 51, 47, 7, 51, 67, 88, 17, 90, 15, 47, 23, 93, 65, 74, 74, 60, 94, 85, 93, 30, 12, 43, 27, 57, 89, 1, 29, 55, 17, 97, 79, 67, 77, 28, 9, 8, 66, 98, 67, 41, 33, 1, 19, 59, 24, 93, 94, 65, 65, 74, 51, 17, 36, 89, 95, 42, 40, 80, 64, 67, 97, 16, 53, 42, 89, 69, 98, 27, 91, 65, 10, 38, 46, 60, 28, 41, 46, 10, 40, 61, 85, 75, 2, 82, 90, 55, 67, 24, 56, 24, 43, 100, 16, 12, 61, 66, 55, 17, 96, 4, 17, 66, 56, 66, 31, 24, 92, 38, 29, 98, 56, 1, 72, 18, 12, 84, 62, 46, 85, 28, 94, 54, 36, 20, 44, 93, 72, 70, 25, 91, 86, 95, 75, 30, 33, 77, 14, 10, 39, 55, 15, 16, 97, 98, 40, 76, 85, 51, 65, 60, 85, 65, 93, 6, 23, 17, 68, 53, 63, 94, 43, 71, 51, 36, 79, 36, 54, 14, 50, 30, 10, 12, 16, 5, 17, 78, 5, 53, 45, 33, 49, 74, 28, 53, 91, 59, 82, 70, 33, 19, 22, 52, 45, 97, 52, 2, 3, 13, 22, 84, 38, 83, 74, 45, 39, 75, 98, 100, 69, 86, 69, 28, 17, 28, 18, 89, 38, 74, 57, 96, 54, 36, 60, 47, 5, 26, 50, 57, 90, 38, 8, 19, 96, 41, 79, 76, 70, 94, 90, 59, 14, 10, 78, 19, 1, 69, 90, 18, 89, 88, 46, 84, 53, 15, 100, 51, 64, 83, 56, 45, 75, 25, 41, 61, 10, 86, 22, 61, 99, 31, 19, 50, 50, 56, 18, 9, 48, 1, 32, 34, 95, 49, 37, 39, 32, 32, 28, 82, 86, 86, 51, 19, 37, 57, 8, 83, 71, 8, 96, 72, 18, 85, 47, 4, 69, 90, 6, 64, 85, 25, 90, 66, 22, 78, 9, 56, 91, 93, 91, 86, 35, 27, 54, 11, 82, 99, 25, 60, 76, 6, 80, 99, 77, 14, 81, 36, 93, 94, 28, 50, 90, 80, 90, 40, 46, 71, 10, 27, 89, 47, 80, 81, 2, 23, 46, 74, 69, 5, 54, 43, 62, 25, 26, 23, 8, 4, 3, 62, 74, 78, 60, 39, 80, 88, 53, 10, 58, 57, 5, 30, 28, 44, 23, 48, 80, 34, 8, 27, 58, 23, 78, 35, 6, 28, 8, 97, 70, 23, 9, 73, 59, 5, 83, 58, 39, 14, 58, 53, 76, 57, 48, 30, 59, 100, 2, 34, 65, 66, 57, 47, 11, 91, 57, 5, 58, 57, 21, 9, 76, 42, 19, 37, 50, 58, 27, 24, 27, 24, 68, 2, 9, 62, 32, 37, 50, 63, 36, 40, 90, 32, 32, 8, 39, 83, 69, 20, 11, 12, 25, 26, 6, 39, 77, 18, 38, 73, 87, 57, 10, 7, 55, 59, 64, 19, 22, 71, 93, 30, 72, 56, 1, 61, 51, 35, 75, 55, 33, 41, 5, 3, 77, 62, 20, 83, 96, 23, 21, 57, 95, 39, 52, 31, 46, 47, 38, 100, 3, 44, 73, 20, 74, 29, 78, 97, 85, 36, 47, 15, 92, 13, 98, 84, 52, 48, 94, 67, 67, 8, 79, 47, 96, 17, 26, 5, 66, 26, 66, 73, 45, 88, 74, 96, 82, 96, 70, 91, 81, 66, 90, 41, 29, 38, 7, 60, 59, 22, 54, 62, 95, 12, 71, 38, 24, 58, 52, 26, 87, 26, 11, 65, 59, 45, 18, 10, 88, 2, 15, 85, 99, 90, 18, 64, 17, 49, 49, 86, 51, 33, 41, 10, 67, 99, 56, 11, 16, 57, 26, 1, 65, 25, 59, 61, 93, 67, 87, 54, 41, 68, 70, 77, 16, 6, 33, 42, 51, 1, 30, 6, 34, 99, 33, 80, 70, 18, 38, 6, 55, 62, 70, 77, 88, 29, 45, 26, 17, 48, 42, 68, 47, 28, 20, 34, 13, 27, 45, 63, 32, 27, 58, 71, 17, 36, 66, 5, 55, 8, 91, 13, 14, 77, 67, 89, 92, 51, 42, 16, 84, 58, 78, 27, 50, 18, 73, 70, 37, 11, 36, 76, 26, 11, 6, 62, 84, 62, 74, 13, 41, 3, 60, 74, 15, 28, 42, 46, 42, 45, 27, 62, 35, 81, 89, 19, 98, 33, 61, 3, 10, 76, 89, 63, 28, 67, 46, 57, 38, 66, 75, 52, 19, 65, 42, 89, 45, 29, 83, 95, 99, 45, 48, 70, 18, 35, 3, 78, 50, 27, 8, 32, 4, 42, 86, 45, 61, 78, 2, 23, 56, 51, 94, 83, 75, 49, 90, 89, 76, 85, 68, 25, 79, 86, 73, 2, 47, 35, 56, 37, 80, 1, 3, 36, 17, 17, 79, 95, 4, 12, 69, 69, 82, 94, 78, 63, 92, 98, 83, 99, 3, 78, 52, 58, 49, 71, 54, 2, 80, 37, 32, 99, 47, 91, 62, 31, 79, 30, 36, 67, 61, 49, 87, 87, 12, 71, 59, 95, 92, 37, 45, 97, 58, 91, 88, 70, 95, 22, 32, 46, 56, 70, 4, 27, 99, 89, 42, 57, 33, 9, 65, 70, 98, 6, 59, 79, 24, 88, 60, 45, 1, 17, 23, 27, 99, 72, 38, 16, 46, 63, 18, 38, 17, 59, 17, 62, 93, 77, 70, 46, 24, 97, 21, 47, 66, 57, 74, 93, 79, 35, 1, 56, 26, 34, 36, 43, 95, 13, 33, 40, 57, 100, 98, 21, 64, 64, 39, 31, 5, 66, 27, 91, 85, 15, 78, 29, 35, 76, 81, 93, 91, 30, 3, 15, 18, 15, 74, 17, 100, 17, 11, 65, 95, 87, 39, 87, 30, 21, 7, 49, 37, 15, 97, 65, 39, 31, 40, 84, 56, 4, 84, 3, 46, 84, 44, 14, 73, 15, 40, 87, 99, 44, 19, 51, 4, 22, 73, 21, 97, 14, 81, 11, 88, 36, 77, 55, 19, 45, 69, 8, 28, 67, 27, 5, 51, 3, 22, 25, 18, 5, 41, 21, 66, 44, 79, 89, 85, 96, 86, 39, 65, 72, 83, 43, 45, 9, 38, 20, 66, 33, 51, 99, 65, 29, 72, 69, 69, 74, 6, 98, 30, 39, 53, 7, 4, 64, 82, 93, 74, 19, 68, 39, 69, 1, 11, 36, 24, 94, 94, 80, 64, 64, 62, 73, 68, 6, 22, 76, 3, 1, 28, 13, 78, 18, 62, 7, 83, 57, 6, 53, 26, 93, 28, 65, 24, 81, 27, 66, 90, 68, 83, 71, 19, 44, 93, 30, 16, 97, 100, 76, 9, 39, 80, 31, 1, 33, 93, 74, 87, 87, 42, 75, 46, 61, 20, 75, 54, 89, 93, 49, 34, 66, 6, 58, 63, 76, 98, 61, 20, 61, 65, 73, 14, 25, 44, 29, 34, 12, 34, 6, 12, 50, 66, 23, 37, 74, 54, 32, 49, 7, 41, 36, 46, 45, 8, 38, 51, 18, 45, 40, 51, 90, 44, 69, 62, 27, 94, 88, 87, 70, 70, 64, 7, 83, 5, 72, 100, 92, 47, 14, 36, 16, 32, 87, 51, 27, 17, 63, 47, 61, 42, 51, 3, 27, 43, 71, 2, 34, 21, 14, 3, 1, 73, 73, 16, 15, 75, 79, 22, 90, 50, 78, 95, 16, 47, 99, 20, 2, 49, 98, 34, 62, 45, 88, 35, 41, 27, 2, 8, 84, 84, 84, 23, 65, 6, 85, 75, 55, 85, 57, 60, 64, 71, 1, 67, 50, 82, 58, 90, 67, 3, 21, 68, 64, 59, 46, 91, 73, 94, 17, 76, 18, 44, 100, 57, 53, 75, 12, 26, 9, 77, 28, 67, 82, 88, 96, 13, 4, 29, 37, 7, 37, 37, 71, 88, 19, 31, 40, 62, 99, 82, 53, 59, 43, 59, 68, 60, 51, 36, 57, 46, 63, 48, 18, 74, 3, 85, 9, 14, 71, 83, 81, 5, 56, 88, 38, 97, 6, 10, 59, 46, 69, 80, 73, 30, 44, 84, 17, 87, 59, 35, 69, 55, 49, 78, 10, 97, 23, 55, 2, 88, 19, 76, 66, 93, 91, 85, 48, 52, 45, 44, 73, 63, 74, 12, 28, 76, 42, 77, 4, 92, 89, 73, 87, 33, 56, 61, 58, 19, 8, 77, 77, 26, 68, 78, 5, 17, 68, 5, 42, 45, 4, 50, 27, 93, 71, 6, 24, 80, 86, 17, 83, 9, 1, 57, 46, 88, 81, 4, 78, 99, 2, 16, 11, 11, 68, 36, 84, 77, 64, 68, 6, 45, 14, 72, 41, 24, 4, 60, 39, 73, 26, 32, 60, 47, 61, 100, 54, 59, 33, 70, 67, 69, 20, 65, 58, 53, 54, 63, 35, 24, 50, 43, 69, 46, 95, 5, 15, 40, 96, 51, 42, 45, 28, 88, 19, 79, 15, 26, 47, 73, 90, 21, 8, 61, 96, 57, 13, 93, 3, 57, 65, 27, 68, 70, 69, 6, 15, 63, 84, 12, 5, 39, 57, 68, 13, 51, 25, 7, 97, 90, 66, 1, 39, 63, 4, 70, 51, 8, 5, 14, 21, 51, 93, 9, 49, 31, 79, 70, 61, 17, 66, 23, 55, 36, 54, 96, 99, 81, 100, 52, 68, 57, 40, 66, 67, 4, 52, 89, 48, 88, 41, 58, 65, 81, 60, 34, 8, 58, 46, 1, 75, 17, 57, 2, 58, 62, 29, 60, 79, 29, 43, 68, 40, 23, 88, 60, 6, 16, 58, 28, 69, 85, 46, 1, 38, 50, 42, 86, 38, 70, 68, 13, 4, 92, 55, 85, 35, 76, 12, 99, 78, 100, 66, 69, 75, 51, 45, 92, 68, 54, 68, 35, 17, 6, 52, 41, 61, 85, 26, 25, 100, 86, 94, 13, 19, 23, 42, 66, 13, 12, 69, 97, 64, 73, 56, 64, 64, 29, 99, 78, 15, 29, 59, 61, 76, 57, 41, 28, 20, 57, 14, 58, 62, 92, 59, 75, 20, 18, 4, 38, 33, 93, 96, 16, 57, 92, 55, 79, 43, 83, 13, 11, 70, 30, 75, 35, 74, 92, 40, 74, 89, 35, 88, 38, 70, 37, 59, 61, 9, 6, 61, 45, 76, 92, 72, 1, 1, 71, 28, 70, 40, 42, 9, 48, 50, 87, 75, 33, 83, 33, 77, 26, 76, 79, 92, 55, 74, 77, 44, 55, 35, 55, 88, 99, 38, 86, 98, 61, 11, 39, 50, 93, 7, 1, 79, 47, 37, 70, 23, 32, 98, 36, 82, 66, 34, 17, 87, 100, 86, 5, 24, 11, 2, 87, 51, 23, 29, 6, 55, 21, 18, 66, 31, 29, 13, 25, 36, 83, 34, 78, 91, 29, 22, 93, 56, 4, 38, 81, 50, 71, 53, 21, 92, 12, 60, 60, 80, 62, 14, 27, 28, 6, 30, 30, 78, 70, 54, 97, 39, 35, 65, 49, 22, 62, 86, 46, 3, 27, 71, 44, 14, 93, 98, 6, 66, 80, 34, 59, 75, 29, 27, 85, 83, 74, 38, 16, 37, 58, 25, 53, 47, 76, 18, 4, 79, 29, 36, 60, 79, 60, 49, 1, 64, 90, 73, 72, 90, 34, 32, 62, 57, 60, 65, 86, 97, 59, 20, 17, 73, 52, 19, 80, 65, 12, 92, 84, 78, 86, 87, 87, 78, 31, 85, 8, 38, 95, 80, 33, 11, 86, 57, 86, 10, 53, 21, 8, 39, 77, 61, 69, 83, 26, 100, 39, 89, 3, 51, 65, 4, 84, 74, 53, 18, 16, 49, 23, 76, 83, 98, 28, 57, 38, 62, 62, 39, 59, 39, 86, 20, 40, 65, 80, 85, 12, 87, 84, 31, 11, 19, 7, 25, 84, 3, 84, 72, 18, 39, 10, 33, 2, 13, 98, 100, 91, 96, 95, 24, 39, 22, 40, 85, 33, 84, 50, 54, 57, 53, 88, 52, 84, 47, 43, 28, 11, 12, 4, 7, 32, 67, 15, 58, 47, 100, 27, 3, 20, 80, 5, 48, 10, 49, 88, 35, 17, 43, 51, 39, 44, 48, 43, 67, 42, 71, 71, 34, 9, 95, 58, 69, 81, 5, 87, 35, 35, 63, 67, 35, 22, 15, 58, 3, 51, 2, 12, 53, 69, 34, 77, 2, 74, 35, 22, 57, 3, 33, 4, 77, 16, 27, 88, 45, 66, 94, 64, 27, 26, 27, 59, 4, 69, 48, 43, 9, 1, 50, 63, 5, 79, 43, 42, 32, 80, 45, 72, 8, 85, 19, 26, 37, 9, 17, 30, 22, 64, 33, 17, 82, 80, 100, 54, 60, 91, 72, 23, 86, 31, 99, 39, 2, 84, 48, 57, 69, 62, 37, 1, 27, 47, 69, 49, 68, 5, 70, 39, 32, 12, 96, 37, 7, 75, 40, 44, 47, 32, 91, 50, 88, 97, 25, 14, 28, 99, 98, 18, 56, 26, 3, 13, 19, 88, 70, 25, 37, 51, 93, 70, 96, 73, 84, 77, 79, 18, 43, 7, 23, 38, 12, 3, 65, 34, 83, 17, 55, 60, 73, 96, 55, 88, 12, 49, 44, 45, 85, 57, 95, 100, 53, 77, 38, 47, 99, 57, 10, 95, 80, 76, 86, 79, 64, 13, 88, 65, 35, 44, 64, 81, 100, 53, 79, 22, 29, 87, 20, 38, 92, 69, 45, 75, 87, 28, 58, 48, 78, 64, 1, 94, 7, 37, 97, 70, 90, 67, 74, 83, 41, 37, 88, 68, 27, 85, 37, 83, 73, 84, 60, 24, 52, 5, 29, 24, 53, 68, 2, 98, 69, 95, 58, 22, 50, 23, 19, 74, 32, 55, 46, 21, 85, 64, 14, 28, 40, 76, 2, 88, 63, 32, 23, 6, 44, 37, 47, 77, 38, 65, 13, 25, 45, 100, 51, 14, 86, 26, 79, 16, 72, 30, 32, 37, 76, 51, 69, 92, 32, 76, 49, 66, 66, 47, 81, 25, 96, 73, 75, 79, 9, 59, 3, 64, 90, 5, 37, 40, 50, 87, 62, 88, 47, 87, 43, 82, 90, 77, 13, 84, 7, 94, 1, 51, 40, 61, 47, 53, 85, 1, 15, 72, 77, 67, 50, 87, 59, 54, 74, 61, 15, 67, 23, 53, 75, 44, 34, 22, 86, 19, 82, 96, 57, 61, 65, 94, 7, 70, 16, 1, 98, 36, 51, 96, 78, 67, 33, 33, 99, 17, 43, 74, 16, 83, 72, 79, 86, 65, 76, 58, 38, 44, 21, 48, 86, 89, 45, 16, 3, 26, 55, 22, 93, 71, 26, 14, 20, 75, 30, 34, 7, 89, 90, 45, 66, 82, 63, 97, 24, 87, 72, 64, 23, 32, 79, 68, 92, 20, 56, 87, 4, 12, 21, 5, 35, 2, 72, 59, 99, 44, 28, 28, 61, 39, 57, 72, 8, 25, 9, 43, 58, 72, 21, 41, 52, 9, 93, 56, 66, 29, 19, 43, 36, 58, 13, 51, 85, 28, 25, 28, 53, 21, 9, 93, 75, 77, 7, 66, 29, 23, 53, 72, 81, 61, 19, 88, 5, 68, 61, 5, 97, 14, 17, 72, 84, 32, 61, 49, 89, 14, 30, 100, 44, 57, 41, 48, 2, 44, 6, 29, 69, 34, 63, 63, 15, 6, 68, 18, 72, 39, 43, 27, 39, 7, 42, 8, 78, 82, 20, 2, 64, 77, 40, 42, 88, 22, 9, 27, 36, 4, 66, 10, 66, 5, 7, 70, 76, 37, 12, 95, 97, 84, 38, 68, 94, 19, 92, 81, 15, 69, 55, 79, 42, 16, 13, 46, 34, 81, 3, 66, 8, 36, 47, 60, 56, 31, 91, 2, 33, 68, 69, 52, 12, 70, 46, 96, 92, 72, 35, 79, 20, 49, 25, 31, 62, 90, 55, 13, 29, 7, 86, 15, 92, 16, 86, 88, 95, 1, 17, 81, 76, 31, 8, 68, 99, 89, 66, 51, 17, 46, 89, 7, 82, 17, 4, 48, 3, 22, 10, 68, 7, 37, 51, 77, 33, 66, 81, 5, 22, 45, 25, 86, 98, 68, 87, 3, 86, 92, 47, 68, 35, 8, 51, 4, 58, 71, 73, 58, 37, 62, 7, 3, 90, 35, 42, 42, 34, 39, 34, 24, 28, 38, 13, 8, 50, 2, 35, 60, 83, 29, 64, 16, 48, 9, 82, 44, 68, 92, 46, 67, 30, 60, 1, 22, 15, 63, 8, 20, 81, 96, 29, 66, 75, 63, 65, 29, 85, 71, 28, 56, 24, 15, 88, 17, 30, 92, 2, 56, 74, 22, 88, 61, 65, 25, 33, 67, 98, 57, 85, 87, 86, 11, 23, 36, 18, 25, 6, 58, 75, 63, 43, 60, 77, 7, 58, 20, 83, 50, 50, 90, 88, 77, 79, 12, 89, 43, 78, 35, 78, 38, 30, 68, 1, 80, 73, 78, 42, 71, 10, 27, 60, 77, 8, 93, 12, 79, 19, 32, 7, 32, 64, 65, 80, 30, 96, 95, 10, 65, 76, 31, 58, 41, 42, 5, 11, 80, 98, 60, 84, 4, 62, 33, 69, 59, 62, 27, 80, 12, 71, 6, 6, 6, 70, 69, 49, 15, 25, 52, 60, 83, 85, 11, 15, 98, 83, 57, 4, 60, 86, 97, 41, 29, 37, 87, 31, 74, 58, 22, 16, 34, 75, 82, 11, 90, 11, 43, 76, 9, 35, 30, 67, 96, 100, 10, 41, 18, 53, 72, 99, 41, 18, 89, 68, 55, 48, 76, 38, 33, 88, 8, 38, 21, 4, 91, 66, 50, 70, 32, 2, 55, 35, 95, 91, 63, 24, 37, 84, 74, 18, 16, 46, 18, 30, 90, 28, 24, 96, 61, 91, 66, 26, 71, 80, 79, 65, 26, 8, 59, 100, 51, 51, 79, 16, 54, 64, 37, 18, 67, 28, 89, 14, 1, 75, 94, 11, 48, 46, 79, 7, 30, 50, 44, 67, 52, 39, 67, 69, 40, 23, 37, 71, 63, 93, 71, 24, 64, 23, 7, 17, 75, 25, 55, 90, 75, 18, 30, 98, 64, 94, 41, 18, 26, 89, 68, 78, 6, 71, 69, 20, 85, 79, 54, 29, 52, 8, 73, 50, 86, 65, 50, 5, 77, 63, 80, 10, 44, 58, 88, 76, 69, 72, 82, 45, 85, 99, 63, 100, 13, 76, 59, 93, 81, 25, 6, 50, 33, 34, 16, 29, 47, 33, 64, 68, 65, 51, 41, 50, 43, 34, 46, 15, 35, 65, 20, 11, 15, 29, 72, 33, 98, 44, 54, 57, 38, 40, 54, 8, 72, 61, 41, 19, 24, 10, 1, 61, 60, 68, 11, 22, 87, 38, 99, 54, 51, 68, 93, 70, 71, 38, 9, 57, 50, 16, 17, 49, 62, 97, 77, 49, 53, 22, 91, 49, 26, 60, 63, 7, 11, 36, 91, 26, 99, 48, 79, 22, 62, 6, 4, 6, 42, 77, 96, 82, 70, 82, 92, 3, 10, 13, 52, 69, 68, 5, 47, 25, 65, 11, 66, 31, 75, 75, 33, 11, 80, 25, 26, 55, 84, 88, 13, 62, 22, 45, 74, 22, 61, 66, 90, 91, 99, 12, 79, 97, 1, 98, 21, 65, 34, 89, 47, 32, 100, 29, 9, 55, 10, 91, 10, 76, 53, 43, 35, 76, 51, 67, 76, 31, 53, 37, 3, 72, 5, 55, 54, 5, 90, 86, 67, 80, 38, 65, 44, 41, 97, 27, 99, 75, 27, 34, 17, 44, 75, 2, 14, 67, 58, 93, 28, 28, 43, 35, 15, 42, 26, 55, 28, 42, 20, 85, 36, 46, 5, 92, 13, 10, 87, 96, 27, 28, 12, 21, 16, 81, 46, 46, 24, 26, 100, 26, 65, 48, 65, 85, 96, 67, 90, 7, 44, 4, 23, 75, 89, 27, 71, 26, 86, 43, 52, 56, 32, 48, 31, 55, 60, 22, 1, 21, 2, 95, 46, 54, 91, 26, 59, 16, 67, 62, 26, 37, 71, 43, 62, 17, 70, 1, 36, 47, 76, 38, 7, 100, 83, 32, 69, 44, 22, 77, 31, 14, 48, 3, 31, 84, 50, 67, 80, 85, 52, 14, 25, 60, 4, 23, 4, 76, 44, 7, 71, 54, 83, 30, 89, 95, 54, 83, 37, 68, 64, 76, 6, 95, 33, 85, 1, 58, 69, 90, 75, 29, 16, 46, 49, 10, 16, 23, 74, 27, 97, 36, 25, 28, 45, 42, 23, 95, 79, 56, 3, 30, 75, 21, 88, 88, 52, 47, 60, 88, 11, 67, 74, 55, 80, 72, 8, 42, 35, 44, 5, 42, 41, 30, 31, 80, 71, 82, 80, 32, 83, 34, 66, 61, 51, 51, 88, 6, 96, 55, 8, 72, 17, 52, 98, 60, 38, 60, 62, 70, 57, 91, 26, 66, 19, 88, 51, 75, 90, 17, 46, 83, 80, 27, 72, 9, 77, 80, 84, 3, 90, 31, 72, 20, 79, 50, 6, 6, 45, 16, 91, 79, 54, 97, 89, 73, 83, 39, 38, 36, 58, 27, 26, 69, 26, 11, 77, 77, 49, 5, 65, 36, 2, 52, 1, 94, 69, 32, 50, 93, 81, 15, 75, 11, 61, 27, 17, 57, 45, 70, 94, 89, 12, 23, 46, 45, 7, 94, 85, 51, 1, 34, 62, 61, 50, 6, 7, 74, 99, 47, 55, 25, 9, 96, 28, 37, 27, 3, 23, 62, 34, 74, 58, 94, 25, 59, 28, 25, 88, 25, 34, 30, 8, 91, 54, 59, 69, 58, 32, 54, 75, 13, 25, 57, 89, 10, 86, 90, 41, 8, 49, 8, 62, 89, 4, 58, 69, 77, 98, 17, 17, 93, 79, 92, 42, 6, 94, 77, 59, 91, 63, 26, 67, 31, 4, 26, 89, 90, 25, 78, 24, 73, 83, 12, 5, 80, 25, 26, 8, 73, 1, 98, 100, 69, 36, 86, 18, 65, 65, 54, 42, 7, 63, 60, 58, 45, 65, 32, 35, 43, 45, 39, 87, 57, 87, 42, 93, 10, 14, 27, 38, 95, 49, 68, 21, 22, 5, 59, 51, 100, 4, 45, 31, 14, 32, 24, 89, 33, 73, 14, 37, 14, 99, 45, 68, 17, 37, 56, 31, 74, 94, 85, 10, 24, 24, 83, 16, 32, 47, 46, 10, 20, 31, 60, 18, 21, 42, 61, 54, 95, 95, 37, 75, 9, 39, 53, 36, 39, 27, 45, 9, 51, 7, 40, 75, 2, 94, 33, 44, 10, 20, 81, 58, 39, 39, 54, 53, 68, 41, 6, 95, 78, 36, 47, 26, 39, 98, 57, 22, 96, 93, 26, 52, 16, 61, 22, 85, 2, 65, 8, 7, 98, 3, 94, 95, 97, 20, 57, 79, 70, 39, 75, 27, 14, 86, 97, 66, 15, 13, 59, 38, 17, 73, 78, 97, 3, 36, 89, 5, 88, 10, 4, 15, 33, 57, 4, 46, 61, 57, 42, 70, 48, 53, 94, 89, 87, 61, 74, 46, 57, 80, 97, 25, 5, 31, 28, 96, 1, 35, 8, 16, 89, 89, 23, 47, 8, 38, 71, 12, 26, 84, 19, 67, 69, 17, 31, 54, 27, 81, 98, 89, 61, 75, 4, 81, 22, 48, 87, 7, 35, 66, 7, 58, 54, 15, 76, 99, 76, 2, 20, 80, 3, 47, 77, 11, 18, 65, 40, 77, 81, 49, 14, 33, 63, 97, 51, 14, 81, 94, 25, 86, 89, 93, 36, 56, 46, 20, 19, 87, 6, 84, 26, 48, 95, 38, 28, 48, 1, 25, 62, 72, 17, 35, 8, 9, 92, 25, 58, 61, 29, 3, 16, 38, 99, 85, 78, 98, 60, 27, 44, 67, 32, 28, 47, 20, 4, 44, 35, 64, 35, 93, 50, 12, 71, 8, 78, 71, 77, 89, 64, 25, 74, 23, 67, 50, 77, 49, 63, 59, 38, 49, 9, 80, 11, 94, 74, 61, 31, 56, 79, 75, 31, 14, 33, 90, 11, 86, 90, 1, 75, 80, 58, 12, 74, 22, 88, 8, 6, 27, 5, 18, 10, 24, 23, 46, 68, 68, 88, 56, 71, 68, 28, 96, 86, 76, 40, 51, 47, 51, 3, 20, 82, 5, 1, 8, 14, 52, 46, 78, 52, 92, 13, 43, 50, 58, 82, 23, 56, 40, 30, 90, 43, 14, 9, 91, 57, 3, 38, 87, 53, 52, 31, 5, 95, 17, 20, 82, 19, 60, 53, 69, 15, 13, 67, 64, 61, 51, 31, 38, 50, 3, 82, 15, 74, 22, 93, 81, 50, 4, 15, 40, 88, 8, 22, 5, 35, 55, 49, 34, 76, 78, 8, 75, 21, 99, 29, 81, 87, 44, 45, 96, 19, 67, 53, 20, 24, 29, 53, 19, 55, 61, 3, 73, 49, 95, 31, 89, 41, 16, 75, 88, 7, 23, 96, 85, 76, 51, 42, 63, 98, 36, 26, 67, 34, 57, 65, 50, 6, 60, 43, 89, 9, 42, 68, 63, 50, 85, 28, 64, 20, 44, 81, 63, 3, 37, 98, 91, 8, 85, 9, 16, 52, 41, 85, 2, 84, 83, 82, 48, 47, 53, 64, 30, 20, 31, 28, 59, 79, 82, 27, 56, 59, 54, 2, 67, 63, 77, 14, 42, 93, 38, 17, 86, 73, 42, 38, 68, 82, 2, 32, 32, 57, 7, 42, 16, 14, 97, 2, 45, 94, 9, 41, 4, 84, 99, 71, 23, 19, 56, 12, 98, 60, 14, 77, 63, 37, 95, 81, 70, 33, 97, 45, 7, 42, 93, 97, 37, 62, 38, 22, 20, 54, 73, 71, 79, 84, 41, 54, 41, 47, 81, 18, 7, 74, 4, 11, 2, 3, 89, 56, 2, 62, 11, 95, 2, 25, 12, 67, 7, 80, 96, 60, 28, 51, 73, 88, 9, 35, 62, 11, 44, 83, 89, 65, 11, 27, 43, 41, 5, 7, 91, 2, 93, 38, 76, 72, 9, 60, 43, 37, 36, 35, 3, 84, 83, 100, 16, 88, 12, 92, 82, 98, 11, 28, 83, 8, 99, 31, 79, 21, 72, 83, 12, 21, 88, 40, 13, 85, 66, 17, 6, 7, 24, 16, 41, 21, 96, 8, 84, 79, 53, 98, 4, 75, 39, 64, 6, 90, 90, 47, 44, 35, 5, 66, 67, 53, 95, 53, 70, 18, 97, 88, 96, 99, 12, 91, 80, 59, 56, 60, 66, 26, 57, 71, 45, 27, 58, 48, 34, 90, 67, 71, 31, 30, 87, 64, 88, 13, 26, 43, 15, 86, 39, 100, 97, 59, 20, 92, 19, 32, 90, 100, 29, 35, 46, 44, 75, 28, 96, 58, 14, 22, 85, 1, 5, 51, 34, 51, 9, 28, 75, 3, 85, 92, 100, 11, 71, 90, 60, 51, 62, 41, 32, 95, 86, 33, 86, 37, 74, 27, 20, 85, 81, 17, 45, 43, 99, 87, 39, 93, 63, 86, 35, 32, 71, 34, 5, 33, 3, 92, 52, 88, 85, 47, 8, 69, 56, 46, 88, 24, 44, 42, 2, 83, 27, 79, 7, 18, 84, 40, 58, 54, 35, 73, 8, 11, 77, 24, 77, 33, 5, 94, 29, 28, 4, 32, 36, 13, 71, 85, 62, 33, 71, 85, 37, 52, 46, 80, 22, 38, 63, 75, 42, 18, 5, 42, 80, 83, 48, 33, 78, 51, 46, 59, 54, 6, 40, 70, 90, 63, 16, 17, 26, 52, 61, 69, 9, 58, 14, 26, 40, 36, 43, 53, 84, 86, 34, 21, 68, 58, 41, 14, 2, 16, 60, 88, 66, 31, 37, 67, 67, 12, 7, 41, 41, 73, 100, 11, 42, 45, 26, 85, 17, 75, 88, 51, 86, 54, 92, 11, 10, 99, 84, 88, 43, 89, 30, 68, 39, 97, 96, 76, 1, 62, 41, 30, 34, 1, 87, 56, 89, 65, 96, 11, 19, 77, 59, 84, 100, 100, 61, 30, 33, 47, 78, 76, 95, 46, 97, 4, 34, 25, 87, 54, 51, 9, 62, 85, 25, 12, 90, 93, 29, 59, 34, 27, 38, 89, 22, 21, 63, 81, 43, 78, 7, 12, 81, 19, 56, 51, 100, 41, 50, 59, 100, 72, 31, 56, 55, 73, 41, 82, 72, 25, 100, 61, 67, 94, 90, 10, 16, 12, 100, 43, 38, 44, 59, 20, 93, 31, 4, 37, 44, 76, 32, 68, 81, 26, 10, 88, 27, 48, 90, 65, 64, 100, 26, 62, 31, 77, 60, 67, 91, 39, 36, 84, 80, 63, 85, 60, 2, 1, 33, 8, 72, 28, 70, 60, 63, 70, 69, 44, 19, 17, 38, 53, 32, 30, 34, 13, 98, 71, 19, 33, 87, 14, 82, 96, 92, 52, 61, 80, 1, 74, 29, 28, 23, 93, 11, 3, 37, 28, 59, 7, 53, 61, 17, 46, 57, 59, 44, 72, 100, 24, 36, 18, 76, 55, 37, 47, 6, 82, 2, 20, 43, 91, 78, 2, 9, 8, 82, 87, 51, 6, 79, 63, 12, 43, 54, 34, 74, 14, 25, 5, 23, 87, 4, 96, 35, 16, 76, 17, 74, 49, 65, 33, 44, 31, 21, 77, 62, 34, 48, 43, 71, 85, 64, 41, 31, 25, 87, 85, 28, 60, 94, 79, 93, 72, 5, 40, 3, 34, 91, 53, 44, 64, 19, 72, 2, 33, 79, 60, 41, 83, 33, 60, 79, 89, 98, 28, 57, 46, 61, 92, 87, 65, 68, 99, 47, 79, 27, 80, 99, 44, 21, 94, 54, 89, 57, 88, 9, 28, 91, 76, 56, 30, 97, 17, 61, 25, 29, 50, 62, 86, 57, 97, 73, 66, 100, 56, 22, 70, 10, 75, 31, 62, 24, 76, 94, 28, 18, 95, 98, 3, 93, 46, 15, 21, 59, 78, 9, 16, 60, 61, 28, 40, 94, 88, 95, 44, 6, 73, 38, 70, 78, 76, 49, 21, 72, 61, 91, 9, 51, 19, 68, 1, 10, 58, 52, 74, 100, 38, 42, 92, 35, 54, 28, 35, 27, 95, 45, 9, 32, 6, 60, 73, 18, 61, 43, 18, 84, 37, 51, 33, 92, 73, 86, 95, 32, 33, 26, 38, 41, 87, 74, 26, 76, 16, 71, 77, 61, 17, 95, 28, 17, 54, 37, 65, 91, 77, 86, 63, 96, 21, 18, 64, 76, 51, 83, 23, 22, 1, 16, 28, 45, 89, 13, 38, 25, 1, 73, 22, 8, 18, 68, 59, 13, 65, 23, 48, 62, 35, 54, 65, 68, 27, 3, 78, 54, 77, 6, 51, 31, 84, 17, 45, 87, 45, 100, 65, 65, 87, 40, 25, 77, 30, 74, 36, 31, 14, 88, 43, 80, 3, 9, 46, 23, 20, 47, 33, 79, 28, 2, 20, 8, 58, 22, 62, 96, 46, 61, 67, 83, 13, 31, 18, 11, 94, 10, 89, 6, 76, 42, 61, 2, 35, 15, 16, 57, 6, 45, 68, 73, 18, 49, 14, 1, 31, 70, 69, 32, 98, 23, 89, 14, 73, 60, 44, 76, 8, 61, 83, 71, 45, 81, 94, 73, 32, 99, 56, 20, 9, 81, 88, 83, 65, 7, 45, 94, 26, 23, 67, 92, 42, 92, 1, 43, 88, 81, 58, 35, 27, 6, 69, 89, 62, 73, 61, 42, 56, 19, 51, 44, 42, 35, 7, 82, 38, 97, 97, 27, 44, 56, 19, 55, 92, 20, 81, 37, 87, 10, 11, 70, 32, 32, 65, 86, 58, 28, 42, 70, 83, 64, 27, 88, 100, 13, 74, 54, 46, 7, 37, 88, 29, 79, 86, 77, 100, 33, 66, 100, 35, 86, 72, 26, 89, 80, 100, 12, 16, 65, 1, 80, 61, 85, 28, 70, 53, 30, 26, 1, 96, 60, 91, 42, 27, 61, 12, 4, 94, 69, 50, 11, 20, 16, 47, 73, 34, 94, 7, 25, 43, 20, 26, 25, 17, 55, 5, 85, 67, 95, 91, 47, 61, 48, 7, 41, 40, 51, 98, 34, 8, 64, 49, 61, 43, 16, 84, 38, 38, 74, 24, 80, 14, 23, 15, 40, 70, 36, 72, 49, 94, 53, 92, 96, 57, 20, 99, 8, 21, 65, 74, 71, 36, 22, 34, 18, 23, 99, 73, 54, 87, 91, 9, 2, 44, 71, 97, 89, 78, 84, 97, 78, 40, 11, 94, 57, 42, 41, 27, 45, 63, 2, 58, 91, 79, 2, 54, 25, 12, 42, 64, 35, 61, 33, 69, 31, 18, 33, 66, 13, 10, 99, 94, 33, 52, 11, 81, 58, 56, 41, 94, 32, 43, 75, 19, 76, 88, 53, 30, 25, 1, 63, 52, 65, 66, 10, 31, 68, 34, 95, 44, 67, 33, 79, 10, 50, 33, 45, 3, 66, 71, 94, 19, 100, 54, 13, 43, 65, 78, 87, 22, 12, 30, 40, 76, 94, 39, 97, 14, 70, 49, 93, 40, 5, 91, 99, 20, 69, 62, 12, 61, 64, 66, 88, 19, 94, 21, 46, 43, 80, 100, 27, 20, 28, 41, 60, 37, 5, 95, 8, 26, 76, 60, 65, 39, 16, 8, 41, 49, 61, 48, 82, 75, 60, 78, 38, 72, 42, 67, 18, 29, 74, 83, 36, 11, 77, 6, 20, 86, 61, 52, 9, 37, 89, 50, 5, 53, 75, 9, 22, 71, 22, 13, 26, 99, 47, 29, 33, 40, 90, 98, 67, 38, 52, 86, 64, 61, 81, 47, 15, 53, 100, 61, 54, 49, 93, 75, 26, 40, 94, 98, 51, 15, 54, 31, 17, 5, 80, 55, 66, 96, 10, 73, 57, 18, 64, 26, 36, 30, 98, 71, 91, 97, 3, 70, 2, 29, 12, 84, 29, 65, 6, 94, 47, 50, 74, 19, 73, 17, 32, 94, 81, 27, 15, 84, 27, 7, 38, 59, 93, 63, 6, 43, 6, 96, 68, 70, 57, 94, 50, 15, 92, 68, 85, 30, 10, 36, 20, 86, 14, 47, 90, 46, 54, 37, 71, 77, 14, 50, 33, 43, 100, 45, 63, 52, 81, 4, 87, 98, 46, 55, 55, 1, 21, 21, 10, 63, 11, 51, 15, 31, 96, 2, 67, 5, 66, 82, 66, 68, 58, 38, 77, 78, 28, 73, 9, 87, 8, 36, 43, 83, 35, 21, 7, 55, 16, 15, 99, 97, 10, 83, 37, 76, 23, 22, 18, 2, 68, 66, 27, 88, 19, 42, 44, 9, 9, 3, 59, 52, 98, 79, 92, 11, 14, 25, 65, 79, 56, 99, 9, 81, 15, 27, 57, 68, 29, 47, 33, 8, 9, 100, 32, 60, 28, 71, 79, 76, 88, 66, 64, 39, 5, 78, 47, 88, 21, 1, 48, 38, 39, 19, 41, 89, 85, 78, 85, 84, 40, 42, 1, 77, 6, 45, 21, 86, 58, 85, 12, 11, 5, 28, 91, 26, 14, 70, 61, 7, 25, 29, 74, 94, 74, 25, 88, 14, 72, 59, 4, 99, 39, 2, 60, 49, 32, 29, 1, 78, 22, 80, 98, 51, 87, 40, 71, 39, 17, 37, 24, 64, 33, 41, 6, 22, 60, 61, 17, 11, 59, 68, 65, 27, 61, 65, 15, 75, 68, 84, 40, 76, 77, 12, 29, 10, 40, 57, 70, 78, 96, 79, 40, 100, 56, 57, 91, 28, 68, 10, 5, 34, 18, 37, 36, 84, 38, 87, 65, 49, 59, 50, 23, 86, 85, 28, 54, 5, 53, 9, 67, 65, 1, 3, 5, 61, 26, 14, 88, 54, 79, 65, 56, 11, 80, 10, 26, 72, 33, 56, 84, 88, 93, 69, 69, 34, 24, 52, 88, 66, 46, 47, 12, 98, 19, 77, 60, 83, 54, 53, 2, 34, 83, 37, 1, 13, 18, 84, 7, 97, 41, 82, 20, 32, 71, 9, 23, 27, 54, 64, 20, 51, 2, 69, 92, 29, 98, 75, 92, 99, 7, 98, 18, 59, 61, 67, 55, 7, 97, 84, 79, 95, 97, 23, 24, 62, 65, 88, 89, 35, 83, 25, 11, 44, 56, 14, 56, 5, 49, 99, 37, 71, 53, 33, 60, 96, 42, 19, 54, 36, 79, 85, 87, 50, 23, 64, 54, 96, 23, 43, 28, 77, 57, 3, 63, 34, 76, 42, 66, 38, 10, 7, 32, 97, 76, 10, 6, 58, 54, 7, 63, 100, 32, 5, 32, 23, 19, 33, 91, 40, 28, 79, 45, 96, 49, 65, 100, 22, 51, 72, 73, 12, 97, 87, 48, 82, 75, 10, 43, 66, 8, 55, 93, 13, 70, 54, 19, 84, 23, 25, 57, 15, 62, 46, 79, 51, 3, 63, 91, 15, 3, 66, 24, 81, 40, 97, 33, 47, 92, 34, 38, 10, 35, 99, 100, 67, 62, 8, 28, 96, 86, 89, 86, 59, 55, 44, 2, 19, 29, 63, 24, 51, 24, 59, 59, 16, 2, 1, 76, 78, 19, 17, 8, 55, 52, 27, 16, 15, 91, 38, 61, 20, 50, 65, 60, 24, 71, 92, 57, 83, 22, 54, 87, 48, 23, 48, 69, 5, 79, 87, 87, 46, 30, 19, 49, 92, 84, 50, 6, 23, 25, 87, 47, 10, 60, 54, 23, 14, 93, 10, 38, 27, 9, 68, 24, 40, 95, 5, 55, 69, 59, 84, 7, 13, 57, 27, 18, 70, 29, 55, 93, 52, 33, 62, 23, 8, 90, 90, 34, 81, 61, 47, 39, 78, 100, 13, 3, 56, 27, 95, 71, 36, 63, 23, 77, 26, 80, 3, 28, 76, 8, 100, 73, 62, 2, 76, 70, 37, 92, 49, 24, 64, 16, 37, 50, 6, 80, 41, 96, 84, 81, 77, 61, 70, 47, 86, 63, 76, 25, 69, 16, 16, 51, 24, 55, 4, 14, 83, 33, 79, 52, 91, 96, 78, 98, 36, 22, 5, 92, 77, 18, 26, 29, 43, 89, 32, 33, 46, 82, 62, 55, 61, 62, 91, 24, 22, 18, 8, 26, 77, 25, 75, 33, 41, 99, 12, 8, 37, 58, 12, 28, 52, 2, 91, 92, 22, 73, 40, 66, 97, 15, 79, 97, 29, 10, 71, 60, 36, 73, 26, 94, 48, 21, 43, 78, 29, 1, 91, 22, 70, 63, 62, 57, 25, 21, 51, 78, 24, 73, 26, 83, 26, 67, 51, 78, 87, 29, 57, 68, 38, 94, 92, 82, 50, 8, 36, 50, 38, 100, 1, 87, 55, 14, 77, 84, 58, 21, 65, 69, 29, 70, 42, 30, 31, 95, 87, 73, 19, 43, 48, 43, 2, 8, 43, 66, 11, 54, 54, 13, 12, 79, 56, 65, 69, 48, 51, 73, 73, 98, 12, 98, 2, 49, 26, 65, 9, 90, 86, 12, 65, 35, 65, 96, 95, 48, 73, 7, 86, 69, 68, 34, 16, 89, 24, 52, 12, 25, 36, 19, 73, 20, 96, 62, 57, 67, 72, 70, 97, 27, 73, 5, 35, 35, 59, 61, 46, 20, 16, 48, 68, 42, 66, 29, 64, 21, 80, 93, 43, 85, 54, 90, 28, 67, 95, 69, 55, 76, 44, 14, 80, 98, 27, 18, 100, 71, 9, 76, 78, 22, 71, 26, 83, 97, 87, 60, 69, 72, 33, 23, 37, 33, 5, 74, 49, 76, 67, 7, 67, 80, 29, 43, 79, 99, 14, 75, 23, 58, 39, 59, 12, 12, 38, 49, 70, 6, 33, 81, 41, 79, 86, 15, 94, 9, 62, 13, 38, 22, 68, 55, 77, 15, 61, 88, 51, 94, 96, 7, 97, 84, 91, 29, 33, 23, 23, 64, 21, 26, 75, 9, 53, 16, 1, 51, 31, 66, 55, 88, 60, 42, 59, 87, 60, 82, 1, 24, 94, 14, 65, 76, 30, 58, 67, 90, 56, 38, 43, 96, 90, 37, 30, 32, 67, 28, 7, 39, 76, 59, 95, 82, 86, 3, 33, 56, 10, 83, 53, 65, 17, 16, 16, 8, 75, 79, 17, 86, 34, 23, 97, 15, 17, 76, 22, 58, 86, 17, 36, 70, 44, 16, 20, 47, 63, 69, 57, 89, 3, 93, 38, 64, 28, 99, 100, 67, 18, 12, 71, 88, 98, 89, 53, 87, 34, 95, 86, 13, 62, 4, 20, 57, 10, 25, 23, 20, 57, 6, 73, 39, 47, 22, 26, 45, 49, 51, 85, 31, 82, 21, 62, 59, 61, 85, 38, 96, 84, 21, 65, 23, 20, 80, 18, 59, 4, 69, 92, 78, 2, 33, 80, 10, 20, 88, 23, 55, 69, 48, 84, 78, 56, 86, 95, 47, 66, 83, 53, 36, 44, 79, 19, 3, 11, 1, 69, 20, 48, 24, 64, 67, 44, 88, 24, 26, 55, 95, 42, 97, 3, 70, 56, 96, 6, 95, 75, 71, 95, 77, 64, 81, 58, 84, 50, 37, 17, 43, 32, 63, 25, 7, 26, 15, 78, 26, 8, 82, 69, 85, 99, 33, 57, 39, 59, 76, 23, 81, 23, 58, 84, 18, 88, 75, 60, 85, 18, 78, 3, 97, 17, 38, 66, 77, 9, 36, 81, 4, 100, 58, 3, 3, 9, 34, 26, 9, 7, 3, 98, 52, 63, 16, 55, 17, 36, 50, 81, 21, 1, 78, 68, 2, 45, 6, 62, 73, 74, 80, 75, 20, 26, 31, 90, 4, 79, 100, 40, 76, 18, 1, 65, 19, 45, 71, 80, 89, 21, 37, 8, 12, 60, 85, 69, 17, 67, 53, 11, 98, 46, 24, 81, 95, 37, 48, 60, 33, 5, 83, 67, 13, 81, 29, 24, 87, 31, 49, 98, 43, 20, 24, 100, 75, 54, 94, 70, 66, 25, 81, 32, 44, 5, 86, 21, 58, 87, 65, 70, 35, 49, 40, 98, 44, 49, 47, 44, 19, 47, 62, 37, 54, 9, 96, 54, 28, 50, 70, 79, 60, 49, 100, 96, 17, 3, 54, 14, 17, 11, 40, 43, 81, 42, 24, 86, 92, 91, 39, 21, 82, 44, 6, 81, 13, 41, 44, 93, 46, 15, 36, 91, 93, 40, 17, 26, 76, 64, 47, 94, 12, 25, 66, 50, 14, 93, 96, 95, 52, 62, 27, 13, 85, 74, 68, 11, 27, 41, 17, 8, 5, 61, 23, 100, 86, 72, 14, 3, 93, 4, 24, 46, 6, 83, 15, 75, 96, 10, 16, 45, 42, 14, 92, 36, 93, 88, 55, 85, 85, 50, 11, 68, 6, 30, 93, 1, 8, 81, 3, 92, 11, 31, 75, 43, 40, 9, 61, 42, 57, 93, 44, 12, 77, 89, 25, 6, 14, 65, 44, 42, 11, 25, 85, 43, 25, 4, 11, 14, 18, 46, 16, 1, 37, 55, 91, 28, 5, 5, 70, 65, 86, 54, 77, 67, 29, 15, 94, 34, 51, 18, 35, 10, 54, 35, 52, 56, 56, 31, 30, 58, 4, 42, 13, 27, 81, 97, 52, 11, 75, 84, 91, 83, 28, 66, 29, 39, 32, 80, 8, 29, 46, 60, 81, 6, 61, 27, 70, 33, 37, 11, 84, 34, 78, 90, 3, 73, 28, 9, 21, 22, 43, 93, 31, 68, 34, 68, 18, 3, 96, 11, 91, 58, 18, 1, 99, 76, 72, 57, 57, 47, 82, 81, 5, 95, 96, 11, 87, 75, 45, 2, 76, 90, 44, 5, 75, 2, 60, 61, 32, 40, 45, 88, 11, 2, 56, 51, 74, 50, 33, 51, 52, 90, 21, 100, 10, 87, 12, 47, 78, 43, 69, 17, 42, 1, 50, 67, 89, 51, 70, 73, 1, 85, 76, 53, 2, 27, 25, 12, 18, 76, 41, 63, 15, 55, 74, 25, 27, 100, 22, 43, 53, 34, 46, 93, 18, 34, 89, 92, 67, 93, 38, 39, 30, 88, 74, 17, 72, 83, 78, 79, 55, 50, 44, 63, 52, 99, 61, 28, 42, 41, 51, 42, 49, 45, 19, 28, 72, 58, 3, 44, 12, 100, 52, 70, 17, 69, 99, 5, 29, 33, 30, 37, 26, 50, 27, 61, 93, 35, 31, 90, 9, 14, 88, 4, 76, 26, 3, 93, 9, 97, 6, 23, 19, 74, 73, 29, 24, 57, 26, 96, 19, 18, 43, 9, 69, 77, 28, 62, 80, 3, 46, 9, 6, 79, 97, 18, 54, 57, 39, 72, 34, 15, 85, 78, 99, 86, 81, 5, 32, 97, 48, 37, 21, 69, 93, 55, 92, 64, 89, 2, 63, 84, 11, 39, 81, 29, 93, 92, 80, 33, 55, 88, 93, 76, 57, 83, 94, 36, 60, 99, 96, 8, 19, 38, 92, 94, 34, 90, 72, 4, 9, 92, 46, 72, 28, 52, 39, 8, 18, 89, 64, 65, 84, 100, 66, 10, 89, 57, 26, 59, 92, 27, 24, 54, 22, 58, 78, 69, 59, 47, 87, 75, 66, 12, 5, 72, 89, 76, 59, 57, 81, 9, 73, 76, 66, 75, 81, 90, 52, 19, 53, 93, 15, 18, 7, 51, 97, 11, 15, 74, 92, 58, 99, 17, 13, 92, 90, 90, 35, 67, 48, 76, 67, 94, 48, 5, 26, 94, 35, 84, 87, 8, 22, 33, 29, 83, 92, 11, 3, 19, 9, 91, 48, 96, 41, 14, 83, 64, 97, 19, 60, 100, 91, 63, 50, 71, 55, 61, 65, 38, 75, 70, 84, 51, 43, 76, 7, 84, 91, 58, 92, 19, 66, 52, 34, 68, 12, 16, 68, 71, 94, 50, 19, 60, 38, 14, 66, 82, 44, 72, 7, 80, 12, 38, 87, 60, 88, 73, 80, 31, 33, 5, 71, 100, 27, 34, 17, 73, 87, 70, 68, 29, 1, 14, 72, 89, 95, 85, 78, 32, 63, 97, 71, 87, 77, 22, 93, 82, 9, 44, 21, 10, 98, 14, 43, 7, 50, 97, 20, 84, 99, 87, 71, 12, 24, 59, 62, 46, 98, 19, 6, 44, 79, 78, 11, 66, 52, 5, 5, 36, 67, 15, 50, 16, 52, 20, 47, 14, 4, 17, 62, 89, 99, 64, 53, 29, 98, 19, 25, 1, 84, 74, 16, 34, 76, 1, 36, 36, 38, 27, 55, 90, 68, 68, 34, 79, 79, 19, 31, 78, 96, 85, 57, 90, 85, 39, 6, 8, 51, 73, 71, 20, 5, 57, 37, 40, 22, 72, 17, 51, 60, 88, 46, 63, 17, 37, 76, 88, 77, 40, 11, 63, 61, 81, 7, 22, 61, 21, 20, 11, 22, 75, 42, 39, 83, 62, 2, 92, 87, 78, 9, 7, 92, 14, 16, 42, 58, 91, 46, 21, 96, 2, 13, 6, 90, 22, 25, 14, 57, 51, 44, 26, 27, 81, 40, 79, 28, 59, 20, 15, 6, 7, 87, 7, 10, 43, 33, 5, 5, 17, 36, 64, 4, 79, 65, 2, 5, 60, 37, 77, 63, 31, 54, 7, 70, 26, 63, 85, 85, 17, 40, 17, 29, 94, 58, 94, 54, 36, 80, 10, 2, 49, 86, 36, 61, 82, 84, 71, 1, 22, 70, 49, 61, 59, 85, 16, 95, 9, 54, 31, 42, 21, 65, 57, 24, 37, 87, 30, 44, 75, 59, 43, 11, 98, 76, 31, 91, 14, 12, 11, 58, 87, 12, 78, 50, 99, 75, 26, 51, 47, 6, 68, 56, 46, 83, 64, 80, 22, 12, 88, 74, 21, 97, 46, 80, 54, 68, 81, 56, 66, 86, 54, 32, 19, 77, 35, 92, 10, 74, 95, 2, 84, 69, 75, 5, 13, 58, 43, 37, 86, 63, 23, 24, 65, 34, 14, 6, 81, 67, 65, 5, 22, 62, 3, 25, 12, 38, 31, 36, 94, 35, 96, 57, 80, 86, 7, 9, 65, 66, 41, 28, 49, 79, 85, 52, 19, 11, 96, 89, 83, 85, 80, 67, 79, 6, 27, 32, 91, 43, 20, 48, 86, 16, 11, 80, 3, 51, 29, 91, 20, 57, 97, 48, 86, 49, 41, 21, 33, 87, 53, 5, 6, 83, 87, 68, 67, 67, 77, 69, 39, 21, 88, 84, 76, 68, 69, 41, 43, 72, 69, 9, 70, 12, 62, 91, 63, 74, 43, 47, 18, 35, 70, 54, 20, 93, 12, 48, 24, 78, 16, 33, 29, 30, 98, 9, 18, 60, 51, 29, 33, 38, 3, 95, 53, 40, 26, 79, 30, 37, 61, 45, 93, 85, 16, 96, 39, 80, 10, 40, 59, 32, 17, 23, 61, 4, 75, 41, 92, 65, 4, 66, 32, 22, 25, 76, 57, 45, 71, 36, 50, 98, 13, 64, 28, 64, 63, 66, 61, 94, 73, 35, 56, 21, 11, 61, 89, 1, 21, 49, 1, 58, 37, 7, 44, 17, 39, 1, 73, 43, 85, 39, 18, 4, 35, 53, 78, 69, 23, 94, 78, 41, 18, 72, 89, 3, 3, 19, 12, 5, 55, 23, 71, 100, 49, 81, 5, 65, 88, 44, 90, 85, 81, 54, 85, 28, 83, 30, 4, 77, 77, 38, 23, 67, 66, 65, 78, 27, 70, 99, 24, 62, 68, 9, 6, 50, 35, 49, 56, 83, 17, 50, 80, 62, 67, 84, 40, 26, 62, 98, 23, 9, 28, 86, 78, 13, 54, 61, 40, 49, 90, 14, 32, 19, 55, 49, 4, 51, 61, 1, 54, 5, 72, 13, 20, 29, 52, 1, 33, 19, 38, 43, 88, 82, 3, 41, 16, 22, 13, 71, 36, 89, 68, 95, 87, 52, 80, 51, 96, 80, 33, 87, 38, 37, 20, 87, 82, 53, 98, 6, 80, 63, 7, 77, 98, 97, 51, 55, 84, 23, 55, 56, 79, 14, 67, 14, 89, 25, 24, 72, 73, 4, 43, 49, 51, 92, 52, 95, 92, 74, 75, 100, 68, 52, 5, 82, 73, 33, 8, 79, 5, 94, 39, 45, 10, 97, 30, 20, 58, 60, 28, 17, 97, 36, 79, 57, 13, 75, 87, 99, 48, 50, 66, 17, 54, 67, 48, 71, 100, 91, 51, 84, 48, 42, 11, 60, 34, 24, 59, 19, 55, 62, 94, 84, 24, 75, 81, 34, 32, 21, 56, 44, 43, 9, 36, 20, 33, 84, 47, 68, 36, 48, 40, 72, 74, 79, 86, 6, 25, 13, 92, 94, 47, 61, 42, 100, 18, 15, 92, 19, 98, 86, 98, 94, 98, 15, 65, 30, 27, 85, 5, 27, 18, 96, 21, 51, 3, 13, 48, 60, 73, 56, 43, 86, 28, 87, 61, 3, 48, 34, 100, 72, 36, 33, 7, 64, 93, 24, 47, 43, 55, 50, 15, 100, 29, 78, 37, 35, 10, 2, 39, 63, 80, 65, 47, 63, 17, 41, 3, 31, 37, 35, 42, 34, 57, 28, 55, 62, 47, 91, 71, 53, 4, 69, 48, 58, 96, 90, 58, 61, 28, 33, 45, 57, 87, 13, 80, 57, 25, 26, 67, 46, 38, 15, 82, 95, 63, 83, 83, 76, 78, 11, 51, 18, 7, 18, 22, 65, 4, 25, 60, 63, 10, 11, 57, 89, 55, 86, 66, 71, 41, 100, 59, 5, 5, 48, 59, 42, 89, 41, 65, 51, 38, 99, 85, 7, 11, 52, 31, 20, 13, 4, 17, 52, 37, 66, 35, 26, 67, 65, 97, 7, 30, 14, 64, 46, 44, 91, 17, 88, 44, 17, 23, 60, 58, 68, 51, 80, 65, 76, 95, 66, 2, 77, 79, 26, 89, 3, 86, 58, 83, 81, 5, 58, 50, 40, 93, 48, 6, 59, 55, 83, 59, 32, 52, 27, 13, 95, 83, 94, 88, 90, 42, 12, 99, 97, 25, 80, 15, 90, 34, 63, 75, 1, 84, 58, 59, 85, 20, 91, 94, 88, 52, 34, 23, 95, 84, 6, 66, 98, 19, 85, 36, 10, 55, 40, 76, 57, 58, 7, 96, 48, 59, 45, 19, 28, 91, 27, 54, 81, 16, 75, 17, 7, 56, 75, 50, 53, 69, 96, 24, 89, 80, 90, 10, 66, 58, 22, 95, 48, 48, 1, 36, 6, 63, 3, 14, 34, 37, 59, 39, 35, 41, 92, 47, 100, 8, 45, 11, 25, 67, 54, 56, 26, 33, 77, 50, 23, 98, 41, 88, 26, 5, 92, 25, 19, 94, 1, 9, 17, 56, 77, 94, 93, 56, 40, 86, 84, 77, 61, 75, 42, 69, 5, 77, 100, 84, 4, 46, 67, 61, 59, 85, 73, 1, 19, 64, 76, 83, 88, 1, 93, 75, 87, 78, 71, 74, 71, 54, 2, 29, 62, 2, 96, 21, 25, 47, 7, 31, 59, 94, 88, 22, 45, 26, 25, 5, 60, 48, 37, 72, 27, 84, 34, 42, 99, 93, 19, 4, 82, 22, 88, 1, 27, 43, 96, 77, 78, 1, 74, 63, 94, 85, 84, 15, 43, 5, 90, 71, 5, 8, 10, 64, 95, 27, 29, 38, 31, 63, 34, 59, 8, 12, 96, 19, 90, 21, 52, 79, 16, 22, 42, 93, 55, 75, 39, 64, 100, 7, 63, 42, 35, 24, 70, 60, 15, 9, 59, 70, 95, 47, 67, 45, 19, 87, 92, 85, 12, 79, 86, 43, 44, 24, 41, 15, 70, 33, 36, 79, 25, 17, 5, 53, 19, 98, 84, 64, 36, 22, 70, 6, 93, 62, 96, 11, 53, 20, 9, 92, 60, 40, 76, 14, 54, 19, 40, 100, 45, 49, 77, 29, 14, 40, 27, 71, 3, 7, 34, 65, 100, 83, 34, 30, 8, 1, 12, 6, 3, 67, 71, 10, 79, 95, 28, 6, 84, 2, 28, 14, 61, 25, 74, 23, 97, 74, 8, 28, 25, 33, 27, 26, 6, 25, 63, 78, 39, 77, 45, 45, 99, 15, 65, 27, 29, 35, 29, 41, 38, 91, 63, 99, 58, 34, 1, 74, 73, 95, 84, 9, 74, 17, 50, 62, 26, 65, 71, 21, 87, 6, 15, 12, 58, 24, 94, 73, 91, 21, 99, 16, 50, 73, 9, 22, 85, 43, 22, 85, 99, 77, 53, 52, 56, 23, 67, 62, 60, 92, 98, 40, 1, 25, 24, 7, 6, 22, 90, 28, 99, 53, 14, 59, 94, 25, 66, 30, 88, 65, 69, 87, 32, 87, 16, 78, 88, 80, 72, 89, 8, 16, 27, 13, 97, 15, 90, 7, 15, 51, 10, 92, 5, 31, 100, 84, 47, 75, 46, 64, 50, 39, 6, 45, 11, 78, 75, 64, 94, 23, 40, 21, 81, 76, 92, 18, 78, 70, 36, 6, 80, 71, 8, 2, 76, 3, 9, 23, 50, 41, 73, 91, 8, 41, 50, 79, 68, 49, 11, 41, 32, 75, 49, 41, 52, 47, 26, 95, 56, 6, 8, 26, 21, 78, 96, 73, 16, 18, 3, 39, 19, 10, 6, 19, 44, 64, 35, 46, 32, 54, 24, 16, 62, 92, 88, 17, 32, 12, 38, 71, 30, 1, 40, 45, 35, 17, 30, 11, 13, 88, 83, 70, 89, 53, 60, 69, 26, 65, 45, 46, 55, 43, 50, 44, 35, 50, 45, 18, 78, 87, 27, 3, 31, 63, 85, 34, 77, 19, 77, 3, 52, 6, 76, 97, 80, 80, 62, 42, 84, 77, 69, 20, 26, 99, 38, 57, 68, 10, 4, 62, 81, 12, 21, 22, 90, 19, 59, 40, 7, 38, 57, 32, 97, 19, 87, 72, 14, 24, 51, 9, 85, 78, 92, 53, 96, 69, 33, 79, 72, 90, 23, 62, 9, 61, 89, 7, 8, 9, 44, 49, 27, 36, 86, 1, 100, 50, 92, 78, 94, 63, 88, 32, 17, 56, 48, 75, 56, 21, 10, 54, 92, 25, 36, 21, 28, 32, 60, 60, 69, 14, 42, 58, 48, 33, 63, 40, 3, 18, 43, 90, 41, 1, 37, 86, 56, 63, 68, 26, 12, 41, 37, 82, 58, 66, 60, 32, 40, 25, 15, 36, 4, 94, 21, 52, 99, 94, 24, 36, 23, 78, 23, 84, 15, 78, 59, 52, 33, 10, 48, 67, 90, 5, 100, 99, 66, 32, 42, 22, 52, 68, 5, 44, 88, 22, 68, 86, 79, 15, 68, 66, 87, 45, 78, 61, 81, 15, 15, 43, 31, 20, 18, 24, 49, 22, 67, 50, 19, 51, 49, 61, 1, 61, 13, 66, 84, 34, 46, 54, 2, 87, 64, 74, 96, 99, 19, 82, 71, 49, 2, 48, 10, 54, 69, 56, 3, 88, 14, 44, 84, 33, 15, 46, 95, 63, 1, 13, 93, 22, 68, 71, 58, 55, 92, 10, 69, 80, 74, 72, 90, 84, 7, 9, 27, 20, 27, 100, 36, 7, 64, 40, 89, 86, 99, 28, 8, 98, 31, 68, 83, 28, 36, 11, 64, 62, 18, 75, 30, 68, 58, 22, 30, 99, 71, 53, 60, 33, 26, 29, 37, 97, 7, 2, 3, 81, 53, 26, 58, 89, 84, 7, 99, 36, 49, 84, 47, 78, 49, 62, 52, 28, 5, 94, 18, 47, 64, 44, 8, 64, 12, 62, 37, 42, 87, 75, 3, 77, 90, 65, 30, 15, 85, 5, 96, 81, 56, 79, 24, 71, 5, 82, 26, 34, 91, 81, 68, 49, 62, 80, 7, 99, 84, 41, 5, 46, 46, 67, 72, 1, 93, 72, 56, 44, 32, 36, 65, 4, 30, 34, 72, 10, 68, 25, 59, 32, 38, 14, 64, 41, 70, 51, 19, 91, 63, 55, 71, 91, 50, 48, 73, 40, 66, 45, 85, 69, 26, 3, 11, 14, 80, 21, 94, 52, 98, 26, 90, 85, 68, 1, 18, 76, 41, 56, 9, 30, 8, 86, 47, 49, 85, 1, 63, 49, 68, 38, 1, 86, 48, 7, 70, 38, 61, 89, 45, 14, 5, 52, 66, 66, 82, 69, 44, 89, 3, 32, 34, 12, 37, 37, 75, 8, 56, 21, 87, 3, 34, 13, 29, 44, 4, 99, 50, 36, 26, 36, 6, 93, 41, 61, 90, 12, 17, 52, 10, 32, 25, 35, 6, 10, 5, 76, 69, 36, 92, 89, 88, 98, 39, 88, 91, 41, 84, 86, 53, 95, 87, 22, 49, 80, 80, 98, 86, 69, 59, 45, 70, 100, 6, 4, 17, 30, 57, 96, 43, 44, 64, 72, 55, 73, 2, 77, 26, 40, 66, 49, 56, 63, 79, 24, 32, 98, 56, 14, 85, 50, 15, 61, 1, 100, 39, 85, 7, 45, 91, 1, 77, 93, 4, 65, 31, 62, 100, 81, 19, 85, 20, 21, 19, 30, 18, 21, 40, 14, 16, 1, 10, 84, 29, 26, 51, 52, 60, 24, 38, 75, 20, 64, 65, 4, 100, 99, 17, 47, 83, 8, 29, 58, 50, 13, 86, 88, 47, 83, 13, 62, 24, 13, 62, 14, 90, 1, 14, 76, 87, 25, 52, 69, 12, 35, 36, 57, 38, 74, 29, 22, 83, 79, 10, 18, 73, 84, 24, 67, 7, 75, 62, 18, 16, 98, 56, 22, 82, 39, 8, 32, 87, 74, 40, 87, 23, 29, 24, 55, 41, 76, 75, 8, 27, 67, 100, 60, 56, 76, 37, 2, 7, 13, 31, 53, 100, 86, 21, 51, 91, 1, 23, 11, 76, 11, 64, 56, 39, 72, 22, 30, 62, 7, 84, 90, 15, 68, 49, 51, 93, 27, 86, 3, 48, 11, 3, 24, 90, 35, 19, 42, 81, 100, 42, 97, 71, 88, 57, 62, 38, 66, 39, 44, 28, 97, 56, 34, 11, 28, 32, 48, 76, 56, 28, 59, 91, 84, 84, 92, 52, 63, 18, 35, 97, 79, 31, 47, 92, 29, 48, 14, 43, 22, 93, 2, 79, 70, 81, 1, 53, 99, 6, 74, 25, 50, 15, 78, 9, 28, 48, 18, 100, 33, 26, 58, 2, 87, 32, 55, 91, 84, 19, 95, 62, 8, 99, 87, 69, 93, 77, 61, 55, 71, 36, 49, 52, 6, 88, 86, 39, 81, 68, 97, 94, 19, 77, 57, 14, 71, 69, 31, 25, 75, 12, 8, 48, 82, 45, 27, 59, 3, 75, 8, 74, 100, 8, 85, 82, 95, 31, 76, 17, 1, 55, 51, 13, 92, 94, 75, 4, 78, 94, 66, 93, 9, 25, 10, 9, 75, 97, 80, 23, 13, 97, 41, 50, 93, 70, 48, 28, 28, 23, 85, 21, 92, 100, 83, 60, 32, 20, 43, 34, 23, 20, 19, 22, 8, 96, 11, 67, 89, 50, 65, 2, 3, 81, 41, 44, 81, 54, 16, 90, 62, 75, 70, 18, 6, 96, 93, 73, 64, 29, 95, 98, 2, 88, 33, 18, 46, 57, 66, 15, 68, 42, 75, 13, 85, 14, 21, 25, 76, 73, 98, 1, 16, 80, 15, 9, 20, 59, 15, 27, 18, 13, 6, 29, 62, 22, 43, 99, 99, 42, 28, 6, 94, 24, 23, 63, 62, 100, 65, 59, 70, 93, 83, 50, 82, 42, 16, 39, 53, 83, 57, 64, 16, 69, 30, 98, 38, 80, 94, 96, 2, 100, 96, 77, 48, 20, 93, 34, 93, 61, 100, 82, 18, 86, 64, 58, 9, 79, 25, 70, 19, 60, 53, 52, 24, 73, 98, 46, 92, 76, 62, 3, 94, 90, 85, 78, 6, 6, 36, 89, 19, 49, 11, 39, 90, 21, 48, 38, 70, 98, 79, 28, 66, 56, 59, 88, 85, 100, 75, 92, 90, 49, 73, 23, 79, 14, 9, 80, 43, 4, 3, 59, 3, 31, 98, 89, 6, 25, 11, 26, 18, 49, 76, 39, 88, 96, 69, 76, 71, 48, 26, 49, 85, 69, 43, 5, 26, 26, 26, 85, 77, 75, 10, 87, 13, 89, 29, 52, 97, 15, 98, 43, 87, 34, 74, 98, 67, 83, 78, 32, 14, 70, 39, 71, 79, 88, 60, 32, 46, 85, 33, 79, 90, 15, 53, 33, 12, 94, 16, 11, 99, 27, 78, 12, 28, 44, 33, 70, 13, 39, 1, 35, 96, 9, 73, 6, 61, 73, 1, 21, 45, 61, 65, 66, 65, 8, 16, 63, 20, 89, 65, 59, 27, 59, 78, 71, 17, 60, 73, 72, 84, 61, 91, 77, 58, 83, 90, 57, 19, 27, 10, 60, 60, 18, 57, 14, 47, 56, 81, 72, 1, 46, 78, 38, 48, 43, 12, 80, 21, 36, 57, 5, 100, 95, 81, 77, 52, 98, 59, 9, 11, 49, 67, 87, 66, 100, 99, 61, 44, 83, 74, 80, 54, 82, 64, 95, 87, 66, 19, 35, 85, 34, 84, 81, 81, 87, 1, 70, 38, 49, 94, 44, 30, 91, 36, 64, 61, 12, 50, 30, 14, 1, 53, 45, 15, 76, 85, 94, 77, 1, 62, 100, 6, 66, 84, 100, 25, 36, 46, 38, 19, 31, 75, 31, 18, 43, 2, 13, 44, 100, 86, 12, 12, 71, 21, 18, 58, 72, 41, 72, 21, 58, 8, 48, 2, 48, 73, 70, 52, 25, 5, 75, 31, 44, 100, 45, 95, 1, 32, 72, 60, 29, 62, 85, 46, 51, 75, 16, 71, 60, 59, 93, 60, 87, 17, 42, 86, 46, 11, 54, 8, 48, 82, 92, 9, 70, 13, 46, 12, 71, 9, 78, 5, 23, 1, 10, 41, 2, 98, 66, 50, 77, 77, 5, 91, 39, 45, 86, 83, 16, 55, 97, 9, 63, 39, 31, 51, 33, 57, 58, 78, 38, 68, 9, 96, 95, 32, 33, 52, 76, 90, 16, 40, 99, 44, 62, 7, 30, 58, 27, 43, 14, 13, 41, 32, 91, 66, 35, 18, 85, 74, 18, 63, 24, 72, 80, 33, 56, 29, 6, 22, 94, 24, 93, 17, 81, 64, 5, 54, 32, 66, 57, 34, 28, 13, 6, 96, 69, 64, 77, 52, 1, 62, 76, 52, 65, 12, 67, 13, 52, 33, 12, 67, 84, 33, 26, 48, 45, 54, 21, 41, 28, 43, 13, 15, 94, 93, 87, 80, 54, 27, 28, 28, 9, 22, 69, 16, 5, 93, 60, 28, 79, 14, 4, 11, 95, 17, 93, 68, 35, 78, 58, 61, 52, 64, 51, 24, 43, 84, 73, 45, 91, 79, 73, 23, 2, 10, 46, 26, 74, 90, 97, 23, 18, 40, 42, 37, 2, 94, 74, 100, 37, 5, 91, 60, 23, 34, 94, 67, 53, 94, 27, 40, 3, 45, 46, 10, 69, 28, 42, 73, 29, 99, 14, 32, 87, 26, 6, 99, 74, 1, 33, 58, 28, 36, 72, 15, 25, 64, 56, 62, 98, 52, 33, 75, 39, 6, 81, 68, 100, 73, 68, 31, 36, 76, 34, 80, 35, 94, 44, 61, 41, 34, 94, 93, 69, 21, 17, 84, 61, 5, 62, 81, 4, 11, 2, 43, 47, 89, 42, 70, 82, 83, 82, 33, 67, 99, 50, 92, 20, 5, 58, 37, 63, 80, 10, 45, 93, 57, 51, 60, 74, 60, 93, 6, 67, 92, 10, 66, 89, 86, 35, 48, 54, 97, 69, 87, 79, 49, 70, 7, 64, 30, 25, 93, 41, 13, 8, 13, 53, 27, 80, 18, 56, 31, 38, 80, 92, 95, 26, 41, 75, 3, 66, 37, 20, 49, 38, 80, 42, 84, 35, 2, 95, 59, 22, 39, 86, 96, 27, 36, 14, 12, 85, 9, 80, 94, 90, 39, 33, 55, 48, 99, 5, 9, 66, 36, 71, 72, 65, 99, 2, 16, 67, 89, 36, 19, 90, 6, 100, 56, 15, 3, 78, 92, 93, 40, 64, 95, 40, 49, 68, 85, 28, 28, 21, 13, 50, 45, 46, 19, 13, 21, 45, 31, 70, 33, 75, 41, 2, 20, 49, 61, 34, 49, 69, 94, 55, 93, 87, 4, 68, 49, 63, 51, 66, 39, 58, 77, 28, 41, 37, 19, 90, 54, 71, 36, 72, 42, 6, 69, 9, 3, 47, 100, 95, 85, 53, 68, 39, 33, 68, 27, 26, 10, 94, 74, 62, 98, 4, 62, 19, 79, 48, 80, 69, 22, 9, 1, 58, 21, 95, 63, 72, 68, 59, 31, 63, 11, 43, 42, 40, 8, 25, 80, 81, 2, 71, 36, 24, 92, 57, 76, 49, 16, 82, 68, 81, 10, 82, 63, 7, 87, 62, 96, 42, 12, 85, 60, 21, 72, 8, 45, 79, 13, 38, 74, 26, 65, 89, 17, 51, 65, 94, 2, 28, 27, 65, 27, 92, 88, 51, 56, 5, 36, 96, 80, 25, 38, 61, 89, 5, 6, 49, 58, 40, 8, 60, 5, 73, 35, 69, 91, 91, 95, 17, 100, 44, 74, 88, 28, 91, 28, 76, 9, 21, 19, 30, 13, 39, 80, 35, 27, 38, 67, 85, 58, 69, 87, 11, 29, 89, 47, 55, 50, 79, 67, 25, 50, 32, 64, 34, 76, 71, 14, 36, 56, 29, 99, 6, 63, 90, 71, 36, 26, 61, 22, 41, 30, 17, 64, 45, 28, 49, 97, 29, 2, 65, 72, 82, 94, 38, 80, 9, 76, 66, 34, 90, 59, 70, 48, 96, 45, 43, 27, 10, 44, 97, 37, 10, 68, 26, 74, 80, 24, 93, 50, 13, 67, 75, 85, 85, 65, 100, 40, 81, 58, 93, 8, 95, 10, 86, 68, 29, 66, 81, 66, 40, 16, 62, 47, 76, 70, 31, 62, 38, 50, 99, 21, 88, 64, 78, 76, 65, 56, 52, 42, 18, 70, 53, 7, 66, 14, 96, 73, 8, 12, 54, 35, 21, 85, 65, 82, 9, 67, 97, 57, 82, 43, 50, 30, 23, 59, 74, 8, 88, 91, 7, 30, 7, 63, 64, 22, 11, 96, 26, 1, 53, 33, 24, 57, 2, 97, 43, 35, 14, 75, 61, 63, 97, 80, 90, 85, 27, 84, 13, 9, 93, 38, 31, 86, 35, 83, 2, 11, 57, 18, 33, 51, 73, 69, 40, 45, 79, 94, 5, 46, 92, 30, 94, 70, 13, 73, 17, 71, 59, 11, 23, 89, 78, 32, 9, 81, 2, 23, 31, 93, 74, 70, 3, 78, 20, 47, 10, 87, 45, 24, 42, 100, 68, 20, 40, 9, 17, 28, 22, 97, 40, 54, 92, 25, 89, 94, 75, 59, 44, 3, 50, 91, 21, 7, 18, 42, 91, 74, 38, 99, 19, 82, 24, 44, 30, 66, 99, 32, 97, 59, 30, 66, 75, 81, 11, 24, 17, 77, 5, 44, 68, 2, 4, 83, 48, 54, 36, 85, 94, 20, 6, 92, 41, 89, 62, 36, 90, 18, 91, 22, 16, 36, 67, 24, 37, 53, 78, 11, 63, 10, 56, 89, 51, 14, 13, 89, 98, 70, 64, 100, 62, 3, 12, 19, 29, 17, 37, 81, 67, 68, 99, 53, 32, 61, 28, 54, 72, 36, 7, 53, 66, 26, 47, 51, 77, 31, 86, 85, 34, 89, 3, 33, 92, 12, 75, 2, 62, 66, 19, 30, 2, 53, 9, 72, 69, 99, 27, 63, 53, 29, 98, 24, 23, 8, 15, 75, 32, 77, 14, 93, 38, 8, 42, 67, 87, 3, 36, 42, 51, 77, 80, 92, 67, 70, 19, 17, 62, 37, 99, 1, 84, 44, 96, 91, 95, 59, 37, 98, 49, 31, 91, 8, 87, 74, 34, 95, 11, 18, 73, 62, 100, 98, 93, 59, 40, 68, 78, 25, 90, 65, 32, 5, 28, 71, 3, 88, 98, 13, 52, 22, 32, 5, 56, 39, 19, 14, 100, 29, 74, 99, 48, 94, 6, 2, 5, 63, 74, 5, 93, 86, 96, 83, 6, 32, 23, 24, 5, 50, 36, 54, 19, 21, 24, 80, 20, 51, 19, 10, 27, 49, 80, 72, 63, 49, 73, 55, 42, 17, 68, 28, 4, 24, 2, 30, 69, 71, 57, 5, 39, 34, 18, 53, 50, 34, 78, 15, 95, 29, 93, 67, 2, 53, 61, 60, 98, 75, 74, 16, 42, 59, 44, 61, 3, 9, 70, 10, 54, 66, 18, 34, 27, 4, 68, 42, 10, 78, 29, 49, 3, 91, 34, 89, 45, 1, 97, 68, 9, 60, 42, 74, 31, 52, 89, 98, 94, 29, 56, 78, 36, 30, 56, 39, 71, 9, 98, 93, 2, 40, 88, 13, 85, 43, 14, 16, 42, 51, 92, 52, 80, 27, 21, 33, 73, 44, 76, 7, 65, 9, 50, 70, 89, 3, 54, 11, 97, 8, 100, 37, 29, 23, 17, 48, 50, 94, 64, 70, 41, 37, 28, 49, 43, 41, 87, 91, 18, 86, 78, 81, 68, 70, 62, 95, 22, 91, 59, 15, 77, 57, 57, 48, 74, 25, 68, 65, 91, 17, 67, 33, 57, 70, 26, 73, 30, 38, 1, 41, 46, 1, 5, 21, 53, 11, 58, 55, 47, 27, 9, 44, 6, 4, 3, 39, 85, 27, 66, 82, 50, 40, 57, 41, 39, 42, 89, 2, 12, 72, 52, 49, 7, 89, 46, 12, 75, 49, 9, 28, 86, 92, 60, 63, 45, 97, 86, 51, 5, 77, 14, 80, 65, 27, 95, 44, 57, 39, 97, 88, 17, 38, 71, 91, 5, 22, 34, 75, 33, 87, 60, 29, 36, 96, 14, 61, 31, 96, 97, 24, 34, 5, 93, 91, 42, 23, 11, 79, 75, 35, 32, 33, 49, 72, 47, 17, 41, 17, 37, 9, 64, 45, 42, 93, 39, 95, 28, 67, 54, 74, 37, 59, 75, 22, 24, 61, 4, 43, 42, 43, 53, 47, 8, 39, 73, 27, 85, 66, 96, 39, 98, 16, 16, 54, 19, 44, 36, 23, 21, 15, 71, 58, 92, 79, 10, 2, 23, 81, 71, 26, 8, 41, 73, 99, 48, 70, 100, 39, 94, 58, 14, 30, 43, 28, 31, 92, 80, 69, 38, 9, 37, 50, 24, 68, 64, 99, 98, 43, 46, 95, 53, 62, 82, 73, 21, 63, 69, 47, 52, 11, 11, 73, 6, 54, 78, 55, 98, 31, 22, 68, 20, 32, 20, 61, 58, 51, 50, 99, 37, 26, 51, 69, 54, 90, 41, 46, 99, 29, 72, 48, 47, 98, 1, 42, 86, 81, 22, 27, 35, 36, 64, 98, 51, 8, 97, 44, 31, 69, 29, 57, 51, 17, 5, 33, 95, 51, 41, 83, 63, 27, 92, 80, 44, 96, 42, 14, 89, 31, 74, 69, 80, 78, 22, 85, 70, 26, 35, 30, 8, 90, 96, 22, 47, 36, 98, 59, 79, 43, 32, 52, 52, 73, 21, 21, 11, 26, 63, 98, 88, 91, 55, 47, 49, 56, 78, 41, 45, 56, 41, 72, 71, 51, 88, 10, 7, 86, 41, 73, 8, 100, 13, 77, 55, 45, 40, 11, 79, 72, 32, 55, 68, 10, 75, 88, 27, 78, 60, 42, 18, 51, 66, 100, 73, 80, 52, 29, 65, 55, 79, 5, 15, 38, 42, 84, 7, 82, 25, 90, 80, 42, 90, 59, 24, 6, 26, 39, 87, 90, 67, 12, 78, 1, 8, 12, 92, 94, 58, 30, 52, 57, 48, 18, 1, 26, 54, 82, 86, 20, 18, 20, 52, 71, 23, 87, 96, 47, 12, 81, 56, 11, 21, 17, 82, 37, 100, 56, 62, 83, 9, 16, 65, 38, 31, 66, 65, 75, 30, 64, 28, 90, 24, 1, 88, 98, 99, 63, 80, 35, 66, 93, 79, 92, 12, 93, 38, 97, 33, 35, 38, 15, 37, 80, 59, 31, 33, 44, 12, 73, 23, 47, 49, 97, 62, 27, 11, 80, 99, 45, 29, 92, 99, 8, 42, 34, 43, 82, 47, 10, 44, 88, 91, 65, 100, 55, 47, 99, 50, 90, 48, 44, 62, 85, 89, 10, 2, 97, 99, 54, 79, 76, 12, 89, 41, 87, 95, 3, 1, 27, 95, 2, 45, 7, 36, 74, 20, 13, 17, 75, 9, 22, 78, 16, 97, 34, 79, 95, 40, 46, 6, 34, 90, 96, 14, 20, 82, 98, 35, 30, 8, 100, 45, 69, 34, 15, 98, 100, 67, 11, 92, 43, 79, 36, 23, 78, 85, 15, 60, 49, 40, 34, 75, 28, 9, 29, 11, 100, 75, 50, 89, 39, 22, 69, 3, 32, 74, 6, 50, 54, 92, 46, 15, 51, 46, 18, 57, 23, 2, 38, 54, 18, 8, 78, 20, 63, 76, 23, 56, 53, 14, 85, 79, 8, 86, 52, 19, 48, 79, 29, 70, 9, 72, 39, 8, 93, 59, 86, 16, 36, 79, 38, 10, 15, 56, 23, 63, 83, 36, 39, 17, 77, 90, 8, 78, 100, 36, 21, 73, 83, 74, 83, 83, 22, 47, 66, 3, 11, 21, 10, 36, 14, 19, 13, 31, 6, 96, 8, 74, 62, 79, 25, 78, 68, 33, 90, 17, 18, 51, 83, 83, 44, 69, 38, 97, 59, 28, 5, 82, 57, 99, 39, 36, 51, 53, 100, 80, 65, 94, 87, 85, 29, 68, 58, 53, 2, 61, 82, 69, 90, 12, 77, 76, 60, 23, 69, 91, 15, 19, 63, 4, 96, 11, 10, 75, 68, 45, 100, 94, 29, 3, 98, 30, 27, 22, 27, 21, 38, 1, 31, 57, 78, 67, 85, 69, 59, 25, 93, 21, 26, 41, 9, 100, 40, 95, 70, 90, 87, 37, 14, 71, 17, 2, 48, 15, 8, 83, 88, 38, 52, 84, 83, 19, 70, 4, 6, 41, 16, 53, 68, 52, 72, 42, 67, 11, 56, 88, 60, 39, 85, 15, 99, 76, 99, 82, 26, 82, 65, 51, 74, 1, 97, 51, 9, 45, 33, 74, 52, 70, 76, 63, 89, 64, 27, 51, 58, 30, 41, 23, 24, 53, 53, 58, 94, 80];
let k = 88;
console.log(maxOperations(nums, k));

// Alternate solution using hash map:
const maxOperations2 = (nums2, k2) => {
    let map = new Map;
    let operations = 0;
    for (let num of nums2) {
        if (map.has(num)) {
            map.set(num, map.get(num) - 1);
            map.get(num) === 0 && map.delete(num)
            operations++;
        } else {
            map.set(k2 - num, map.get(k2 - num) + 1 || 1);
        }
    }
    return operations;
}

let nums2 = [80, 75, 31, 85, 66, 36, 95, 45, 59, 9, 75, 35, 70, 35, 93, 59, 99, 55, 80, 42, 51, 51, 87, 57, 77, 50, 63, 54, 47, 6, 39, 25, 6, 28, 79, 5, 52, 95, 10, 29, 37, 5, 84, 98, 44, 67, 69, 84, 100, 2, 50, 15, 100, 27, 75, 12, 3, 94, 46, 32, 44, 71, 11, 72, 54, 90, 81, 50, 68, 33, 82, 43, 87, 40, 4, 59, 57, 73, 66, 74, 11, 4, 21, 76, 69, 37, 27, 21, 80, 28, 65, 83, 37, 57, 59, 81, 98, 44, 42, 42, 20, 54, 99, 50, 49, 38, 50, 11, 81, 92, 38, 46, 62, 1, 76, 55, 30, 51, 1, 64, 83, 77, 6, 33, 46, 68, 23, 51, 8, 87, 74, 2, 26, 44, 8, 54, 37, 60, 68, 77, 29, 62, 79, 31, 86, 28, 96, 57, 45, 43, 7, 29, 89, 66, 6, 53, 97, 33, 24, 42, 82, 19, 57, 8, 55, 76, 96, 88, 38, 58, 10, 10, 56, 48, 17, 1, 20, 16, 79, 42, 33, 7, 78, 5, 41, 16, 55, 58, 43, 87, 52, 62, 93, 70, 5, 70, 65, 38, 65, 82, 42, 89, 63, 79, 40, 22, 94, 40, 35, 1, 16, 42, 93, 19, 27, 70, 95, 60, 23, 5, 81, 93, 17, 28, 96, 75, 23, 8, 48, 44, 66, 1, 58, 10, 49, 86, 3, 47, 52, 44, 31, 90, 60, 62, 43, 3, 64, 80, 95, 72, 42, 56, 84, 73, 62, 3, 94, 24, 84, 24, 46, 73, 76, 4, 65, 39, 48, 72, 10, 23, 26, 68, 3, 8, 86, 58, 87, 89, 66, 32, 31, 33, 15, 28, 97, 6, 33, 22, 96, 61, 45, 16, 50, 89, 98, 46, 3, 41, 50, 31, 20, 91, 73, 37, 28, 85, 3, 90, 22, 58, 69, 70, 74, 61, 56, 42, 70, 55, 87, 33, 6, 17, 36, 79, 57, 5, 73, 53, 11, 18, 82, 77, 98, 92, 84, 93, 100, 52, 18, 100, 3, 62, 64, 61, 13, 54, 69, 20, 63, 36, 4, 45, 10, 7, 36, 93, 3, 64, 72, 51, 10, 85, 61, 47, 42, 57, 74, 97, 29, 73, 65, 1, 70, 71, 74, 16, 40, 31, 16, 15, 6, 86, 73, 52, 4, 34, 97, 4, 24, 59, 50, 87, 3, 13, 21, 95, 82, 28, 60, 22, 92, 38, 19, 77, 68, 16, 49, 34, 75, 6, 56, 47, 27, 91, 64, 40, 56, 3, 92, 79, 59, 18, 60, 51, 47, 7, 51, 67, 88, 17, 90, 15, 47, 23, 93, 65, 74, 74, 60, 94, 85, 93, 30, 12, 43, 27, 57, 89, 1, 29, 55, 17, 97, 79, 67, 77, 28, 9, 8, 66, 98, 67, 41, 33, 1, 19, 59, 24, 93, 94, 65, 65, 74, 51, 17, 36, 89, 95, 42, 40, 80, 64, 67, 97, 16, 53, 42, 89, 69, 98, 27, 91, 65, 10, 38, 46, 60, 28, 41, 46, 10, 40, 61, 85, 75, 2, 82, 90, 55, 67, 24, 56, 24, 43, 100, 16, 12, 61, 66, 55, 17, 96, 4, 17, 66, 56, 66, 31, 24, 92, 38, 29, 98, 56, 1, 72, 18, 12, 84, 62, 46, 85, 28, 94, 54, 36, 20, 44, 93, 72, 70, 25, 91, 86, 95, 75, 30, 33, 77, 14, 10, 39, 55, 15, 16, 97, 98, 40, 76, 85, 51, 65, 60, 85, 65, 93, 6, 23, 17, 68, 53, 63, 94, 43, 71, 51, 36, 79, 36, 54, 14, 50, 30, 10, 12, 16, 5, 17, 78, 5, 53, 45, 33, 49, 74, 28, 53, 91, 59, 82, 70, 33, 19, 22, 52, 45, 97, 52, 2, 3, 13, 22, 84, 38, 83, 74, 45, 39, 75, 98, 100, 69, 86, 69, 28, 17, 28, 18, 89, 38, 74, 57, 96, 54, 36, 60, 47, 5, 26, 50, 57, 90, 38, 8, 19, 96, 41, 79, 76, 70, 94, 90, 59, 14, 10, 78, 19, 1, 69, 90, 18, 89, 88, 46, 84, 53, 15, 100, 51, 64, 83, 56, 45, 75, 25, 41, 61, 10, 86, 22, 61, 99, 31, 19, 50, 50, 56, 18, 9, 48, 1, 32, 34, 95, 49, 37, 39, 32, 32, 28, 82, 86, 86, 51, 19, 37, 57, 8, 83, 71, 8, 96, 72, 18, 85, 47, 4, 69, 90, 6, 64, 85, 25, 90, 66, 22, 78, 9, 56, 91, 93, 91, 86, 35, 27, 54, 11, 82, 99, 25, 60, 76, 6, 80, 99, 77, 14, 81, 36, 93, 94, 28, 50, 90, 80, 90, 40, 46, 71, 10, 27, 89, 47, 80, 81, 2, 23, 46, 74, 69, 5, 54, 43, 62, 25, 26, 23, 8, 4, 3, 62, 74, 78, 60, 39, 80, 88, 53, 10, 58, 57, 5, 30, 28, 44, 23, 48, 80, 34, 8, 27, 58, 23, 78, 35, 6, 28, 8, 97, 70, 23, 9, 73, 59, 5, 83, 58, 39, 14, 58, 53, 76, 57, 48, 30, 59, 100, 2, 34, 65, 66, 57, 47, 11, 91, 57, 5, 58, 57, 21, 9, 76, 42, 19, 37, 50, 58, 27, 24, 27, 24, 68, 2, 9, 62, 32, 37, 50, 63, 36, 40, 90, 32, 32, 8, 39, 83, 69, 20, 11, 12, 25, 26, 6, 39, 77, 18, 38, 73, 87, 57, 10, 7, 55, 59, 64, 19, 22, 71, 93, 30, 72, 56, 1, 61, 51, 35, 75, 55, 33, 41, 5, 3, 77, 62, 20, 83, 96, 23, 21, 57, 95, 39, 52, 31, 46, 47, 38, 100, 3, 44, 73, 20, 74, 29, 78, 97, 85, 36, 47, 15, 92, 13, 98, 84, 52, 48, 94, 67, 67, 8, 79, 47, 96, 17, 26, 5, 66, 26, 66, 73, 45, 88, 74, 96, 82, 96, 70, 91, 81, 66, 90, 41, 29, 38, 7, 60, 59, 22, 54, 62, 95, 12, 71, 38, 24, 58, 52, 26, 87, 26, 11, 65, 59, 45, 18, 10, 88, 2, 15, 85, 99, 90, 18, 64, 17, 49, 49, 86, 51, 33, 41, 10, 67, 99, 56, 11, 16, 57, 26, 1, 65, 25, 59, 61, 93, 67, 87, 54, 41, 68, 70, 77, 16, 6, 33, 42, 51, 1, 30, 6, 34, 99, 33, 80, 70, 18, 38, 6, 55, 62, 70, 77, 88, 29, 45, 26, 17, 48, 42, 68, 47, 28, 20, 34, 13, 27, 45, 63, 32, 27, 58, 71, 17, 36, 66, 5, 55, 8, 91, 13, 14, 77, 67, 89, 92, 51, 42, 16, 84, 58, 78, 27, 50, 18, 73, 70, 37, 11, 36, 76, 26, 11, 6, 62, 84, 62, 74, 13, 41, 3, 60, 74, 15, 28, 42, 46, 42, 45, 27, 62, 35, 81, 89, 19, 98, 33, 61, 3, 10, 76, 89, 63, 28, 67, 46, 57, 38, 66, 75, 52, 19, 65, 42, 89, 45, 29, 83, 95, 99, 45, 48, 70, 18, 35, 3, 78, 50, 27, 8, 32, 4, 42, 86, 45, 61, 78, 2, 23, 56, 51, 94, 83, 75, 49, 90, 89, 76, 85, 68, 25, 79, 86, 73, 2, 47, 35, 56, 37, 80, 1, 3, 36, 17, 17, 79, 95, 4, 12, 69, 69, 82, 94, 78, 63, 92, 98, 83, 99, 3, 78, 52, 58, 49, 71, 54, 2, 80, 37, 32, 99, 47, 91, 62, 31, 79, 30, 36, 67, 61, 49, 87, 87, 12, 71, 59, 95, 92, 37, 45, 97, 58, 91, 88, 70, 95, 22, 32, 46, 56, 70, 4, 27, 99, 89, 42, 57, 33, 9, 65, 70, 98, 6, 59, 79, 24, 88, 60, 45, 1, 17, 23, 27, 99, 72, 38, 16, 46, 63, 18, 38, 17, 59, 17, 62, 93, 77, 70, 46, 24, 97, 21, 47, 66, 57, 74, 93, 79, 35, 1, 56, 26, 34, 36, 43, 95, 13, 33, 40, 57, 100, 98, 21, 64, 64, 39, 31, 5, 66, 27, 91, 85, 15, 78, 29, 35, 76, 81, 93, 91, 30, 3, 15, 18, 15, 74, 17, 100, 17, 11, 65, 95, 87, 39, 87, 30, 21, 7, 49, 37, 15, 97, 65, 39, 31, 40, 84, 56, 4, 84, 3, 46, 84, 44, 14, 73, 15, 40, 87, 99, 44, 19, 51, 4, 22, 73, 21, 97, 14, 81, 11, 88, 36, 77, 55, 19, 45, 69, 8, 28, 67, 27, 5, 51, 3, 22, 25, 18, 5, 41, 21, 66, 44, 79, 89, 85, 96, 86, 39, 65, 72, 83, 43, 45, 9, 38, 20, 66, 33, 51, 99, 65, 29, 72, 69, 69, 74, 6, 98, 30, 39, 53, 7, 4, 64, 82, 93, 74, 19, 68, 39, 69, 1, 11, 36, 24, 94, 94, 80, 64, 64, 62, 73, 68, 6, 22, 76, 3, 1, 28, 13, 78, 18, 62, 7, 83, 57, 6, 53, 26, 93, 28, 65, 24, 81, 27, 66, 90, 68, 83, 71, 19, 44, 93, 30, 16, 97, 100, 76, 9, 39, 80, 31, 1, 33, 93, 74, 87, 87, 42, 75, 46, 61, 20, 75, 54, 89, 93, 49, 34, 66, 6, 58, 63, 76, 98, 61, 20, 61, 65, 73, 14, 25, 44, 29, 34, 12, 34, 6, 12, 50, 66, 23, 37, 74, 54, 32, 49, 7, 41, 36, 46, 45, 8, 38, 51, 18, 45, 40, 51, 90, 44, 69, 62, 27, 94, 88, 87, 70, 70, 64, 7, 83, 5, 72, 100, 92, 47, 14, 36, 16, 32, 87, 51, 27, 17, 63, 47, 61, 42, 51, 3, 27, 43, 71, 2, 34, 21, 14, 3, 1, 73, 73, 16, 15, 75, 79, 22, 90, 50, 78, 95, 16, 47, 99, 20, 2, 49, 98, 34, 62, 45, 88, 35, 41, 27, 2, 8, 84, 84, 84, 23, 65, 6, 85, 75, 55, 85, 57, 60, 64, 71, 1, 67, 50, 82, 58, 90, 67, 3, 21, 68, 64, 59, 46, 91, 73, 94, 17, 76, 18, 44, 100, 57, 53, 75, 12, 26, 9, 77, 28, 67, 82, 88, 96, 13, 4, 29, 37, 7, 37, 37, 71, 88, 19, 31, 40, 62, 99, 82, 53, 59, 43, 59, 68, 60, 51, 36, 57, 46, 63, 48, 18, 74, 3, 85, 9, 14, 71, 83, 81, 5, 56, 88, 38, 97, 6, 10, 59, 46, 69, 80, 73, 30, 44, 84, 17, 87, 59, 35, 69, 55, 49, 78, 10, 97, 23, 55, 2, 88, 19, 76, 66, 93, 91, 85, 48, 52, 45, 44, 73, 63, 74, 12, 28, 76, 42, 77, 4, 92, 89, 73, 87, 33, 56, 61, 58, 19, 8, 77, 77, 26, 68, 78, 5, 17, 68, 5, 42, 45, 4, 50, 27, 93, 71, 6, 24, 80, 86, 17, 83, 9, 1, 57, 46, 88, 81, 4, 78, 99, 2, 16, 11, 11, 68, 36, 84, 77, 64, 68, 6, 45, 14, 72, 41, 24, 4, 60, 39, 73, 26, 32, 60, 47, 61, 100, 54, 59, 33, 70, 67, 69, 20, 65, 58, 53, 54, 63, 35, 24, 50, 43, 69, 46, 95, 5, 15, 40, 96, 51, 42, 45, 28, 88, 19, 79, 15, 26, 47, 73, 90, 21, 8, 61, 96, 57, 13, 93, 3, 57, 65, 27, 68, 70, 69, 6, 15, 63, 84, 12, 5, 39, 57, 68, 13, 51, 25, 7, 97, 90, 66, 1, 39, 63, 4, 70, 51, 8, 5, 14, 21, 51, 93, 9, 49, 31, 79, 70, 61, 17, 66, 23, 55, 36, 54, 96, 99, 81, 100, 52, 68, 57, 40, 66, 67, 4, 52, 89, 48, 88, 41, 58, 65, 81, 60, 34, 8, 58, 46, 1, 75, 17, 57, 2, 58, 62, 29, 60, 79, 29, 43, 68, 40, 23, 88, 60, 6, 16, 58, 28, 69, 85, 46, 1, 38, 50, 42, 86, 38, 70, 68, 13, 4, 92, 55, 85, 35, 76, 12, 99, 78, 100, 66, 69, 75, 51, 45, 92, 68, 54, 68, 35, 17, 6, 52, 41, 61, 85, 26, 25, 100, 86, 94, 13, 19, 23, 42, 66, 13, 12, 69, 97, 64, 73, 56, 64, 64, 29, 99, 78, 15, 29, 59, 61, 76, 57, 41, 28, 20, 57, 14, 58, 62, 92, 59, 75, 20, 18, 4, 38, 33, 93, 96, 16, 57, 92, 55, 79, 43, 83, 13, 11, 70, 30, 75, 35, 74, 92, 40, 74, 89, 35, 88, 38, 70, 37, 59, 61, 9, 6, 61, 45, 76, 92, 72, 1, 1, 71, 28, 70, 40, 42, 9, 48, 50, 87, 75, 33, 83, 33, 77, 26, 76, 79, 92, 55, 74, 77, 44, 55, 35, 55, 88, 99, 38, 86, 98, 61, 11, 39, 50, 93, 7, 1, 79, 47, 37, 70, 23, 32, 98, 36, 82, 66, 34, 17, 87, 100, 86, 5, 24, 11, 2, 87, 51, 23, 29, 6, 55, 21, 18, 66, 31, 29, 13, 25, 36, 83, 34, 78, 91, 29, 22, 93, 56, 4, 38, 81, 50, 71, 53, 21, 92, 12, 60, 60, 80, 62, 14, 27, 28, 6, 30, 30, 78, 70, 54, 97, 39, 35, 65, 49, 22, 62, 86, 46, 3, 27, 71, 44, 14, 93, 98, 6, 66, 80, 34, 59, 75, 29, 27, 85, 83, 74, 38, 16, 37, 58, 25, 53, 47, 76, 18, 4, 79, 29, 36, 60, 79, 60, 49, 1, 64, 90, 73, 72, 90, 34, 32, 62, 57, 60, 65, 86, 97, 59, 20, 17, 73, 52, 19, 80, 65, 12, 92, 84, 78, 86, 87, 87, 78, 31, 85, 8, 38, 95, 80, 33, 11, 86, 57, 86, 10, 53, 21, 8, 39, 77, 61, 69, 83, 26, 100, 39, 89, 3, 51, 65, 4, 84, 74, 53, 18, 16, 49, 23, 76, 83, 98, 28, 57, 38, 62, 62, 39, 59, 39, 86, 20, 40, 65, 80, 85, 12, 87, 84, 31, 11, 19, 7, 25, 84, 3, 84, 72, 18, 39, 10, 33, 2, 13, 98, 100, 91, 96, 95, 24, 39, 22, 40, 85, 33, 84, 50, 54, 57, 53, 88, 52, 84, 47, 43, 28, 11, 12, 4, 7, 32, 67, 15, 58, 47, 100, 27, 3, 20, 80, 5, 48, 10, 49, 88, 35, 17, 43, 51, 39, 44, 48, 43, 67, 42, 71, 71, 34, 9, 95, 58, 69, 81, 5, 87, 35, 35, 63, 67, 35, 22, 15, 58, 3, 51, 2, 12, 53, 69, 34, 77, 2, 74, 35, 22, 57, 3, 33, 4, 77, 16, 27, 88, 45, 66, 94, 64, 27, 26, 27, 59, 4, 69, 48, 43, 9, 1, 50, 63, 5, 79, 43, 42, 32, 80, 45, 72, 8, 85, 19, 26, 37, 9, 17, 30, 22, 64, 33, 17, 82, 80, 100, 54, 60, 91, 72, 23, 86, 31, 99, 39, 2, 84, 48, 57, 69, 62, 37, 1, 27, 47, 69, 49, 68, 5, 70, 39, 32, 12, 96, 37, 7, 75, 40, 44, 47, 32, 91, 50, 88, 97, 25, 14, 28, 99, 98, 18, 56, 26, 3, 13, 19, 88, 70, 25, 37, 51, 93, 70, 96, 73, 84, 77, 79, 18, 43, 7, 23, 38, 12, 3, 65, 34, 83, 17, 55, 60, 73, 96, 55, 88, 12, 49, 44, 45, 85, 57, 95, 100, 53, 77, 38, 47, 99, 57, 10, 95, 80, 76, 86, 79, 64, 13, 88, 65, 35, 44, 64, 81, 100, 53, 79, 22, 29, 87, 20, 38, 92, 69, 45, 75, 87, 28, 58, 48, 78, 64, 1, 94, 7, 37, 97, 70, 90, 67, 74, 83, 41, 37, 88, 68, 27, 85, 37, 83, 73, 84, 60, 24, 52, 5, 29, 24, 53, 68, 2, 98, 69, 95, 58, 22, 50, 23, 19, 74, 32, 55, 46, 21, 85, 64, 14, 28, 40, 76, 2, 88, 63, 32, 23, 6, 44, 37, 47, 77, 38, 65, 13, 25, 45, 100, 51, 14, 86, 26, 79, 16, 72, 30, 32, 37, 76, 51, 69, 92, 32, 76, 49, 66, 66, 47, 81, 25, 96, 73, 75, 79, 9, 59, 3, 64, 90, 5, 37, 40, 50, 87, 62, 88, 47, 87, 43, 82, 90, 77, 13, 84, 7, 94, 1, 51, 40, 61, 47, 53, 85, 1, 15, 72, 77, 67, 50, 87, 59, 54, 74, 61, 15, 67, 23, 53, 75, 44, 34, 22, 86, 19, 82, 96, 57, 61, 65, 94, 7, 70, 16, 1, 98, 36, 51, 96, 78, 67, 33, 33, 99, 17, 43, 74, 16, 83, 72, 79, 86, 65, 76, 58, 38, 44, 21, 48, 86, 89, 45, 16, 3, 26, 55, 22, 93, 71, 26, 14, 20, 75, 30, 34, 7, 89, 90, 45, 66, 82, 63, 97, 24, 87, 72, 64, 23, 32, 79, 68, 92, 20, 56, 87, 4, 12, 21, 5, 35, 2, 72, 59, 99, 44, 28, 28, 61, 39, 57, 72, 8, 25, 9, 43, 58, 72, 21, 41, 52, 9, 93, 56, 66, 29, 19, 43, 36, 58, 13, 51, 85, 28, 25, 28, 53, 21, 9, 93, 75, 77, 7, 66, 29, 23, 53, 72, 81, 61, 19, 88, 5, 68, 61, 5, 97, 14, 17, 72, 84, 32, 61, 49, 89, 14, 30, 100, 44, 57, 41, 48, 2, 44, 6, 29, 69, 34, 63, 63, 15, 6, 68, 18, 72, 39, 43, 27, 39, 7, 42, 8, 78, 82, 20, 2, 64, 77, 40, 42, 88, 22, 9, 27, 36, 4, 66, 10, 66, 5, 7, 70, 76, 37, 12, 95, 97, 84, 38, 68, 94, 19, 92, 81, 15, 69, 55, 79, 42, 16, 13, 46, 34, 81, 3, 66, 8, 36, 47, 60, 56, 31, 91, 2, 33, 68, 69, 52, 12, 70, 46, 96, 92, 72, 35, 79, 20, 49, 25, 31, 62, 90, 55, 13, 29, 7, 86, 15, 92, 16, 86, 88, 95, 1, 17, 81, 76, 31, 8, 68, 99, 89, 66, 51, 17, 46, 89, 7, 82, 17, 4, 48, 3, 22, 10, 68, 7, 37, 51, 77, 33, 66, 81, 5, 22, 45, 25, 86, 98, 68, 87, 3, 86, 92, 47, 68, 35, 8, 51, 4, 58, 71, 73, 58, 37, 62, 7, 3, 90, 35, 42, 42, 34, 39, 34, 24, 28, 38, 13, 8, 50, 2, 35, 60, 83, 29, 64, 16, 48, 9, 82, 44, 68, 92, 46, 67, 30, 60, 1, 22, 15, 63, 8, 20, 81, 96, 29, 66, 75, 63, 65, 29, 85, 71, 28, 56, 24, 15, 88, 17, 30, 92, 2, 56, 74, 22, 88, 61, 65, 25, 33, 67, 98, 57, 85, 87, 86, 11, 23, 36, 18, 25, 6, 58, 75, 63, 43, 60, 77, 7, 58, 20, 83, 50, 50, 90, 88, 77, 79, 12, 89, 43, 78, 35, 78, 38, 30, 68, 1, 80, 73, 78, 42, 71, 10, 27, 60, 77, 8, 93, 12, 79, 19, 32, 7, 32, 64, 65, 80, 30, 96, 95, 10, 65, 76, 31, 58, 41, 42, 5, 11, 80, 98, 60, 84, 4, 62, 33, 69, 59, 62, 27, 80, 12, 71, 6, 6, 6, 70, 69, 49, 15, 25, 52, 60, 83, 85, 11, 15, 98, 83, 57, 4, 60, 86, 97, 41, 29, 37, 87, 31, 74, 58, 22, 16, 34, 75, 82, 11, 90, 11, 43, 76, 9, 35, 30, 67, 96, 100, 10, 41, 18, 53, 72, 99, 41, 18, 89, 68, 55, 48, 76, 38, 33, 88, 8, 38, 21, 4, 91, 66, 50, 70, 32, 2, 55, 35, 95, 91, 63, 24, 37, 84, 74, 18, 16, 46, 18, 30, 90, 28, 24, 96, 61, 91, 66, 26, 71, 80, 79, 65, 26, 8, 59, 100, 51, 51, 79, 16, 54, 64, 37, 18, 67, 28, 89, 14, 1, 75, 94, 11, 48, 46, 79, 7, 30, 50, 44, 67, 52, 39, 67, 69, 40, 23, 37, 71, 63, 93, 71, 24, 64, 23, 7, 17, 75, 25, 55, 90, 75, 18, 30, 98, 64, 94, 41, 18, 26, 89, 68, 78, 6, 71, 69, 20, 85, 79, 54, 29, 52, 8, 73, 50, 86, 65, 50, 5, 77, 63, 80, 10, 44, 58, 88, 76, 69, 72, 82, 45, 85, 99, 63, 100, 13, 76, 59, 93, 81, 25, 6, 50, 33, 34, 16, 29, 47, 33, 64, 68, 65, 51, 41, 50, 43, 34, 46, 15, 35, 65, 20, 11, 15, 29, 72, 33, 98, 44, 54, 57, 38, 40, 54, 8, 72, 61, 41, 19, 24, 10, 1, 61, 60, 68, 11, 22, 87, 38, 99, 54, 51, 68, 93, 70, 71, 38, 9, 57, 50, 16, 17, 49, 62, 97, 77, 49, 53, 22, 91, 49, 26, 60, 63, 7, 11, 36, 91, 26, 99, 48, 79, 22, 62, 6, 4, 6, 42, 77, 96, 82, 70, 82, 92, 3, 10, 13, 52, 69, 68, 5, 47, 25, 65, 11, 66, 31, 75, 75, 33, 11, 80, 25, 26, 55, 84, 88, 13, 62, 22, 45, 74, 22, 61, 66, 90, 91, 99, 12, 79, 97, 1, 98, 21, 65, 34, 89, 47, 32, 100, 29, 9, 55, 10, 91, 10, 76, 53, 43, 35, 76, 51, 67, 76, 31, 53, 37, 3, 72, 5, 55, 54, 5, 90, 86, 67, 80, 38, 65, 44, 41, 97, 27, 99, 75, 27, 34, 17, 44, 75, 2, 14, 67, 58, 93, 28, 28, 43, 35, 15, 42, 26, 55, 28, 42, 20, 85, 36, 46, 5, 92, 13, 10, 87, 96, 27, 28, 12, 21, 16, 81, 46, 46, 24, 26, 100, 26, 65, 48, 65, 85, 96, 67, 90, 7, 44, 4, 23, 75, 89, 27, 71, 26, 86, 43, 52, 56, 32, 48, 31, 55, 60, 22, 1, 21, 2, 95, 46, 54, 91, 26, 59, 16, 67, 62, 26, 37, 71, 43, 62, 17, 70, 1, 36, 47, 76, 38, 7, 100, 83, 32, 69, 44, 22, 77, 31, 14, 48, 3, 31, 84, 50, 67, 80, 85, 52, 14, 25, 60, 4, 23, 4, 76, 44, 7, 71, 54, 83, 30, 89, 95, 54, 83, 37, 68, 64, 76, 6, 95, 33, 85, 1, 58, 69, 90, 75, 29, 16, 46, 49, 10, 16, 23, 74, 27, 97, 36, 25, 28, 45, 42, 23, 95, 79, 56, 3, 30, 75, 21, 88, 88, 52, 47, 60, 88, 11, 67, 74, 55, 80, 72, 8, 42, 35, 44, 5, 42, 41, 30, 31, 80, 71, 82, 80, 32, 83, 34, 66, 61, 51, 51, 88, 6, 96, 55, 8, 72, 17, 52, 98, 60, 38, 60, 62, 70, 57, 91, 26, 66, 19, 88, 51, 75, 90, 17, 46, 83, 80, 27, 72, 9, 77, 80, 84, 3, 90, 31, 72, 20, 79, 50, 6, 6, 45, 16, 91, 79, 54, 97, 89, 73, 83, 39, 38, 36, 58, 27, 26, 69, 26, 11, 77, 77, 49, 5, 65, 36, 2, 52, 1, 94, 69, 32, 50, 93, 81, 15, 75, 11, 61, 27, 17, 57, 45, 70, 94, 89, 12, 23, 46, 45, 7, 94, 85, 51, 1, 34, 62, 61, 50, 6, 7, 74, 99, 47, 55, 25, 9, 96, 28, 37, 27, 3, 23, 62, 34, 74, 58, 94, 25, 59, 28, 25, 88, 25, 34, 30, 8, 91, 54, 59, 69, 58, 32, 54, 75, 13, 25, 57, 89, 10, 86, 90, 41, 8, 49, 8, 62, 89, 4, 58, 69, 77, 98, 17, 17, 93, 79, 92, 42, 6, 94, 77, 59, 91, 63, 26, 67, 31, 4, 26, 89, 90, 25, 78, 24, 73, 83, 12, 5, 80, 25, 26, 8, 73, 1, 98, 100, 69, 36, 86, 18, 65, 65, 54, 42, 7, 63, 60, 58, 45, 65, 32, 35, 43, 45, 39, 87, 57, 87, 42, 93, 10, 14, 27, 38, 95, 49, 68, 21, 22, 5, 59, 51, 100, 4, 45, 31, 14, 32, 24, 89, 33, 73, 14, 37, 14, 99, 45, 68, 17, 37, 56, 31, 74, 94, 85, 10, 24, 24, 83, 16, 32, 47, 46, 10, 20, 31, 60, 18, 21, 42, 61, 54, 95, 95, 37, 75, 9, 39, 53, 36, 39, 27, 45, 9, 51, 7, 40, 75, 2, 94, 33, 44, 10, 20, 81, 58, 39, 39, 54, 53, 68, 41, 6, 95, 78, 36, 47, 26, 39, 98, 57, 22, 96, 93, 26, 52, 16, 61, 22, 85, 2, 65, 8, 7, 98, 3, 94, 95, 97, 20, 57, 79, 70, 39, 75, 27, 14, 86, 97, 66, 15, 13, 59, 38, 17, 73, 78, 97, 3, 36, 89, 5, 88, 10, 4, 15, 33, 57, 4, 46, 61, 57, 42, 70, 48, 53, 94, 89, 87, 61, 74, 46, 57, 80, 97, 25, 5, 31, 28, 96, 1, 35, 8, 16, 89, 89, 23, 47, 8, 38, 71, 12, 26, 84, 19, 67, 69, 17, 31, 54, 27, 81, 98, 89, 61, 75, 4, 81, 22, 48, 87, 7, 35, 66, 7, 58, 54, 15, 76, 99, 76, 2, 20, 80, 3, 47, 77, 11, 18, 65, 40, 77, 81, 49, 14, 33, 63, 97, 51, 14, 81, 94, 25, 86, 89, 93, 36, 56, 46, 20, 19, 87, 6, 84, 26, 48, 95, 38, 28, 48, 1, 25, 62, 72, 17, 35, 8, 9, 92, 25, 58, 61, 29, 3, 16, 38, 99, 85, 78, 98, 60, 27, 44, 67, 32, 28, 47, 20, 4, 44, 35, 64, 35, 93, 50, 12, 71, 8, 78, 71, 77, 89, 64, 25, 74, 23, 67, 50, 77, 49, 63, 59, 38, 49, 9, 80, 11, 94, 74, 61, 31, 56, 79, 75, 31, 14, 33, 90, 11, 86, 90, 1, 75, 80, 58, 12, 74, 22, 88, 8, 6, 27, 5, 18, 10, 24, 23, 46, 68, 68, 88, 56, 71, 68, 28, 96, 86, 76, 40, 51, 47, 51, 3, 20, 82, 5, 1, 8, 14, 52, 46, 78, 52, 92, 13, 43, 50, 58, 82, 23, 56, 40, 30, 90, 43, 14, 9, 91, 57, 3, 38, 87, 53, 52, 31, 5, 95, 17, 20, 82, 19, 60, 53, 69, 15, 13, 67, 64, 61, 51, 31, 38, 50, 3, 82, 15, 74, 22, 93, 81, 50, 4, 15, 40, 88, 8, 22, 5, 35, 55, 49, 34, 76, 78, 8, 75, 21, 99, 29, 81, 87, 44, 45, 96, 19, 67, 53, 20, 24, 29, 53, 19, 55, 61, 3, 73, 49, 95, 31, 89, 41, 16, 75, 88, 7, 23, 96, 85, 76, 51, 42, 63, 98, 36, 26, 67, 34, 57, 65, 50, 6, 60, 43, 89, 9, 42, 68, 63, 50, 85, 28, 64, 20, 44, 81, 63, 3, 37, 98, 91, 8, 85, 9, 16, 52, 41, 85, 2, 84, 83, 82, 48, 47, 53, 64, 30, 20, 31, 28, 59, 79, 82, 27, 56, 59, 54, 2, 67, 63, 77, 14, 42, 93, 38, 17, 86, 73, 42, 38, 68, 82, 2, 32, 32, 57, 7, 42, 16, 14, 97, 2, 45, 94, 9, 41, 4, 84, 99, 71, 23, 19, 56, 12, 98, 60, 14, 77, 63, 37, 95, 81, 70, 33, 97, 45, 7, 42, 93, 97, 37, 62, 38, 22, 20, 54, 73, 71, 79, 84, 41, 54, 41, 47, 81, 18, 7, 74, 4, 11, 2, 3, 89, 56, 2, 62, 11, 95, 2, 25, 12, 67, 7, 80, 96, 60, 28, 51, 73, 88, 9, 35, 62, 11, 44, 83, 89, 65, 11, 27, 43, 41, 5, 7, 91, 2, 93, 38, 76, 72, 9, 60, 43, 37, 36, 35, 3, 84, 83, 100, 16, 88, 12, 92, 82, 98, 11, 28, 83, 8, 99, 31, 79, 21, 72, 83, 12, 21, 88, 40, 13, 85, 66, 17, 6, 7, 24, 16, 41, 21, 96, 8, 84, 79, 53, 98, 4, 75, 39, 64, 6, 90, 90, 47, 44, 35, 5, 66, 67, 53, 95, 53, 70, 18, 97, 88, 96, 99, 12, 91, 80, 59, 56, 60, 66, 26, 57, 71, 45, 27, 58, 48, 34, 90, 67, 71, 31, 30, 87, 64, 88, 13, 26, 43, 15, 86, 39, 100, 97, 59, 20, 92, 19, 32, 90, 100, 29, 35, 46, 44, 75, 28, 96, 58, 14, 22, 85, 1, 5, 51, 34, 51, 9, 28, 75, 3, 85, 92, 100, 11, 71, 90, 60, 51, 62, 41, 32, 95, 86, 33, 86, 37, 74, 27, 20, 85, 81, 17, 45, 43, 99, 87, 39, 93, 63, 86, 35, 32, 71, 34, 5, 33, 3, 92, 52, 88, 85, 47, 8, 69, 56, 46, 88, 24, 44, 42, 2, 83, 27, 79, 7, 18, 84, 40, 58, 54, 35, 73, 8, 11, 77, 24, 77, 33, 5, 94, 29, 28, 4, 32, 36, 13, 71, 85, 62, 33, 71, 85, 37, 52, 46, 80, 22, 38, 63, 75, 42, 18, 5, 42, 80, 83, 48, 33, 78, 51, 46, 59, 54, 6, 40, 70, 90, 63, 16, 17, 26, 52, 61, 69, 9, 58, 14, 26, 40, 36, 43, 53, 84, 86, 34, 21, 68, 58, 41, 14, 2, 16, 60, 88, 66, 31, 37, 67, 67, 12, 7, 41, 41, 73, 100, 11, 42, 45, 26, 85, 17, 75, 88, 51, 86, 54, 92, 11, 10, 99, 84, 88, 43, 89, 30, 68, 39, 97, 96, 76, 1, 62, 41, 30, 34, 1, 87, 56, 89, 65, 96, 11, 19, 77, 59, 84, 100, 100, 61, 30, 33, 47, 78, 76, 95, 46, 97, 4, 34, 25, 87, 54, 51, 9, 62, 85, 25, 12, 90, 93, 29, 59, 34, 27, 38, 89, 22, 21, 63, 81, 43, 78, 7, 12, 81, 19, 56, 51, 100, 41, 50, 59, 100, 72, 31, 56, 55, 73, 41, 82, 72, 25, 100, 61, 67, 94, 90, 10, 16, 12, 100, 43, 38, 44, 59, 20, 93, 31, 4, 37, 44, 76, 32, 68, 81, 26, 10, 88, 27, 48, 90, 65, 64, 100, 26, 62, 31, 77, 60, 67, 91, 39, 36, 84, 80, 63, 85, 60, 2, 1, 33, 8, 72, 28, 70, 60, 63, 70, 69, 44, 19, 17, 38, 53, 32, 30, 34, 13, 98, 71, 19, 33, 87, 14, 82, 96, 92, 52, 61, 80, 1, 74, 29, 28, 23, 93, 11, 3, 37, 28, 59, 7, 53, 61, 17, 46, 57, 59, 44, 72, 100, 24, 36, 18, 76, 55, 37, 47, 6, 82, 2, 20, 43, 91, 78, 2, 9, 8, 82, 87, 51, 6, 79, 63, 12, 43, 54, 34, 74, 14, 25, 5, 23, 87, 4, 96, 35, 16, 76, 17, 74, 49, 65, 33, 44, 31, 21, 77, 62, 34, 48, 43, 71, 85, 64, 41, 31, 25, 87, 85, 28, 60, 94, 79, 93, 72, 5, 40, 3, 34, 91, 53, 44, 64, 19, 72, 2, 33, 79, 60, 41, 83, 33, 60, 79, 89, 98, 28, 57, 46, 61, 92, 87, 65, 68, 99, 47, 79, 27, 80, 99, 44, 21, 94, 54, 89, 57, 88, 9, 28, 91, 76, 56, 30, 97, 17, 61, 25, 29, 50, 62, 86, 57, 97, 73, 66, 100, 56, 22, 70, 10, 75, 31, 62, 24, 76, 94, 28, 18, 95, 98, 3, 93, 46, 15, 21, 59, 78, 9, 16, 60, 61, 28, 40, 94, 88, 95, 44, 6, 73, 38, 70, 78, 76, 49, 21, 72, 61, 91, 9, 51, 19, 68, 1, 10, 58, 52, 74, 100, 38, 42, 92, 35, 54, 28, 35, 27, 95, 45, 9, 32, 6, 60, 73, 18, 61, 43, 18, 84, 37, 51, 33, 92, 73, 86, 95, 32, 33, 26, 38, 41, 87, 74, 26, 76, 16, 71, 77, 61, 17, 95, 28, 17, 54, 37, 65, 91, 77, 86, 63, 96, 21, 18, 64, 76, 51, 83, 23, 22, 1, 16, 28, 45, 89, 13, 38, 25, 1, 73, 22, 8, 18, 68, 59, 13, 65, 23, 48, 62, 35, 54, 65, 68, 27, 3, 78, 54, 77, 6, 51, 31, 84, 17, 45, 87, 45, 100, 65, 65, 87, 40, 25, 77, 30, 74, 36, 31, 14, 88, 43, 80, 3, 9, 46, 23, 20, 47, 33, 79, 28, 2, 20, 8, 58, 22, 62, 96, 46, 61, 67, 83, 13, 31, 18, 11, 94, 10, 89, 6, 76, 42, 61, 2, 35, 15, 16, 57, 6, 45, 68, 73, 18, 49, 14, 1, 31, 70, 69, 32, 98, 23, 89, 14, 73, 60, 44, 76, 8, 61, 83, 71, 45, 81, 94, 73, 32, 99, 56, 20, 9, 81, 88, 83, 65, 7, 45, 94, 26, 23, 67, 92, 42, 92, 1, 43, 88, 81, 58, 35, 27, 6, 69, 89, 62, 73, 61, 42, 56, 19, 51, 44, 42, 35, 7, 82, 38, 97, 97, 27, 44, 56, 19, 55, 92, 20, 81, 37, 87, 10, 11, 70, 32, 32, 65, 86, 58, 28, 42, 70, 83, 64, 27, 88, 100, 13, 74, 54, 46, 7, 37, 88, 29, 79, 86, 77, 100, 33, 66, 100, 35, 86, 72, 26, 89, 80, 100, 12, 16, 65, 1, 80, 61, 85, 28, 70, 53, 30, 26, 1, 96, 60, 91, 42, 27, 61, 12, 4, 94, 69, 50, 11, 20, 16, 47, 73, 34, 94, 7, 25, 43, 20, 26, 25, 17, 55, 5, 85, 67, 95, 91, 47, 61, 48, 7, 41, 40, 51, 98, 34, 8, 64, 49, 61, 43, 16, 84, 38, 38, 74, 24, 80, 14, 23, 15, 40, 70, 36, 72, 49, 94, 53, 92, 96, 57, 20, 99, 8, 21, 65, 74, 71, 36, 22, 34, 18, 23, 99, 73, 54, 87, 91, 9, 2, 44, 71, 97, 89, 78, 84, 97, 78, 40, 11, 94, 57, 42, 41, 27, 45, 63, 2, 58, 91, 79, 2, 54, 25, 12, 42, 64, 35, 61, 33, 69, 31, 18, 33, 66, 13, 10, 99, 94, 33, 52, 11, 81, 58, 56, 41, 94, 32, 43, 75, 19, 76, 88, 53, 30, 25, 1, 63, 52, 65, 66, 10, 31, 68, 34, 95, 44, 67, 33, 79, 10, 50, 33, 45, 3, 66, 71, 94, 19, 100, 54, 13, 43, 65, 78, 87, 22, 12, 30, 40, 76, 94, 39, 97, 14, 70, 49, 93, 40, 5, 91, 99, 20, 69, 62, 12, 61, 64, 66, 88, 19, 94, 21, 46, 43, 80, 100, 27, 20, 28, 41, 60, 37, 5, 95, 8, 26, 76, 60, 65, 39, 16, 8, 41, 49, 61, 48, 82, 75, 60, 78, 38, 72, 42, 67, 18, 29, 74, 83, 36, 11, 77, 6, 20, 86, 61, 52, 9, 37, 89, 50, 5, 53, 75, 9, 22, 71, 22, 13, 26, 99, 47, 29, 33, 40, 90, 98, 67, 38, 52, 86, 64, 61, 81, 47, 15, 53, 100, 61, 54, 49, 93, 75, 26, 40, 94, 98, 51, 15, 54, 31, 17, 5, 80, 55, 66, 96, 10, 73, 57, 18, 64, 26, 36, 30, 98, 71, 91, 97, 3, 70, 2, 29, 12, 84, 29, 65, 6, 94, 47, 50, 74, 19, 73, 17, 32, 94, 81, 27, 15, 84, 27, 7, 38, 59, 93, 63, 6, 43, 6, 96, 68, 70, 57, 94, 50, 15, 92, 68, 85, 30, 10, 36, 20, 86, 14, 47, 90, 46, 54, 37, 71, 77, 14, 50, 33, 43, 100, 45, 63, 52, 81, 4, 87, 98, 46, 55, 55, 1, 21, 21, 10, 63, 11, 51, 15, 31, 96, 2, 67, 5, 66, 82, 66, 68, 58, 38, 77, 78, 28, 73, 9, 87, 8, 36, 43, 83, 35, 21, 7, 55, 16, 15, 99, 97, 10, 83, 37, 76, 23, 22, 18, 2, 68, 66, 27, 88, 19, 42, 44, 9, 9, 3, 59, 52, 98, 79, 92, 11, 14, 25, 65, 79, 56, 99, 9, 81, 15, 27, 57, 68, 29, 47, 33, 8, 9, 100, 32, 60, 28, 71, 79, 76, 88, 66, 64, 39, 5, 78, 47, 88, 21, 1, 48, 38, 39, 19, 41, 89, 85, 78, 85, 84, 40, 42, 1, 77, 6, 45, 21, 86, 58, 85, 12, 11, 5, 28, 91, 26, 14, 70, 61, 7, 25, 29, 74, 94, 74, 25, 88, 14, 72, 59, 4, 99, 39, 2, 60, 49, 32, 29, 1, 78, 22, 80, 98, 51, 87, 40, 71, 39, 17, 37, 24, 64, 33, 41, 6, 22, 60, 61, 17, 11, 59, 68, 65, 27, 61, 65, 15, 75, 68, 84, 40, 76, 77, 12, 29, 10, 40, 57, 70, 78, 96, 79, 40, 100, 56, 57, 91, 28, 68, 10, 5, 34, 18, 37, 36, 84, 38, 87, 65, 49, 59, 50, 23, 86, 85, 28, 54, 5, 53, 9, 67, 65, 1, 3, 5, 61, 26, 14, 88, 54, 79, 65, 56, 11, 80, 10, 26, 72, 33, 56, 84, 88, 93, 69, 69, 34, 24, 52, 88, 66, 46, 47, 12, 98, 19, 77, 60, 83, 54, 53, 2, 34, 83, 37, 1, 13, 18, 84, 7, 97, 41, 82, 20, 32, 71, 9, 23, 27, 54, 64, 20, 51, 2, 69, 92, 29, 98, 75, 92, 99, 7, 98, 18, 59, 61, 67, 55, 7, 97, 84, 79, 95, 97, 23, 24, 62, 65, 88, 89, 35, 83, 25, 11, 44, 56, 14, 56, 5, 49, 99, 37, 71, 53, 33, 60, 96, 42, 19, 54, 36, 79, 85, 87, 50, 23, 64, 54, 96, 23, 43, 28, 77, 57, 3, 63, 34, 76, 42, 66, 38, 10, 7, 32, 97, 76, 10, 6, 58, 54, 7, 63, 100, 32, 5, 32, 23, 19, 33, 91, 40, 28, 79, 45, 96, 49, 65, 100, 22, 51, 72, 73, 12, 97, 87, 48, 82, 75, 10, 43, 66, 8, 55, 93, 13, 70, 54, 19, 84, 23, 25, 57, 15, 62, 46, 79, 51, 3, 63, 91, 15, 3, 66, 24, 81, 40, 97, 33, 47, 92, 34, 38, 10, 35, 99, 100, 67, 62, 8, 28, 96, 86, 89, 86, 59, 55, 44, 2, 19, 29, 63, 24, 51, 24, 59, 59, 16, 2, 1, 76, 78, 19, 17, 8, 55, 52, 27, 16, 15, 91, 38, 61, 20, 50, 65, 60, 24, 71, 92, 57, 83, 22, 54, 87, 48, 23, 48, 69, 5, 79, 87, 87, 46, 30, 19, 49, 92, 84, 50, 6, 23, 25, 87, 47, 10, 60, 54, 23, 14, 93, 10, 38, 27, 9, 68, 24, 40, 95, 5, 55, 69, 59, 84, 7, 13, 57, 27, 18, 70, 29, 55, 93, 52, 33, 62, 23, 8, 90, 90, 34, 81, 61, 47, 39, 78, 100, 13, 3, 56, 27, 95, 71, 36, 63, 23, 77, 26, 80, 3, 28, 76, 8, 100, 73, 62, 2, 76, 70, 37, 92, 49, 24, 64, 16, 37, 50, 6, 80, 41, 96, 84, 81, 77, 61, 70, 47, 86, 63, 76, 25, 69, 16, 16, 51, 24, 55, 4, 14, 83, 33, 79, 52, 91, 96, 78, 98, 36, 22, 5, 92, 77, 18, 26, 29, 43, 89, 32, 33, 46, 82, 62, 55, 61, 62, 91, 24, 22, 18, 8, 26, 77, 25, 75, 33, 41, 99, 12, 8, 37, 58, 12, 28, 52, 2, 91, 92, 22, 73, 40, 66, 97, 15, 79, 97, 29, 10, 71, 60, 36, 73, 26, 94, 48, 21, 43, 78, 29, 1, 91, 22, 70, 63, 62, 57, 25, 21, 51, 78, 24, 73, 26, 83, 26, 67, 51, 78, 87, 29, 57, 68, 38, 94, 92, 82, 50, 8, 36, 50, 38, 100, 1, 87, 55, 14, 77, 84, 58, 21, 65, 69, 29, 70, 42, 30, 31, 95, 87, 73, 19, 43, 48, 43, 2, 8, 43, 66, 11, 54, 54, 13, 12, 79, 56, 65, 69, 48, 51, 73, 73, 98, 12, 98, 2, 49, 26, 65, 9, 90, 86, 12, 65, 35, 65, 96, 95, 48, 73, 7, 86, 69, 68, 34, 16, 89, 24, 52, 12, 25, 36, 19, 73, 20, 96, 62, 57, 67, 72, 70, 97, 27, 73, 5, 35, 35, 59, 61, 46, 20, 16, 48, 68, 42, 66, 29, 64, 21, 80, 93, 43, 85, 54, 90, 28, 67, 95, 69, 55, 76, 44, 14, 80, 98, 27, 18, 100, 71, 9, 76, 78, 22, 71, 26, 83, 97, 87, 60, 69, 72, 33, 23, 37, 33, 5, 74, 49, 76, 67, 7, 67, 80, 29, 43, 79, 99, 14, 75, 23, 58, 39, 59, 12, 12, 38, 49, 70, 6, 33, 81, 41, 79, 86, 15, 94, 9, 62, 13, 38, 22, 68, 55, 77, 15, 61, 88, 51, 94, 96, 7, 97, 84, 91, 29, 33, 23, 23, 64, 21, 26, 75, 9, 53, 16, 1, 51, 31, 66, 55, 88, 60, 42, 59, 87, 60, 82, 1, 24, 94, 14, 65, 76, 30, 58, 67, 90, 56, 38, 43, 96, 90, 37, 30, 32, 67, 28, 7, 39, 76, 59, 95, 82, 86, 3, 33, 56, 10, 83, 53, 65, 17, 16, 16, 8, 75, 79, 17, 86, 34, 23, 97, 15, 17, 76, 22, 58, 86, 17, 36, 70, 44, 16, 20, 47, 63, 69, 57, 89, 3, 93, 38, 64, 28, 99, 100, 67, 18, 12, 71, 88, 98, 89, 53, 87, 34, 95, 86, 13, 62, 4, 20, 57, 10, 25, 23, 20, 57, 6, 73, 39, 47, 22, 26, 45, 49, 51, 85, 31, 82, 21, 62, 59, 61, 85, 38, 96, 84, 21, 65, 23, 20, 80, 18, 59, 4, 69, 92, 78, 2, 33, 80, 10, 20, 88, 23, 55, 69, 48, 84, 78, 56, 86, 95, 47, 66, 83, 53, 36, 44, 79, 19, 3, 11, 1, 69, 20, 48, 24, 64, 67, 44, 88, 24, 26, 55, 95, 42, 97, 3, 70, 56, 96, 6, 95, 75, 71, 95, 77, 64, 81, 58, 84, 50, 37, 17, 43, 32, 63, 25, 7, 26, 15, 78, 26, 8, 82, 69, 85, 99, 33, 57, 39, 59, 76, 23, 81, 23, 58, 84, 18, 88, 75, 60, 85, 18, 78, 3, 97, 17, 38, 66, 77, 9, 36, 81, 4, 100, 58, 3, 3, 9, 34, 26, 9, 7, 3, 98, 52, 63, 16, 55, 17, 36, 50, 81, 21, 1, 78, 68, 2, 45, 6, 62, 73, 74, 80, 75, 20, 26, 31, 90, 4, 79, 100, 40, 76, 18, 1, 65, 19, 45, 71, 80, 89, 21, 37, 8, 12, 60, 85, 69, 17, 67, 53, 11, 98, 46, 24, 81, 95, 37, 48, 60, 33, 5, 83, 67, 13, 81, 29, 24, 87, 31, 49, 98, 43, 20, 24, 100, 75, 54, 94, 70, 66, 25, 81, 32, 44, 5, 86, 21, 58, 87, 65, 70, 35, 49, 40, 98, 44, 49, 47, 44, 19, 47, 62, 37, 54, 9, 96, 54, 28, 50, 70, 79, 60, 49, 100, 96, 17, 3, 54, 14, 17, 11, 40, 43, 81, 42, 24, 86, 92, 91, 39, 21, 82, 44, 6, 81, 13, 41, 44, 93, 46, 15, 36, 91, 93, 40, 17, 26, 76, 64, 47, 94, 12, 25, 66, 50, 14, 93, 96, 95, 52, 62, 27, 13, 85, 74, 68, 11, 27, 41, 17, 8, 5, 61, 23, 100, 86, 72, 14, 3, 93, 4, 24, 46, 6, 83, 15, 75, 96, 10, 16, 45, 42, 14, 92, 36, 93, 88, 55, 85, 85, 50, 11, 68, 6, 30, 93, 1, 8, 81, 3, 92, 11, 31, 75, 43, 40, 9, 61, 42, 57, 93, 44, 12, 77, 89, 25, 6, 14, 65, 44, 42, 11, 25, 85, 43, 25, 4, 11, 14, 18, 46, 16, 1, 37, 55, 91, 28, 5, 5, 70, 65, 86, 54, 77, 67, 29, 15, 94, 34, 51, 18, 35, 10, 54, 35, 52, 56, 56, 31, 30, 58, 4, 42, 13, 27, 81, 97, 52, 11, 75, 84, 91, 83, 28, 66, 29, 39, 32, 80, 8, 29, 46, 60, 81, 6, 61, 27, 70, 33, 37, 11, 84, 34, 78, 90, 3, 73, 28, 9, 21, 22, 43, 93, 31, 68, 34, 68, 18, 3, 96, 11, 91, 58, 18, 1, 99, 76, 72, 57, 57, 47, 82, 81, 5, 95, 96, 11, 87, 75, 45, 2, 76, 90, 44, 5, 75, 2, 60, 61, 32, 40, 45, 88, 11, 2, 56, 51, 74, 50, 33, 51, 52, 90, 21, 100, 10, 87, 12, 47, 78, 43, 69, 17, 42, 1, 50, 67, 89, 51, 70, 73, 1, 85, 76, 53, 2, 27, 25, 12, 18, 76, 41, 63, 15, 55, 74, 25, 27, 100, 22, 43, 53, 34, 46, 93, 18, 34, 89, 92, 67, 93, 38, 39, 30, 88, 74, 17, 72, 83, 78, 79, 55, 50, 44, 63, 52, 99, 61, 28, 42, 41, 51, 42, 49, 45, 19, 28, 72, 58, 3, 44, 12, 100, 52, 70, 17, 69, 99, 5, 29, 33, 30, 37, 26, 50, 27, 61, 93, 35, 31, 90, 9, 14, 88, 4, 76, 26, 3, 93, 9, 97, 6, 23, 19, 74, 73, 29, 24, 57, 26, 96, 19, 18, 43, 9, 69, 77, 28, 62, 80, 3, 46, 9, 6, 79, 97, 18, 54, 57, 39, 72, 34, 15, 85, 78, 99, 86, 81, 5, 32, 97, 48, 37, 21, 69, 93, 55, 92, 64, 89, 2, 63, 84, 11, 39, 81, 29, 93, 92, 80, 33, 55, 88, 93, 76, 57, 83, 94, 36, 60, 99, 96, 8, 19, 38, 92, 94, 34, 90, 72, 4, 9, 92, 46, 72, 28, 52, 39, 8, 18, 89, 64, 65, 84, 100, 66, 10, 89, 57, 26, 59, 92, 27, 24, 54, 22, 58, 78, 69, 59, 47, 87, 75, 66, 12, 5, 72, 89, 76, 59, 57, 81, 9, 73, 76, 66, 75, 81, 90, 52, 19, 53, 93, 15, 18, 7, 51, 97, 11, 15, 74, 92, 58, 99, 17, 13, 92, 90, 90, 35, 67, 48, 76, 67, 94, 48, 5, 26, 94, 35, 84, 87, 8, 22, 33, 29, 83, 92, 11, 3, 19, 9, 91, 48, 96, 41, 14, 83, 64, 97, 19, 60, 100, 91, 63, 50, 71, 55, 61, 65, 38, 75, 70, 84, 51, 43, 76, 7, 84, 91, 58, 92, 19, 66, 52, 34, 68, 12, 16, 68, 71, 94, 50, 19, 60, 38, 14, 66, 82, 44, 72, 7, 80, 12, 38, 87, 60, 88, 73, 80, 31, 33, 5, 71, 100, 27, 34, 17, 73, 87, 70, 68, 29, 1, 14, 72, 89, 95, 85, 78, 32, 63, 97, 71, 87, 77, 22, 93, 82, 9, 44, 21, 10, 98, 14, 43, 7, 50, 97, 20, 84, 99, 87, 71, 12, 24, 59, 62, 46, 98, 19, 6, 44, 79, 78, 11, 66, 52, 5, 5, 36, 67, 15, 50, 16, 52, 20, 47, 14, 4, 17, 62, 89, 99, 64, 53, 29, 98, 19, 25, 1, 84, 74, 16, 34, 76, 1, 36, 36, 38, 27, 55, 90, 68, 68, 34, 79, 79, 19, 31, 78, 96, 85, 57, 90, 85, 39, 6, 8, 51, 73, 71, 20, 5, 57, 37, 40, 22, 72, 17, 51, 60, 88, 46, 63, 17, 37, 76, 88, 77, 40, 11, 63, 61, 81, 7, 22, 61, 21, 20, 11, 22, 75, 42, 39, 83, 62, 2, 92, 87, 78, 9, 7, 92, 14, 16, 42, 58, 91, 46, 21, 96, 2, 13, 6, 90, 22, 25, 14, 57, 51, 44, 26, 27, 81, 40, 79, 28, 59, 20, 15, 6, 7, 87, 7, 10, 43, 33, 5, 5, 17, 36, 64, 4, 79, 65, 2, 5, 60, 37, 77, 63, 31, 54, 7, 70, 26, 63, 85, 85, 17, 40, 17, 29, 94, 58, 94, 54, 36, 80, 10, 2, 49, 86, 36, 61, 82, 84, 71, 1, 22, 70, 49, 61, 59, 85, 16, 95, 9, 54, 31, 42, 21, 65, 57, 24, 37, 87, 30, 44, 75, 59, 43, 11, 98, 76, 31, 91, 14, 12, 11, 58, 87, 12, 78, 50, 99, 75, 26, 51, 47, 6, 68, 56, 46, 83, 64, 80, 22, 12, 88, 74, 21, 97, 46, 80, 54, 68, 81, 56, 66, 86, 54, 32, 19, 77, 35, 92, 10, 74, 95, 2, 84, 69, 75, 5, 13, 58, 43, 37, 86, 63, 23, 24, 65, 34, 14, 6, 81, 67, 65, 5, 22, 62, 3, 25, 12, 38, 31, 36, 94, 35, 96, 57, 80, 86, 7, 9, 65, 66, 41, 28, 49, 79, 85, 52, 19, 11, 96, 89, 83, 85, 80, 67, 79, 6, 27, 32, 91, 43, 20, 48, 86, 16, 11, 80, 3, 51, 29, 91, 20, 57, 97, 48, 86, 49, 41, 21, 33, 87, 53, 5, 6, 83, 87, 68, 67, 67, 77, 69, 39, 21, 88, 84, 76, 68, 69, 41, 43, 72, 69, 9, 70, 12, 62, 91, 63, 74, 43, 47, 18, 35, 70, 54, 20, 93, 12, 48, 24, 78, 16, 33, 29, 30, 98, 9, 18, 60, 51, 29, 33, 38, 3, 95, 53, 40, 26, 79, 30, 37, 61, 45, 93, 85, 16, 96, 39, 80, 10, 40, 59, 32, 17, 23, 61, 4, 75, 41, 92, 65, 4, 66, 32, 22, 25, 76, 57, 45, 71, 36, 50, 98, 13, 64, 28, 64, 63, 66, 61, 94, 73, 35, 56, 21, 11, 61, 89, 1, 21, 49, 1, 58, 37, 7, 44, 17, 39, 1, 73, 43, 85, 39, 18, 4, 35, 53, 78, 69, 23, 94, 78, 41, 18, 72, 89, 3, 3, 19, 12, 5, 55, 23, 71, 100, 49, 81, 5, 65, 88, 44, 90, 85, 81, 54, 85, 28, 83, 30, 4, 77, 77, 38, 23, 67, 66, 65, 78, 27, 70, 99, 24, 62, 68, 9, 6, 50, 35, 49, 56, 83, 17, 50, 80, 62, 67, 84, 40, 26, 62, 98, 23, 9, 28, 86, 78, 13, 54, 61, 40, 49, 90, 14, 32, 19, 55, 49, 4, 51, 61, 1, 54, 5, 72, 13, 20, 29, 52, 1, 33, 19, 38, 43, 88, 82, 3, 41, 16, 22, 13, 71, 36, 89, 68, 95, 87, 52, 80, 51, 96, 80, 33, 87, 38, 37, 20, 87, 82, 53, 98, 6, 80, 63, 7, 77, 98, 97, 51, 55, 84, 23, 55, 56, 79, 14, 67, 14, 89, 25, 24, 72, 73, 4, 43, 49, 51, 92, 52, 95, 92, 74, 75, 100, 68, 52, 5, 82, 73, 33, 8, 79, 5, 94, 39, 45, 10, 97, 30, 20, 58, 60, 28, 17, 97, 36, 79, 57, 13, 75, 87, 99, 48, 50, 66, 17, 54, 67, 48, 71, 100, 91, 51, 84, 48, 42, 11, 60, 34, 24, 59, 19, 55, 62, 94, 84, 24, 75, 81, 34, 32, 21, 56, 44, 43, 9, 36, 20, 33, 84, 47, 68, 36, 48, 40, 72, 74, 79, 86, 6, 25, 13, 92, 94, 47, 61, 42, 100, 18, 15, 92, 19, 98, 86, 98, 94, 98, 15, 65, 30, 27, 85, 5, 27, 18, 96, 21, 51, 3, 13, 48, 60, 73, 56, 43, 86, 28, 87, 61, 3, 48, 34, 100, 72, 36, 33, 7, 64, 93, 24, 47, 43, 55, 50, 15, 100, 29, 78, 37, 35, 10, 2, 39, 63, 80, 65, 47, 63, 17, 41, 3, 31, 37, 35, 42, 34, 57, 28, 55, 62, 47, 91, 71, 53, 4, 69, 48, 58, 96, 90, 58, 61, 28, 33, 45, 57, 87, 13, 80, 57, 25, 26, 67, 46, 38, 15, 82, 95, 63, 83, 83, 76, 78, 11, 51, 18, 7, 18, 22, 65, 4, 25, 60, 63, 10, 11, 57, 89, 55, 86, 66, 71, 41, 100, 59, 5, 5, 48, 59, 42, 89, 41, 65, 51, 38, 99, 85, 7, 11, 52, 31, 20, 13, 4, 17, 52, 37, 66, 35, 26, 67, 65, 97, 7, 30, 14, 64, 46, 44, 91, 17, 88, 44, 17, 23, 60, 58, 68, 51, 80, 65, 76, 95, 66, 2, 77, 79, 26, 89, 3, 86, 58, 83, 81, 5, 58, 50, 40, 93, 48, 6, 59, 55, 83, 59, 32, 52, 27, 13, 95, 83, 94, 88, 90, 42, 12, 99, 97, 25, 80, 15, 90, 34, 63, 75, 1, 84, 58, 59, 85, 20, 91, 94, 88, 52, 34, 23, 95, 84, 6, 66, 98, 19, 85, 36, 10, 55, 40, 76, 57, 58, 7, 96, 48, 59, 45, 19, 28, 91, 27, 54, 81, 16, 75, 17, 7, 56, 75, 50, 53, 69, 96, 24, 89, 80, 90, 10, 66, 58, 22, 95, 48, 48, 1, 36, 6, 63, 3, 14, 34, 37, 59, 39, 35, 41, 92, 47, 100, 8, 45, 11, 25, 67, 54, 56, 26, 33, 77, 50, 23, 98, 41, 88, 26, 5, 92, 25, 19, 94, 1, 9, 17, 56, 77, 94, 93, 56, 40, 86, 84, 77, 61, 75, 42, 69, 5, 77, 100, 84, 4, 46, 67, 61, 59, 85, 73, 1, 19, 64, 76, 83, 88, 1, 93, 75, 87, 78, 71, 74, 71, 54, 2, 29, 62, 2, 96, 21, 25, 47, 7, 31, 59, 94, 88, 22, 45, 26, 25, 5, 60, 48, 37, 72, 27, 84, 34, 42, 99, 93, 19, 4, 82, 22, 88, 1, 27, 43, 96, 77, 78, 1, 74, 63, 94, 85, 84, 15, 43, 5, 90, 71, 5, 8, 10, 64, 95, 27, 29, 38, 31, 63, 34, 59, 8, 12, 96, 19, 90, 21, 52, 79, 16, 22, 42, 93, 55, 75, 39, 64, 100, 7, 63, 42, 35, 24, 70, 60, 15, 9, 59, 70, 95, 47, 67, 45, 19, 87, 92, 85, 12, 79, 86, 43, 44, 24, 41, 15, 70, 33, 36, 79, 25, 17, 5, 53, 19, 98, 84, 64, 36, 22, 70, 6, 93, 62, 96, 11, 53, 20, 9, 92, 60, 40, 76, 14, 54, 19, 40, 100, 45, 49, 77, 29, 14, 40, 27, 71, 3, 7, 34, 65, 100, 83, 34, 30, 8, 1, 12, 6, 3, 67, 71, 10, 79, 95, 28, 6, 84, 2, 28, 14, 61, 25, 74, 23, 97, 74, 8, 28, 25, 33, 27, 26, 6, 25, 63, 78, 39, 77, 45, 45, 99, 15, 65, 27, 29, 35, 29, 41, 38, 91, 63, 99, 58, 34, 1, 74, 73, 95, 84, 9, 74, 17, 50, 62, 26, 65, 71, 21, 87, 6, 15, 12, 58, 24, 94, 73, 91, 21, 99, 16, 50, 73, 9, 22, 85, 43, 22, 85, 99, 77, 53, 52, 56, 23, 67, 62, 60, 92, 98, 40, 1, 25, 24, 7, 6, 22, 90, 28, 99, 53, 14, 59, 94, 25, 66, 30, 88, 65, 69, 87, 32, 87, 16, 78, 88, 80, 72, 89, 8, 16, 27, 13, 97, 15, 90, 7, 15, 51, 10, 92, 5, 31, 100, 84, 47, 75, 46, 64, 50, 39, 6, 45, 11, 78, 75, 64, 94, 23, 40, 21, 81, 76, 92, 18, 78, 70, 36, 6, 80, 71, 8, 2, 76, 3, 9, 23, 50, 41, 73, 91, 8, 41, 50, 79, 68, 49, 11, 41, 32, 75, 49, 41, 52, 47, 26, 95, 56, 6, 8, 26, 21, 78, 96, 73, 16, 18, 3, 39, 19, 10, 6, 19, 44, 64, 35, 46, 32, 54, 24, 16, 62, 92, 88, 17, 32, 12, 38, 71, 30, 1, 40, 45, 35, 17, 30, 11, 13, 88, 83, 70, 89, 53, 60, 69, 26, 65, 45, 46, 55, 43, 50, 44, 35, 50, 45, 18, 78, 87, 27, 3, 31, 63, 85, 34, 77, 19, 77, 3, 52, 6, 76, 97, 80, 80, 62, 42, 84, 77, 69, 20, 26, 99, 38, 57, 68, 10, 4, 62, 81, 12, 21, 22, 90, 19, 59, 40, 7, 38, 57, 32, 97, 19, 87, 72, 14, 24, 51, 9, 85, 78, 92, 53, 96, 69, 33, 79, 72, 90, 23, 62, 9, 61, 89, 7, 8, 9, 44, 49, 27, 36, 86, 1, 100, 50, 92, 78, 94, 63, 88, 32, 17, 56, 48, 75, 56, 21, 10, 54, 92, 25, 36, 21, 28, 32, 60, 60, 69, 14, 42, 58, 48, 33, 63, 40, 3, 18, 43, 90, 41, 1, 37, 86, 56, 63, 68, 26, 12, 41, 37, 82, 58, 66, 60, 32, 40, 25, 15, 36, 4, 94, 21, 52, 99, 94, 24, 36, 23, 78, 23, 84, 15, 78, 59, 52, 33, 10, 48, 67, 90, 5, 100, 99, 66, 32, 42, 22, 52, 68, 5, 44, 88, 22, 68, 86, 79, 15, 68, 66, 87, 45, 78, 61, 81, 15, 15, 43, 31, 20, 18, 24, 49, 22, 67, 50, 19, 51, 49, 61, 1, 61, 13, 66, 84, 34, 46, 54, 2, 87, 64, 74, 96, 99, 19, 82, 71, 49, 2, 48, 10, 54, 69, 56, 3, 88, 14, 44, 84, 33, 15, 46, 95, 63, 1, 13, 93, 22, 68, 71, 58, 55, 92, 10, 69, 80, 74, 72, 90, 84, 7, 9, 27, 20, 27, 100, 36, 7, 64, 40, 89, 86, 99, 28, 8, 98, 31, 68, 83, 28, 36, 11, 64, 62, 18, 75, 30, 68, 58, 22, 30, 99, 71, 53, 60, 33, 26, 29, 37, 97, 7, 2, 3, 81, 53, 26, 58, 89, 84, 7, 99, 36, 49, 84, 47, 78, 49, 62, 52, 28, 5, 94, 18, 47, 64, 44, 8, 64, 12, 62, 37, 42, 87, 75, 3, 77, 90, 65, 30, 15, 85, 5, 96, 81, 56, 79, 24, 71, 5, 82, 26, 34, 91, 81, 68, 49, 62, 80, 7, 99, 84, 41, 5, 46, 46, 67, 72, 1, 93, 72, 56, 44, 32, 36, 65, 4, 30, 34, 72, 10, 68, 25, 59, 32, 38, 14, 64, 41, 70, 51, 19, 91, 63, 55, 71, 91, 50, 48, 73, 40, 66, 45, 85, 69, 26, 3, 11, 14, 80, 21, 94, 52, 98, 26, 90, 85, 68, 1, 18, 76, 41, 56, 9, 30, 8, 86, 47, 49, 85, 1, 63, 49, 68, 38, 1, 86, 48, 7, 70, 38, 61, 89, 45, 14, 5, 52, 66, 66, 82, 69, 44, 89, 3, 32, 34, 12, 37, 37, 75, 8, 56, 21, 87, 3, 34, 13, 29, 44, 4, 99, 50, 36, 26, 36, 6, 93, 41, 61, 90, 12, 17, 52, 10, 32, 25, 35, 6, 10, 5, 76, 69, 36, 92, 89, 88, 98, 39, 88, 91, 41, 84, 86, 53, 95, 87, 22, 49, 80, 80, 98, 86, 69, 59, 45, 70, 100, 6, 4, 17, 30, 57, 96, 43, 44, 64, 72, 55, 73, 2, 77, 26, 40, 66, 49, 56, 63, 79, 24, 32, 98, 56, 14, 85, 50, 15, 61, 1, 100, 39, 85, 7, 45, 91, 1, 77, 93, 4, 65, 31, 62, 100, 81, 19, 85, 20, 21, 19, 30, 18, 21, 40, 14, 16, 1, 10, 84, 29, 26, 51, 52, 60, 24, 38, 75, 20, 64, 65, 4, 100, 99, 17, 47, 83, 8, 29, 58, 50, 13, 86, 88, 47, 83, 13, 62, 24, 13, 62, 14, 90, 1, 14, 76, 87, 25, 52, 69, 12, 35, 36, 57, 38, 74, 29, 22, 83, 79, 10, 18, 73, 84, 24, 67, 7, 75, 62, 18, 16, 98, 56, 22, 82, 39, 8, 32, 87, 74, 40, 87, 23, 29, 24, 55, 41, 76, 75, 8, 27, 67, 100, 60, 56, 76, 37, 2, 7, 13, 31, 53, 100, 86, 21, 51, 91, 1, 23, 11, 76, 11, 64, 56, 39, 72, 22, 30, 62, 7, 84, 90, 15, 68, 49, 51, 93, 27, 86, 3, 48, 11, 3, 24, 90, 35, 19, 42, 81, 100, 42, 97, 71, 88, 57, 62, 38, 66, 39, 44, 28, 97, 56, 34, 11, 28, 32, 48, 76, 56, 28, 59, 91, 84, 84, 92, 52, 63, 18, 35, 97, 79, 31, 47, 92, 29, 48, 14, 43, 22, 93, 2, 79, 70, 81, 1, 53, 99, 6, 74, 25, 50, 15, 78, 9, 28, 48, 18, 100, 33, 26, 58, 2, 87, 32, 55, 91, 84, 19, 95, 62, 8, 99, 87, 69, 93, 77, 61, 55, 71, 36, 49, 52, 6, 88, 86, 39, 81, 68, 97, 94, 19, 77, 57, 14, 71, 69, 31, 25, 75, 12, 8, 48, 82, 45, 27, 59, 3, 75, 8, 74, 100, 8, 85, 82, 95, 31, 76, 17, 1, 55, 51, 13, 92, 94, 75, 4, 78, 94, 66, 93, 9, 25, 10, 9, 75, 97, 80, 23, 13, 97, 41, 50, 93, 70, 48, 28, 28, 23, 85, 21, 92, 100, 83, 60, 32, 20, 43, 34, 23, 20, 19, 22, 8, 96, 11, 67, 89, 50, 65, 2, 3, 81, 41, 44, 81, 54, 16, 90, 62, 75, 70, 18, 6, 96, 93, 73, 64, 29, 95, 98, 2, 88, 33, 18, 46, 57, 66, 15, 68, 42, 75, 13, 85, 14, 21, 25, 76, 73, 98, 1, 16, 80, 15, 9, 20, 59, 15, 27, 18, 13, 6, 29, 62, 22, 43, 99, 99, 42, 28, 6, 94, 24, 23, 63, 62, 100, 65, 59, 70, 93, 83, 50, 82, 42, 16, 39, 53, 83, 57, 64, 16, 69, 30, 98, 38, 80, 94, 96, 2, 100, 96, 77, 48, 20, 93, 34, 93, 61, 100, 82, 18, 86, 64, 58, 9, 79, 25, 70, 19, 60, 53, 52, 24, 73, 98, 46, 92, 76, 62, 3, 94, 90, 85, 78, 6, 6, 36, 89, 19, 49, 11, 39, 90, 21, 48, 38, 70, 98, 79, 28, 66, 56, 59, 88, 85, 100, 75, 92, 90, 49, 73, 23, 79, 14, 9, 80, 43, 4, 3, 59, 3, 31, 98, 89, 6, 25, 11, 26, 18, 49, 76, 39, 88, 96, 69, 76, 71, 48, 26, 49, 85, 69, 43, 5, 26, 26, 26, 85, 77, 75, 10, 87, 13, 89, 29, 52, 97, 15, 98, 43, 87, 34, 74, 98, 67, 83, 78, 32, 14, 70, 39, 71, 79, 88, 60, 32, 46, 85, 33, 79, 90, 15, 53, 33, 12, 94, 16, 11, 99, 27, 78, 12, 28, 44, 33, 70, 13, 39, 1, 35, 96, 9, 73, 6, 61, 73, 1, 21, 45, 61, 65, 66, 65, 8, 16, 63, 20, 89, 65, 59, 27, 59, 78, 71, 17, 60, 73, 72, 84, 61, 91, 77, 58, 83, 90, 57, 19, 27, 10, 60, 60, 18, 57, 14, 47, 56, 81, 72, 1, 46, 78, 38, 48, 43, 12, 80, 21, 36, 57, 5, 100, 95, 81, 77, 52, 98, 59, 9, 11, 49, 67, 87, 66, 100, 99, 61, 44, 83, 74, 80, 54, 82, 64, 95, 87, 66, 19, 35, 85, 34, 84, 81, 81, 87, 1, 70, 38, 49, 94, 44, 30, 91, 36, 64, 61, 12, 50, 30, 14, 1, 53, 45, 15, 76, 85, 94, 77, 1, 62, 100, 6, 66, 84, 100, 25, 36, 46, 38, 19, 31, 75, 31, 18, 43, 2, 13, 44, 100, 86, 12, 12, 71, 21, 18, 58, 72, 41, 72, 21, 58, 8, 48, 2, 48, 73, 70, 52, 25, 5, 75, 31, 44, 100, 45, 95, 1, 32, 72, 60, 29, 62, 85, 46, 51, 75, 16, 71, 60, 59, 93, 60, 87, 17, 42, 86, 46, 11, 54, 8, 48, 82, 92, 9, 70, 13, 46, 12, 71, 9, 78, 5, 23, 1, 10, 41, 2, 98, 66, 50, 77, 77, 5, 91, 39, 45, 86, 83, 16, 55, 97, 9, 63, 39, 31, 51, 33, 57, 58, 78, 38, 68, 9, 96, 95, 32, 33, 52, 76, 90, 16, 40, 99, 44, 62, 7, 30, 58, 27, 43, 14, 13, 41, 32, 91, 66, 35, 18, 85, 74, 18, 63, 24, 72, 80, 33, 56, 29, 6, 22, 94, 24, 93, 17, 81, 64, 5, 54, 32, 66, 57, 34, 28, 13, 6, 96, 69, 64, 77, 52, 1, 62, 76, 52, 65, 12, 67, 13, 52, 33, 12, 67, 84, 33, 26, 48, 45, 54, 21, 41, 28, 43, 13, 15, 94, 93, 87, 80, 54, 27, 28, 28, 9, 22, 69, 16, 5, 93, 60, 28, 79, 14, 4, 11, 95, 17, 93, 68, 35, 78, 58, 61, 52, 64, 51, 24, 43, 84, 73, 45, 91, 79, 73, 23, 2, 10, 46, 26, 74, 90, 97, 23, 18, 40, 42, 37, 2, 94, 74, 100, 37, 5, 91, 60, 23, 34, 94, 67, 53, 94, 27, 40, 3, 45, 46, 10, 69, 28, 42, 73, 29, 99, 14, 32, 87, 26, 6, 99, 74, 1, 33, 58, 28, 36, 72, 15, 25, 64, 56, 62, 98, 52, 33, 75, 39, 6, 81, 68, 100, 73, 68, 31, 36, 76, 34, 80, 35, 94, 44, 61, 41, 34, 94, 93, 69, 21, 17, 84, 61, 5, 62, 81, 4, 11, 2, 43, 47, 89, 42, 70, 82, 83, 82, 33, 67, 99, 50, 92, 20, 5, 58, 37, 63, 80, 10, 45, 93, 57, 51, 60, 74, 60, 93, 6, 67, 92, 10, 66, 89, 86, 35, 48, 54, 97, 69, 87, 79, 49, 70, 7, 64, 30, 25, 93, 41, 13, 8, 13, 53, 27, 80, 18, 56, 31, 38, 80, 92, 95, 26, 41, 75, 3, 66, 37, 20, 49, 38, 80, 42, 84, 35, 2, 95, 59, 22, 39, 86, 96, 27, 36, 14, 12, 85, 9, 80, 94, 90, 39, 33, 55, 48, 99, 5, 9, 66, 36, 71, 72, 65, 99, 2, 16, 67, 89, 36, 19, 90, 6, 100, 56, 15, 3, 78, 92, 93, 40, 64, 95, 40, 49, 68, 85, 28, 28, 21, 13, 50, 45, 46, 19, 13, 21, 45, 31, 70, 33, 75, 41, 2, 20, 49, 61, 34, 49, 69, 94, 55, 93, 87, 4, 68, 49, 63, 51, 66, 39, 58, 77, 28, 41, 37, 19, 90, 54, 71, 36, 72, 42, 6, 69, 9, 3, 47, 100, 95, 85, 53, 68, 39, 33, 68, 27, 26, 10, 94, 74, 62, 98, 4, 62, 19, 79, 48, 80, 69, 22, 9, 1, 58, 21, 95, 63, 72, 68, 59, 31, 63, 11, 43, 42, 40, 8, 25, 80, 81, 2, 71, 36, 24, 92, 57, 76, 49, 16, 82, 68, 81, 10, 82, 63, 7, 87, 62, 96, 42, 12, 85, 60, 21, 72, 8, 45, 79, 13, 38, 74, 26, 65, 89, 17, 51, 65, 94, 2, 28, 27, 65, 27, 92, 88, 51, 56, 5, 36, 96, 80, 25, 38, 61, 89, 5, 6, 49, 58, 40, 8, 60, 5, 73, 35, 69, 91, 91, 95, 17, 100, 44, 74, 88, 28, 91, 28, 76, 9, 21, 19, 30, 13, 39, 80, 35, 27, 38, 67, 85, 58, 69, 87, 11, 29, 89, 47, 55, 50, 79, 67, 25, 50, 32, 64, 34, 76, 71, 14, 36, 56, 29, 99, 6, 63, 90, 71, 36, 26, 61, 22, 41, 30, 17, 64, 45, 28, 49, 97, 29, 2, 65, 72, 82, 94, 38, 80, 9, 76, 66, 34, 90, 59, 70, 48, 96, 45, 43, 27, 10, 44, 97, 37, 10, 68, 26, 74, 80, 24, 93, 50, 13, 67, 75, 85, 85, 65, 100, 40, 81, 58, 93, 8, 95, 10, 86, 68, 29, 66, 81, 66, 40, 16, 62, 47, 76, 70, 31, 62, 38, 50, 99, 21, 88, 64, 78, 76, 65, 56, 52, 42, 18, 70, 53, 7, 66, 14, 96, 73, 8, 12, 54, 35, 21, 85, 65, 82, 9, 67, 97, 57, 82, 43, 50, 30, 23, 59, 74, 8, 88, 91, 7, 30, 7, 63, 64, 22, 11, 96, 26, 1, 53, 33, 24, 57, 2, 97, 43, 35, 14, 75, 61, 63, 97, 80, 90, 85, 27, 84, 13, 9, 93, 38, 31, 86, 35, 83, 2, 11, 57, 18, 33, 51, 73, 69, 40, 45, 79, 94, 5, 46, 92, 30, 94, 70, 13, 73, 17, 71, 59, 11, 23, 89, 78, 32, 9, 81, 2, 23, 31, 93, 74, 70, 3, 78, 20, 47, 10, 87, 45, 24, 42, 100, 68, 20, 40, 9, 17, 28, 22, 97, 40, 54, 92, 25, 89, 94, 75, 59, 44, 3, 50, 91, 21, 7, 18, 42, 91, 74, 38, 99, 19, 82, 24, 44, 30, 66, 99, 32, 97, 59, 30, 66, 75, 81, 11, 24, 17, 77, 5, 44, 68, 2, 4, 83, 48, 54, 36, 85, 94, 20, 6, 92, 41, 89, 62, 36, 90, 18, 91, 22, 16, 36, 67, 24, 37, 53, 78, 11, 63, 10, 56, 89, 51, 14, 13, 89, 98, 70, 64, 100, 62, 3, 12, 19, 29, 17, 37, 81, 67, 68, 99, 53, 32, 61, 28, 54, 72, 36, 7, 53, 66, 26, 47, 51, 77, 31, 86, 85, 34, 89, 3, 33, 92, 12, 75, 2, 62, 66, 19, 30, 2, 53, 9, 72, 69, 99, 27, 63, 53, 29, 98, 24, 23, 8, 15, 75, 32, 77, 14, 93, 38, 8, 42, 67, 87, 3, 36, 42, 51, 77, 80, 92, 67, 70, 19, 17, 62, 37, 99, 1, 84, 44, 96, 91, 95, 59, 37, 98, 49, 31, 91, 8, 87, 74, 34, 95, 11, 18, 73, 62, 100, 98, 93, 59, 40, 68, 78, 25, 90, 65, 32, 5, 28, 71, 3, 88, 98, 13, 52, 22, 32, 5, 56, 39, 19, 14, 100, 29, 74, 99, 48, 94, 6, 2, 5, 63, 74, 5, 93, 86, 96, 83, 6, 32, 23, 24, 5, 50, 36, 54, 19, 21, 24, 80, 20, 51, 19, 10, 27, 49, 80, 72, 63, 49, 73, 55, 42, 17, 68, 28, 4, 24, 2, 30, 69, 71, 57, 5, 39, 34, 18, 53, 50, 34, 78, 15, 95, 29, 93, 67, 2, 53, 61, 60, 98, 75, 74, 16, 42, 59, 44, 61, 3, 9, 70, 10, 54, 66, 18, 34, 27, 4, 68, 42, 10, 78, 29, 49, 3, 91, 34, 89, 45, 1, 97, 68, 9, 60, 42, 74, 31, 52, 89, 98, 94, 29, 56, 78, 36, 30, 56, 39, 71, 9, 98, 93, 2, 40, 88, 13, 85, 43, 14, 16, 42, 51, 92, 52, 80, 27, 21, 33, 73, 44, 76, 7, 65, 9, 50, 70, 89, 3, 54, 11, 97, 8, 100, 37, 29, 23, 17, 48, 50, 94, 64, 70, 41, 37, 28, 49, 43, 41, 87, 91, 18, 86, 78, 81, 68, 70, 62, 95, 22, 91, 59, 15, 77, 57, 57, 48, 74, 25, 68, 65, 91, 17, 67, 33, 57, 70, 26, 73, 30, 38, 1, 41, 46, 1, 5, 21, 53, 11, 58, 55, 47, 27, 9, 44, 6, 4, 3, 39, 85, 27, 66, 82, 50, 40, 57, 41, 39, 42, 89, 2, 12, 72, 52, 49, 7, 89, 46, 12, 75, 49, 9, 28, 86, 92, 60, 63, 45, 97, 86, 51, 5, 77, 14, 80, 65, 27, 95, 44, 57, 39, 97, 88, 17, 38, 71, 91, 5, 22, 34, 75, 33, 87, 60, 29, 36, 96, 14, 61, 31, 96, 97, 24, 34, 5, 93, 91, 42, 23, 11, 79, 75, 35, 32, 33, 49, 72, 47, 17, 41, 17, 37, 9, 64, 45, 42, 93, 39, 95, 28, 67, 54, 74, 37, 59, 75, 22, 24, 61, 4, 43, 42, 43, 53, 47, 8, 39, 73, 27, 85, 66, 96, 39, 98, 16, 16, 54, 19, 44, 36, 23, 21, 15, 71, 58, 92, 79, 10, 2, 23, 81, 71, 26, 8, 41, 73, 99, 48, 70, 100, 39, 94, 58, 14, 30, 43, 28, 31, 92, 80, 69, 38, 9, 37, 50, 24, 68, 64, 99, 98, 43, 46, 95, 53, 62, 82, 73, 21, 63, 69, 47, 52, 11, 11, 73, 6, 54, 78, 55, 98, 31, 22, 68, 20, 32, 20, 61, 58, 51, 50, 99, 37, 26, 51, 69, 54, 90, 41, 46, 99, 29, 72, 48, 47, 98, 1, 42, 86, 81, 22, 27, 35, 36, 64, 98, 51, 8, 97, 44, 31, 69, 29, 57, 51, 17, 5, 33, 95, 51, 41, 83, 63, 27, 92, 80, 44, 96, 42, 14, 89, 31, 74, 69, 80, 78, 22, 85, 70, 26, 35, 30, 8, 90, 96, 22, 47, 36, 98, 59, 79, 43, 32, 52, 52, 73, 21, 21, 11, 26, 63, 98, 88, 91, 55, 47, 49, 56, 78, 41, 45, 56, 41, 72, 71, 51, 88, 10, 7, 86, 41, 73, 8, 100, 13, 77, 55, 45, 40, 11, 79, 72, 32, 55, 68, 10, 75, 88, 27, 78, 60, 42, 18, 51, 66, 100, 73, 80, 52, 29, 65, 55, 79, 5, 15, 38, 42, 84, 7, 82, 25, 90, 80, 42, 90, 59, 24, 6, 26, 39, 87, 90, 67, 12, 78, 1, 8, 12, 92, 94, 58, 30, 52, 57, 48, 18, 1, 26, 54, 82, 86, 20, 18, 20, 52, 71, 23, 87, 96, 47, 12, 81, 56, 11, 21, 17, 82, 37, 100, 56, 62, 83, 9, 16, 65, 38, 31, 66, 65, 75, 30, 64, 28, 90, 24, 1, 88, 98, 99, 63, 80, 35, 66, 93, 79, 92, 12, 93, 38, 97, 33, 35, 38, 15, 37, 80, 59, 31, 33, 44, 12, 73, 23, 47, 49, 97, 62, 27, 11, 80, 99, 45, 29, 92, 99, 8, 42, 34, 43, 82, 47, 10, 44, 88, 91, 65, 100, 55, 47, 99, 50, 90, 48, 44, 62, 85, 89, 10, 2, 97, 99, 54, 79, 76, 12, 89, 41, 87, 95, 3, 1, 27, 95, 2, 45, 7, 36, 74, 20, 13, 17, 75, 9, 22, 78, 16, 97, 34, 79, 95, 40, 46, 6, 34, 90, 96, 14, 20, 82, 98, 35, 30, 8, 100, 45, 69, 34, 15, 98, 100, 67, 11, 92, 43, 79, 36, 23, 78, 85, 15, 60, 49, 40, 34, 75, 28, 9, 29, 11, 100, 75, 50, 89, 39, 22, 69, 3, 32, 74, 6, 50, 54, 92, 46, 15, 51, 46, 18, 57, 23, 2, 38, 54, 18, 8, 78, 20, 63, 76, 23, 56, 53, 14, 85, 79, 8, 86, 52, 19, 48, 79, 29, 70, 9, 72, 39, 8, 93, 59, 86, 16, 36, 79, 38, 10, 15, 56, 23, 63, 83, 36, 39, 17, 77, 90, 8, 78, 100, 36, 21, 73, 83, 74, 83, 83, 22, 47, 66, 3, 11, 21, 10, 36, 14, 19, 13, 31, 6, 96, 8, 74, 62, 79, 25, 78, 68, 33, 90, 17, 18, 51, 83, 83, 44, 69, 38, 97, 59, 28, 5, 82, 57, 99, 39, 36, 51, 53, 100, 80, 65, 94, 87, 85, 29, 68, 58, 53, 2, 61, 82, 69, 90, 12, 77, 76, 60, 23, 69, 91, 15, 19, 63, 4, 96, 11, 10, 75, 68, 45, 100, 94, 29, 3, 98, 30, 27, 22, 27, 21, 38, 1, 31, 57, 78, 67, 85, 69, 59, 25, 93, 21, 26, 41, 9, 100, 40, 95, 70, 90, 87, 37, 14, 71, 17, 2, 48, 15, 8, 83, 88, 38, 52, 84, 83, 19, 70, 4, 6, 41, 16, 53, 68, 52, 72, 42, 67, 11, 56, 88, 60, 39, 85, 15, 99, 76, 99, 82, 26, 82, 65, 51, 74, 1, 97, 51, 9, 45, 33, 74, 52, 70, 76, 63, 89, 64, 27, 51, 58, 30, 41, 23, 24, 53, 53, 58, 94, 80];
let k2 = 88;
console.log(maxOperations2(nums2, k2));
 */


// 05/25/2023 - #643. Maximum Average Subarray I
// TODO: You are given an integer array nums consisting of n elements, and an integer k.
//  Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
//  Any answer with a calculation error less than 10-5 will be accepted.

/*
// First solution: time limit exceeded
const findMaxAverage = (nums, k) => {
    let start = 0, end = k, pointer;

    let subarray = nums.slice(start, end);
    let sum = subarray.reduce((a, c) => {
        return a + c;
    }, 0);
    let maxAverage = sum / k;
    start++;
    end++;

    while (end <= nums.length) {
        subarray = nums.slice(start, end);
        pointer = maxAverage;
        sum = subarray.reduce((a, c) => {
            return a + c;
        }, 0);
        maxAverage = sum / k;
        if (maxAverage < pointer) {
            maxAverage = pointer;
        }
        start++;
        end++;
    }
    return maxAverage.toFixed(5);
}

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k));

// Alternate solution using 'sliding window' algorithm approach:
const findMaxAverage2 = (nums, k) => {
    let max = -Infinity, runningSum = 0, start = 0, average;

    for (let end = 0; end < nums.length; end++) {
        runningSum += nums[end];

        if (end - start === k - 1) {
            average = runningSum / k;
            max = Math.max(max, average);
            runningSum -= nums[start];
            start++;
        }
    }
    return max.toFixed(5);
}

let nums2 = [1, 12, -5, -6, 50, 3];
let k2 = 4;
console.log(findMaxAverage2(nums2, k2));
 */


// 06/05/2023 - #1456. Maximum Number of Vowels in a Substring of Given Length
// TODO: Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
//  Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/*
// First solution: time limit exceeded
const maxVowels = (s, k) => {
    let max = 0, start = 0, end = k, array = s.split("");

    while (end <= array.length) {
        let runningTotal = 0;

        for (let i = start; i < end; i++) {
            if (array[i].match(/[aeiou]/gi)) {
                runningTotal++;
            }
        }
        max = Math.max(max, runningTotal);
        if (max === k) {
            return max;
        }
        end++;
        start++;
    }
    return max;
}

let s = "leetcode";
let k = 3;
console.log(maxVowels(s, k));

// Second solution:
const maxVowels2 = (s, k) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let max = 0, current = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            max++;
        }
    }

    if (max === k) {
        return max;
    }

    current = max;

    for (let i = 1; i <= s.length - k; i++) {
        if (vowels.has(s[i - 1])) {
            current--;
        }
        if (vowels.has(s[i + k - 1])) {
            current++;
        }

        if (current === k) {
            return current;
        }
        if (current > max) {
            max = current;
        }
    }
    return max;
}
let s2 = "leetcode";
let k2 = 3;
console.log(maxVowels2(s2, k2));
 */


// 06/07/2023 - #1004. Max Consecutive Ones III
// TODO: Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/*
const longestOnes = (nums, k) => {
    let start = 0, count = 0, longest = 0, flip = k;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const item = nums[windowEnd];

        if (item === 1) {
            count++;
        } else if (item === 0 && flip !== 0) {
            count++;
            flip--;
        } else {
            longest = Math.max(count, longest);
            windowEnd = start;
            start++;
            count = 0;
            flip = k;
        }
    }

    longest = Math.max(count, longest);
    return longest;
}
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
console.log(longestOnes(nums, k));
 */


// 06/08/2023 - #1493. Longest Subarray of 1's After Deleting One Element
// TODO: Given a binary array nums, you should delete one element from it.
//  Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

/*
const longestSubarray = (nums) => {
    let start = 0, count = 0, longest = 0, remove = 1, zeroCount = 0;

    for (let window = 0; window < nums.length; window++) {
        const element = nums[window];

        if (element === 0) {
            zeroCount++;
        }

        if (element === 1) {
            count++;
        } else if (element === 0 && remove !== 0) {
            remove--;
        } else {
            longest = Math.max(count, longest);
            window = start;
            start++;
            count = 0;
            remove = 1;
        }
    }
    longest = Math.max(count, longest);

    if (zeroCount) {
        return longest;
    }
    return longest - 1;
}
let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(nums));
 */


// 06/06/2023 - # 1732. Find the Highest Altitude
// TODO: There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
//  The biker starts his trip on point 0 with altitude equal 0.
//  You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n).
//  Return the highest altitude of a point.

const largestAltitude = (gain) => {
    let current, next;

    gain.unshift(0);

    let highest = Math.max(gain[0], gain[1]);

    for (let i = 1; i < gain.length - 1; i++) {
        current = gain[i];
        next = gain[i + 1];
        gain[i + 1] = current + next;
        highest = Math.max(highest, gain[i + 1]);
    }
    return highest;
}
let gain = [-4, -3, -2, -1, 4, 3, 2];
console.log(largestAltitude(gain));
