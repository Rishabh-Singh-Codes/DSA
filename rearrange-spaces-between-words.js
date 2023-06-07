// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.
// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.
// Return the string after rearranging the spaces.

// Link: https://leetcode.com/problems/rearrange-spaces-between-words/description/

//1st soln O(n^2)

var reorderSpaces = function(text) {
    let words = text.split(" ").filter(el => el.length > 0);
    let noOfSpaces = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === " ") noOfSpaces++;
    }

    let equalSpaces = Math.floor(noOfSpaces/(words.length - 1));
    let res = "";

    for(let i = 0; i < words.length; i++) {
        res += words[i];
        let currSpace = equalSpaces;
        if(i !== words.length - 1) {
            while(currSpace > 0) {
                res += " ";
                currSpace--;
                noOfSpaces--;
            }
        }
    }

    while(noOfSpaces > 0) {
        res += " ";
        noOfSpaces--;
    }

    return res;
};