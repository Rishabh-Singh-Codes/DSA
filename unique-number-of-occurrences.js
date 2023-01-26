// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Link: https://leetcode.com/problems/unique-number-of-occurrences/description/

//1st soln O(n)

var uniqueOccurrences = function(arr) {
    let map = {};

    for(let i=0; i < arr.length; i++) {
        if(map[arr[i]]) map[arr[i]]+=1;
        else map[arr[i]]=1;
    }

    let values = Object.values(map).sort();

    for(let i = 1; i < values.length; i++) {
        if(values[i] === values[i-1]) return false;
    }

    return true;
};