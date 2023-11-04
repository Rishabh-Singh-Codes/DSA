// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Link: https://leetcode.com/problems/maximum-average-subarray-i/description/

//1st soln O(n) w/ help

var findMaxAverage = function(nums, k) {
    let sum = -Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];

        if(windowEnd - windowStart + 1 === k) {
            sum = Math.max(sum, windowSum);

            windowSum -= nums[windowStart];
            windowStart++;
        }
    }

    return sum/k;
};