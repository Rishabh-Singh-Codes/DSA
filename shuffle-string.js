// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Link: https://leetcode.com/problems/shuffle-string/description/

//1st soln O(n) w/ help

var restoreString = function(s, indices) {
    let res = [];
    for(let i=0; i<indices.length;i++){
        res[indices[i]] = s.charAt(i) 
    }

    return res.join('');
};