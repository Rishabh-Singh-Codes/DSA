// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

// Link: https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/

//1st soln O(n^2)

var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(" ");

    let res = 0;

    for(let i = 0; i < words.length; i++) {
        res++;
        for(let j = 0; j < brokenLetters.length; j++) {
            if(words[i].includes(brokenLetters[j])) {
                res--;
                break;
            }
        }
    }

    return res;
};