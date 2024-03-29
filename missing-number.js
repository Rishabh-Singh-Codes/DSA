// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Link: https://leetcode.com/problems/missing-number/description/

//1st soln O(n)

var missingNumber = function(nums) {
    nums.sort((a, b) => a-b);

    for(let i = 0; i < nums.length; i++) {
        if(i !== nums[i]) return i;
    }

    return nums.length;
};