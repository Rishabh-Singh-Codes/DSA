// You are given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Link: https://leetcode.com/problems/maximum-69-number/description/

//1st soln O(n)

var maximum69Number  = function(num) {
    let n = String(num).split("");

    for(let i = 0 ; i < n.length; i++) {
        if(n[i] === '6') {
            n[i] = '9';
            break;
        }
    }


    return Number(n.join(""));
};