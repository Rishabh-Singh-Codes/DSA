// You are given a positive integer array nums.
// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.
// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Link: https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

//1st soln O(n)

var differenceOfSum = function(nums) {
    let eleSum = 0;
    let digSum = 0;

    for(let i = 0; i<nums.length; i++){
        eleSum += nums[i];
        String(nums[i]).split("").map(el => digSum+=parseInt(el))
    }

    return Math.abs(eleSum - digSum);
};