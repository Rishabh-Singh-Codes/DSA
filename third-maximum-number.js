// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Link: https://leetcode.com/problems/third-maximum-number/description/

//1st soln O(n)

var thirdMax = function(nums) {
    nums.sort((a, b) => b-a);
    let set1 = new Set([...nums]);
    let arr = [...set1];
    
    if(arr.length > 2) return arr[2];
    else return arr[0];

};