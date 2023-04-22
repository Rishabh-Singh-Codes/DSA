// You are given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

// Link: https://leetcode.com/problems/xor-operation-in-an-array/description/

//1st soln O(n)

var xorOperation = function(n, start) {
    let arr = [start];

    for(let i = 1; i<n; i++){
        arr.push(start + (2*i));
    }

    let res = 0;

    for(let i = 0 ; i<arr.length; i++) {
        res = res ^ arr[i];
    }

    return res;
};