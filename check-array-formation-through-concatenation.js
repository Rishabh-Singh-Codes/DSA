// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].
// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Link: https://leetcode.com/problems/check-array-formation-through-concatenation/description/

//1st soln O(n^2) w/ help

var canFormArray = function(arr, pieces) {
    let agg = [];

    let map = new Map();

    for(let piece of pieces) {
        map.set(piece[0], piece);
    }

    for(let ele of arr) {
        if(map.has(ele)) {
            agg = agg.concat(map.get(ele));
        }
    }

    return JSON.stringify(arr) === JSON.stringify(agg);
};