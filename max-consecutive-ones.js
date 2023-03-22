// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Link: https://leetcode.com/problems/max-consecutive-ones/description/

//1st soln O(n)

var findMaxConsecutiveOnes = function(nums) {
    if(nums.length === 1) {
        if(nums[0] === 1) return 1;
        else return 0;
    }
    let max = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            max = count > max ? count : max;
        } else {
            max = count > max ? count : max;
            count = 0;
        }
    };

    return max;
};