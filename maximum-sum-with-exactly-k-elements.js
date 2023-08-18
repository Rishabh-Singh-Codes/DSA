// You are given a 0-indexed integer array nums and an integer k. Your task is to perform the following operation exactly k times in order to maximize your score:
// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.

// Link: https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/

//1st soln O(n)

var maximizeSum = function(nums, k) {
    nums.sort((a, b) => a-b);

    let big = nums.at(-1);
    let sum = 0;
    while(k>0) {
        sum += big;
        big++;
        k--;
    }

    return sum;
};