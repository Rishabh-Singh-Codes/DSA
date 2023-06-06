// You are given a string number representing a positive integer and a character digit.
// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// Link: https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/description/

//1st soln O(n) w/ help

var removeDigit = function(number, digit) {
    let curr = "";
    let res = [];
    for(let i = 0; i < number.length; i++) {
        if(number[i] === digit) {
            curr = number.slice(0, i) + number.slice(i+1);
            res.push(curr);
        }
    }

    res.sort();

    return res[res.length - 1];
};