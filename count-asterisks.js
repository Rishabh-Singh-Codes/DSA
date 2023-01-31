// You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.
// Return the number of '*' in s, excluding the '*' between each pair of '|'.
// Note that each '|' will belong to exactly one pair.

// Link: https://leetcode.com/problems/count-asterisks/description/

//1st soln O(n^2)

var countAsterisks = function(s) {
    let splitArr = s.split("|");

    let count = 0;


    for(let i = 0; i<splitArr.length; i+=2){
        if(splitArr[i].includes('*')) {
            for(let j = 0; j<splitArr[i].length; j++) {
                if(splitArr[i].charAt(j) === '*') count++;
            }
        }
    }

    return count;
};