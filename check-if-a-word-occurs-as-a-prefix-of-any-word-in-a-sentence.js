// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
// A prefix of a string s is any leading contiguous substring of s.

// Link: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

//1st soln O(n)

var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(" ");

    for(let i = 0; i < words.length; i++) {
        if(words[i].startsWith(searchWord)) return i+1;
    }

    return -1;
};