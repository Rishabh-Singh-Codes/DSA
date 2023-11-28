// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.

// Link: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/

//1st soln O(n)

var countCharacters = function(words, chars) {
    let charsMap = {};

    for(let char of chars) {
        charsMap[char] = (charsMap[char] > 0 ? charsMap[char] : 0) + 1;
    }

    let res = 0;

    for(let word of words) {
        let wordMap = {};
        for(let w of word) {
            wordMap[w] = (wordMap[w] > 0 ? wordMap[w] : 0) + 1;
        }

        let len = 0;
        for(let w in wordMap) {
            if(wordMap[w] > charsMap[w] || charsMap[w] === undefined) {
                break;
            }
            len++;
        }

        if(Object.keys(wordMap).length === len) {
            res += word.length;
        }
    }

    return res;
};