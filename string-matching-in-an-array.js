// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.
// A substring is a contiguous sequence of characters within a string

// Link: https://leetcode.com/problems/string-matching-in-an-array/description/

//1st soln O(n)

var stringMatching = function(words) {
    let res = [];

    for(let i = 0; i< words.length; i++) {
        for(let j = 0; j<words.length; j++) {
            if(i !== j) {
                if(words[j].indexOf(words[i])>-1) {
                res.push(words[i]);
                break;
                }
            }
        }
    }

    return res;
};