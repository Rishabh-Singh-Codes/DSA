// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:
// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// Link: https://leetcode.com/problems/capitalize-the-title/description/

//1st soln O(n)

var capitalizeTitle = function(title) {
    let res = '';
    let words = title.split(' ');
    for(let i = 0; i < words.length; i++) {
        if(words[i].length === 1 || words[i].length === 2) {
            res += words[i].toLowerCase() + " ";
        } else {
            res += (words[i].slice(0, 1).toUpperCase() + words[i].slice(1, words[i].length).toLowerCase()) + " ";
        }
    }

    return res.slice(0, res.length-1);
};