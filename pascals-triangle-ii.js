// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Link: https://leetcode.com/problems/pascals-triangle-ii

//1st soln O(n) w/ help

var getRow = function(rowIndex) {
    let res = Array(rowIndex+1);

    res[0] = res[rowIndex] = 1;

    for(let i = 1, k = rowIndex; i < rowIndex; i++, k--) {
        res[i] = res[i-1] * k / i;
    }

    return res;
};