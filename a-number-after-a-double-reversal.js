// Reversing an integer means to reverse all its digits.
// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

// Link: https://leetcode.com/problems/a-number-after-a-double-reversal/description/

//1st soln O(n)

var isSameAfterReversals = function(num) {
    if(String(num).length === 1) {
        return true;
    }

    if(String(num).split("").at(-1) === '0') {
        return false;
    }

    return true;
};
