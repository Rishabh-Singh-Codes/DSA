// You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Link: https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

//1st soln O(n)

var dominantIndex = function(nums) {
    let temp = [...nums];
    let res = -1;
    nums.sort((a, b) => b-a);

    if(nums[0] >= 2*nums[1]) res = nums[0];
    else return -1;

    for(let i=0; i<temp.length; i++) {
        if(temp[i] === res) return i;
    }
};