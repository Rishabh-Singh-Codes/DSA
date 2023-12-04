// You are given an integer num. You can swap two digits at most once to get the maximum valued number.
// Return the maximum valued number you can get.

// Link: https://leetcode.com/problems/maximum-swap/description/

//1st soln O(n) w/ help

var maximumSwap = function(num) {
    const digits = num.toString().split("");

    let max = -1, maxIdx = -1, leftIdx = -1, rightIdx = -1;

    for(let i = digits.length - 1; i >= 0; i--) {
        const digit = parseInt(digits[i]);

        if(digit > max) {
            max = digit;
            maxIdx = i;
        } else if(digit < max) {
            leftIdx = i;
            rightIdx = maxIdx;
        }
    }

    if(leftIdx === -1) {
        return num;
    }

    [digits[leftIdx], digits[rightIdx]] = [digits[rightIdx], digits[leftIdx]];
    return parseInt(digits.join(""));
};