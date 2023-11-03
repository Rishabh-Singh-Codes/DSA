// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.
// Return the maximum distance between two houses with different colors.
// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

// Link: https://leetcode.com/problems/two-furthest-houses-with-different-colors/description/

//1st soln O(n^2)

var maxDistance = function(colors) {
    let res = 0;
    let n = colors.length;
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            if(colors[i] !== colors[j] && Math.abs(j - i) > res) {
                res = Math.abs(j - i);
            }
        }
    }

    return res;
};