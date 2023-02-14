// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
// Return the number of strings in words that are a prefix of s.
// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

// Link: https://leetcode.com/problems/count-prefixes-of-a-given-string/description/

//1st soln O(n)

var countPrefixes = function(words, s) {
    let count = 0;

    for(let i = 0; i<words.length; i++) {
        if(words[i] === s.slice(0, words[i].length)) count++;
    }

    return count;
};