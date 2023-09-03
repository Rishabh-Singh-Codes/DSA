// Given an array of strings words and a string s, determine if s is an acronym of words.
// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].
// Return true if s is an acronym of words, and false otherwise.

// Link: https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/

//1st soln O(n)

var isAcronym = function(words, s) {
    let acc = "";

    words.forEach(word => acc += word[0]);

    if(s === acc) {
        return true;
    } else {
        return false;
    }
};