// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Link: https://leetcode.com/problems/happy-number/description/

//1st soln O(n)

var isHappy = function(n) {
    if(n === 1 || n === 7) {
        return true;
    }
    if(n < 10 && (n === 1 || n === 7)) {
        return false;
    }

    while(n > 9) {
        let chars = String(n).split("");

        n = chars.reduce((acc, curr) => acc += Math.pow(+curr,2), 0);

        if(n === 1 || n === 7) {
            return true;
        }
    }

    return false;
};