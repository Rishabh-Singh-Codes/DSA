// You are given a positive integer n. Each digit of n has a sign according to the following rules:
// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

// Link: https://leetcode.com/problems/alternating-digit-sum/description/

//1st soln O(n)

var alternateDigitSum = function(n) {
    let sum = 0;
    let char = String(n).split("");
    for(let i = 1; i <= char.length; i++) {
        if(i%2 === 0) {
            sum -= +char[i-1];
        } else {
            sum += +char[i-1];
        }
    }

    return sum;
};