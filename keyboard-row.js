// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Link: https://leetcode.com/problems/keyboard-row/description/

//1st soln O(n^2)

var findWords = function(words) {
    let row1 = "qwertyuiop".split("");
    let row2 = "asdfghjkl".split("");
    let row3 = "zxcvbnm".split("");

    let curr = null;
    let res = [];

    for(let i = 0; i < words.length; i++) {
        if(words[i].length === 1) {
            res.push(words[i]);
            continue;
        }
        for(let j = 0; j < words[i].length; j++) {
            if(j === 0) {
                if(row1.includes(words[i][j].toLowerCase())) curr = row1;
                if(row2.includes(words[i][j].toLowerCase())) curr = row2;
                if(row3.includes(words[i][j].toLowerCase())) curr = row3;
            } else if(j === words[i].length -1) {
                if(curr.includes(words[i][j].toLowerCase())) res.push(words[i]);
            } else {
                if(curr.includes(words[i][j].toLowerCase())) continue;
                else break;
            }
        }
    }

    return res;
};