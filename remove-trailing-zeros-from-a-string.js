// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

// Link: https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/

//1st soln O(n)

var removeTrailingZeros = function(num) {
    let cnt = 0;

    for(let i = num.length-1; i >= 0; i--) {
        if(num[i] === "0") {
            cnt++;
        }
        else {
            break;
        }
    }

    return num.slice(0, num.length-cnt);
};