// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space

// Link: https://leetcode.com/problems/find-the-duplicate-number/description/

//1st soln O(n) w/ help

var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) return nums[i];
    }
};