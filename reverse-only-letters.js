// Given a string s, reverse the string according to the following rules:
// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

// Link: https://leetcode.com/problems/reverse-only-letters/description/

//1st soln O(n) w/ help

var reverseOnlyLetters = function(s) {
    isValidLetter = (c) => {
        if((c.charCodeAt() >= 65 && c.charCodeAt() <= 90) ||
        (c.charCodeAt() >= 97 && c.charCodeAt() <= 122)) {
            return true;
        }

        return false;
    }

    let chars = s.split("").filter(c => isValidLetter(c));

    let word = [];

    for(let i = 0; i < s.length; i++) {
        if(isValidLetter(s[i])) {
            word.push(chars.pop());
        } else {
            word.push(s[i]);
        }
    }

    return word.join("");
};