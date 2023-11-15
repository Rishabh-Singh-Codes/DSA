// You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.
// You can apply the following operation on any of the two strings any number of times:
// Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.
// Return true if you can make the strings s1 and s2 equal, and false otherwise.

// Link: https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/description/

//1st soln O(n) w/ help

var canBeEqual = function(s1, s2) {
    for(let i = 0; i < 2; i++){
        let isLinearEqual = (
            s1[i] === s2[i] &&
            s1[i+2] === s2[i+2]
        );

        let isCrossEqual = (
            s1[i] === s2[i+2] &&
            s1[i+2] === s2[i]
        );

        if(!isLinearEqual && !isCrossEqual) {
            return false;
        }
    }

    return true;
};