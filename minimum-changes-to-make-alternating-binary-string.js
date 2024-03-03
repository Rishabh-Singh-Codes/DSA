// You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.
// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.
// Return the minimum number of operations needed to make s alternating.

// Link: https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description/

//1st soln O(n) w/ help

var minOperations = function(s) {
    let start10 = 0;

    s.split("").forEach((str, i) => {
        if(+str === i%2) {
            start10++;
        }
    });

    return Math.min(start10, s.length - start10);
};