// You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)
// Return the minimum number of operations to reduce the sum of nums by at least half.

// Link: https://leetcode.com/problems/minimum-operations-to-halve-array-sum/description/

//1st try O(n^2) [TLE]

var halveArray = function(nums) {
    let sum = (arr) => arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);

    let ogSum = sum(nums);
    let res = 0;

    while(sum(nums) > ogSum/2) {
        nums.sort((a, b) => b - a);
        nums[0] /= 2;
        res++;
    }

    return res;
};