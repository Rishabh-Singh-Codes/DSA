// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

// Link: https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

//1st soln O(n)

var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false;

    let map = {};

    for(let i = 0; i< sentence.length; i++) {
        if(map[sentence.charAt(i)]) {
            map[sentence.charAt(i)] += 1;
        } else {
            map[sentence.charAt(i)] = 1;
        }
    }

    if (Object.keys(map).length === 26) return true;
    else return false;
};