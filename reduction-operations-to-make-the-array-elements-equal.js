// Given an integer array nums, your goal is to make all elements in nums equal. To complete one operation, follow these steps:
// Find the largest value in nums. Let its index be i (0-indexed) and its value be largest. If there are multiple elements with the largest value, pick the smallest i.
// Find the next largest value in nums strictly smaller than largest. Let its value be nextLargest.
// Reduce nums[i] to nextLargest.
// Return the number of operations to make all elements in nums equal.

// Link: https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/

//1st soln O(nlogn) w/ help

var reductionOperations = function(nums) {
    let res = 0;

    nums.sort((a, b) => b - a);

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i - 1]) {
            res += i;
        }
    }

    return res;
};