// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Link: https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

//1st soln O(n^2)

var countConsistentStrings = function(allowed, words) {
    let count = 0;

    for(let i = 0; i < words.length; i++) {
        let wordLen = words[i].length;
        let wordCount = 0;
        for(let j = 0; j < wordLen; j++) {
            console.log(allowed.indexOf(words[i].charAt(j)))
            if(allowed.indexOf(words[i].charAt(j)) > -1) {
                wordCount++;
            }
            else break;
        }
        if (wordLen === wordCount) {
            count++;
        }
    }

    return count;
};


//2nd soln O(n) w/ help

var countConsistentStrings = function(allowed, words) {
    let count = 0;

    for(let word of words) {
        if(word.split("").every(letter => allowed.includes(letter))) count++;
    }

    return count;
};