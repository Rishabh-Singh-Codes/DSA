// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

// Link: https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/

//1st soln O(n)

var averageValue = function(nums) {
    let req = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]%2 === 0 && nums[i]%3 === 0) {
            req.push(nums[i]);
        }
    }

    if(req.length) {
        return Math.floor(req.reduce((acc, curr) => acc+curr, 0)/req.length);
    } else {
        return 0;
    }

};