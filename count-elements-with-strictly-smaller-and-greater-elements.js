// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Link: https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/description/

//1st soln O(nlogn) w/ help

var countElements = function (nums) {
  nums.sort((a, b) => a - b);

  let cnt = 0;
  let max = nums[nums.length - 1];
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min && nums[i] < max) cnt++;
  }

  return cnt;
};

// 2nd soln O(n^2)

var countElements = function (nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let greater = false;
    let smaller = false;
    for (j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[j] > nums[i]) {
          greater = true;
        }

        if (nums[j] < nums[i]) {
          smaller = true;
        }

        if (greater && smaller) {
          res++;
          break;
        }
      }
    }
  }

  return res;
};
