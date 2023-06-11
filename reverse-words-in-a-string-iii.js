// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Link: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

//1st soln O(n)

var reverseWords = function(s) {
    let words = s.split(" ");

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    
    return words.join(" ");
};