// Given a positive integer n, find the pivot integer x such that:
// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

// Link: https://leetcode.com/problems/find-the-pivot-integer/description/

//1st soln O(n^2)

var pivotInteger = function(n) {
    let totalSum = (n * (n+1)) / 2;
    let currSum = 0;

    for(let i = 1; i <= n; i++){
        currSum = ((i * (i+1)) / 2);
        if(currSum === totalSum - currSum + i) {
            return i;
        }
    }

    return -1;
};