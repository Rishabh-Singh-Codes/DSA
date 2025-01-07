// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
// As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// Link: https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/description/

//1st soln O(n)

var getSneakyNumbers = function (nums) {
  const map = new Map();
  const res = [];

  for (let num of nums) {
    if (map.has(num)) {
      res.push(num);
      if (res.length === 2) {
        break;
      }
    } else {
      map.set(num, 1);
    }
  }

  return res;
};
