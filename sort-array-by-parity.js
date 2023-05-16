// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Link: https://leetcode.com/problems/sort-array-by-parity/description/

//1st soln O(n)

var sortArrayByParity = function(nums) {
    if(nums.length === 1) return nums;

    let even = [];
    let odd = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]%2 === 0) even.push(nums[i]);
        else odd.push(nums[i]);
    };

    return [...even, ...odd];
};