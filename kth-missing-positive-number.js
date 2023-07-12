// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.

// Link: https://leetcode.com/problems/kth-missing-positive-number/description/

//1st soln O(n)

var findKthPositive = function(arr, k) {
    let newArr = [];

    for(let i = 0; i<99999; i++){
        if(!arr.includes(i+1)) newArr.push(i+1);
    }
    
    return newArr[k-1];
};