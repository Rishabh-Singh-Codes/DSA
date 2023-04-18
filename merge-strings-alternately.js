// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Link: https://leetcode.com/problems/merge-strings-alternately/description/

//1st soln O(n) w/ help

var mergeAlternately = function(word1, word2) {
    let res = "";
    let len = word1.length > word2.length ? word1.length : word2.length;
    for(let i = 0; i < len; i++) {
        if(word1[i]) res+=word1[i];
        if(word2[i]) res+=word2[i];
    }

    return res;
};