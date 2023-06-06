// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Link: https://leetcode.com/problems/length-of-last-word/description/

//1st soln O(n)

var lengthOfLastWord = function(s) {
    s = s.trim();
    let words = s.split(" ");

    return words.at(-1).length;
};