// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Link: https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

//1st soln O(n^2)

var checkIfExist = function(arr) {
    for(let i = 0; i<arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === 0 && arr[j] === 0) return true;
            if(arr[i]/arr[j] === 2 || arr[j]/arr[i] === 2) return true;
        }
    }

    return false;
};