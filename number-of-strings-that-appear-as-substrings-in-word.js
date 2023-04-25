// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.
// A substring is a contiguous sequence of characters within a string.

// Link: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/

//1st soln O(n)

var numOfStrings = function(patterns, word) {
    let cnt = 0;

    for(let i = 0; i<patterns.length; i++) {
        if(word.indexOf(patterns[i]) > -1) cnt++;
    }

    return cnt;
};