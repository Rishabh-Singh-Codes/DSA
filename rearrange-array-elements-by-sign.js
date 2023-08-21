// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Link: https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

//1st soln O(n)

var rearrangeArray = function(nums) {
    let n = nums.length;
    let pos = [];
    let neg = [];

    for(let i = 0; i < n; i++) {
        if(nums[i] > 0) {
            pos.push(nums[i]);
        } else {
            neg.push(nums[i]);
        }
    }

    let res = new Array(n);
    let curr = 0;
    for(let i = 0; i < n; i++) {
        if(i%2 === 0){
            res[i] = pos[curr];
        } else {
            res[i] = neg[curr];
            curr++;
        }
    }

    return res;
};