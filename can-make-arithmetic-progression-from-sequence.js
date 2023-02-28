// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Link: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/

//1st soln O(n)

var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a-b);
    let currDiff = 0;
    let lastDiff = 0;
    for(let i = 1; i < arr.length; i++) {
        currDiff = arr[i] - arr[i-1];
        if(i === 1) lastDiff = currDiff;
        console.log(lastDiff, currDiff)
        if(lastDiff !== currDiff) return false;
        lastDiff = currDiff
    }

    return true;
};