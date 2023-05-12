// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Link: https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

//1st soln O(n)

var findGCD = function(nums) {
    nums.sort((a, b) => a-b);
    let gcd = 1;
    for(let i = 1; i <= nums[nums.length - 1]; i++) {
        if(nums[0]%i === 0 && nums[nums.length - 1]%i === 0) gcd = Math.max(gcd, i);
    }

    return gcd;
};