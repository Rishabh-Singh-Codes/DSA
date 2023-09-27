// We define the conversion array conver of an array arr as follows:
// conver[i] = arr[i] + max(arr[0..i]) where max(arr[0..i]) is the maximum value of arr[j] over 0 <= j <= i.
// We also define the score of an array arr as the sum of the values of the conversion array of arr.
// Given a 0-indexed integer array nums of length n, return an array ans of length n where ans[i] is the score of the prefix nums[0..i].

// Link: https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/description/

//1st soln O(n)

var findPrefixScore = function(nums) {
    let conver = [];
    let currMax = nums[0];

    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > currMax) {
        currMax = nums[i];
      }

      conver.push(nums[i]+currMax);
    }

    let res = conver.reduce((acc, curr) => {
      if(acc.length) {
        let sum = acc.at(-1) + curr;
        acc.push(sum)
      } else {
        acc.push(curr);
      }

      return acc;
    }, []);

    return res;
};