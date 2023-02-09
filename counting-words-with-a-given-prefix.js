// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.

// Link: https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

//1st soln O(n)

var prefixCount = function(words, pref) {
    let count = 0;
    for(let i = 0; i<words.length; i++) {
        if(pref === words[i].slice(0, pref.length)) count++;
    }

    return count;
};