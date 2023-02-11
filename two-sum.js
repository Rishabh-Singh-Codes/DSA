// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Link: https://leetcode.com/problems/two-sum/description/

//1st soln O(n^2)

var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                res.push(i);
                res.push(j);
            }
        }
    }

    return res;
};