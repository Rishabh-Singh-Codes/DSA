// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.
// A sentence is circular if:
// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.
// Given a string sentence, return true if it is circular. Otherwise, return false.

// Link: https://leetcode.com/problems/circular-sentence/description/

//1st soln O(n)

var isCircularSentence = function(sentence) {
    if(sentence.charAt(0) !== sentence.charAt(sentence.length-1)) return false;

    if(sentence.length === 1) {
        if(sentence.charAt(0) !== sentence.charAt(sentence.length-1)) return false;
        else return true;
    }

    let wordArr = sentence.split(" ");

    for(let i = 1; i < wordArr.length; i++) {
        if (wordArr[i].charAt(0) !== wordArr[i-1].charAt(wordArr[i-1].length-1)) return false;
    }

    return true;
};