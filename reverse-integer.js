// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Link: https://leetcode.com/problems/reverse-integer/description/

//1st soln O(n) w/ help

var reverse = function(x) {
    let nums = String(x).split("");

    if(nums[0] === "-") {
        nums = nums.slice(1).reverse().join("") 
        nums = "-" + Number(nums);
    } else {
        nums = Number(nums.reverse().join(""));
    }

    if(nums > 2**31 || nums < -(2**31)) {
        return 0;
    }

    return nums;
};