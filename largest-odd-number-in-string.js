// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

// Link: https://leetcode.com/problems/largest-odd-number-in-string/description/

//1st soln O(n)

var largestOddNumber = function(num) {
    let char = num.split("");

    if(Number(char.at(-1))%2 !== 0) {
        return num;
    }

    for(let i = 1 ; i <= num.length; i++) {
        if(Number(char.at(-i))%2 !== 0) {
            return num.slice(0, num.length - i + 1);
        }
    }


    return "";
};