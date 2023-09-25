// You are given a 1-indexed integer array nums of length n.
// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.
// Return the sum of the squares of all special elements of nums.

// Link: https://leetcode.com/problems/sum-of-squares-of-special-elements/description/

//1st soln O(n)

var sumOfSquares = function(nums) {
    let n = nums.length;

    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        if((n % (i+1)) === 0) {
            res += (nums[i] * nums[i]);
        }
    }

    return res;
};