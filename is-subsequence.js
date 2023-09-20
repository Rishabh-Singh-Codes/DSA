// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Link: https://leetcode.com/problems/is-subsequence/description/

//1st soln O(n)

var isSubsequence = function(s, t) {
    let index = 0;
    let searchChar = s[index];
    let cnt = 0;

    for(let i = 0; i < t.length; i++) {
        if(t[i] === searchChar) {
            index++;
            searchChar = s[index];
            cnt++;
        }
    }

    if(cnt === s.length) {
        return true;
    } else {
        return false;
    }
};