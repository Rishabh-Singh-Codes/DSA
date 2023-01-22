// You are given an integer array nums with the following properties:
// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

// Link: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/

//1st soln O(n)

var repeatedNTimes = function(nums) {
    let map = {};

    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]+=1;
            if(map[nums[i]] === Math.ceil(nums.length/2)) return nums[i];
        }
        else map[nums[i]] = 1;
    }

};