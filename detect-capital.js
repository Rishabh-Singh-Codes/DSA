// We define the usage of capitals in a word to be right when one of the following cases holds:
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Link: https://leetcode.com/problems/detect-capital/description/

//1st soln O(n)

var detectCapitalUse = function(word) {
    if(word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
        if(word.charCodeAt(1) >= 65 && word.charCodeAt(1) <= 90) {
            for(let i = 2; i < word.length; i++) {
                if(word.charCodeAt(i) >= 97) {
                    return false;
                }
            }
        } else {
            for(let i = 2; i < word.length; i++) {
                if(word.charCodeAt(i) <= 90) {
                    return false;
                }
            }
        }
    } else {
        for(let i = 1; i < word.length; i++) {
            if(word.charCodeAt(i) <= 90) {
                return false;
            }
        }
    }

    return true;
};