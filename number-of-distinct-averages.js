// You are given a 0-indexed integer array nums of even length.
// As long as nums is not empty, you must repetitively:
// Find the minimum number in nums and remove it.
// Find the maximum number in nums and remove it.
// Calculate the average of the two removed numbers.
// The average of two numbers a and b is (a + b) / 2.
// For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
// Return the number of distinct averages calculated using the above process.
// Note that when there is a tie for a minimum or maximum number, any can be removed.

// Link: https://leetcode.com/problems/number-of-distinct-averages/description/

//1st soln O(n)

var distinctAverages = function(nums) {
    let map = {};

    let max = 0;
    let min = 0;
    let avg = 0;

    let sortArr = (arr) => {
        arr.sort((a,b) => b-a);
    }

    while(nums.length) {
        sortArr(nums);
        max = nums.shift();
        min = nums.pop();

        avg = (max+min)/2;

        if(!map[avg]) map[avg] = 1;
    }

    return Object.keys(map).length;
};