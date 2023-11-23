// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Link: https://leetcode.com/problems/sum-of-square-numbers/description/

//1st soln O(n) w/ help

var judgeSquareSum = function(c) {
    if(c === 0) {
        return true;
    }

    let l = 0;
    let r = Math.floor(Math.sqrt(c));

    while(l <= r) {
        let sum = l**2 + r**2;

        if(sum === c) {
            return true;
        } else if(sum > c) {
            r--;
        } else {
            l++;
        }
    }

    return false;
};