// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Link: https://leetcode.com/problems/single-number/description/

//1st soln O(n)

var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];
    nums.sort((a, b) => a-b);

    for(let i = 0; i<nums.length; i++) {
        if(nums[i] !== nums[i+1]) return nums[i];
        else i++;
    }
};