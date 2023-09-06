// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Link: https://leetcode.com/problems/valid-mountain-array/description/

//1st soln O(n)

var validMountainArray = function(arr) {
    if(arr.length < 3) {
        return false;
    }

    let inc = true;
    let arr2 = [...arr];
    let max = arr2.sort((a, b) => b - a)[0];
    for(let i = 1; i < arr.length; i++) {
        if(inc) {
            if(arr[i] <= arr[i-1]) {
                return false;
            }
        } else {
            if(arr[i] >= arr[i-1]) {
                return false;
            }
        }

        if(arr[i] === max && i !== arr.length-1) {
            inc = false;
        }
    }

    if(inc) {
        return false;
    } else {
        return true;
    }
    
};