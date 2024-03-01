// You are given a binary string s that contains at least one '1'.
// You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
// Return a string representing the maximum odd binary number that can be created from the given combination.
// Note that the resulting string can have leading zeros.

// Link: https://leetcode.com/problems/maximum-odd-binary-number/description/

//1st soln O(n)

var maximumOddBinaryNumber = function(s) {
    let no1 = 0;
    let no0 = 0;

    s.split("").forEach((str) => {
        str === "0" ? no0++ : no1++;
    });

    let res = "1";

    while(no0 > 0) {
        res = "0" + res;
        no0--;
    }

    while(no1 > 1) {
        res = "1" + res;
        no1--;
    }

    return res;
};