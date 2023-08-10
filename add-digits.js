// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Link: https://leetcode.com/problems/add-digits/description/

//1st soln O(n)

var addDigits = function(num) {
    if(num < 10) {
        return num;
    } else {
        let chars = String(num).split("");
        let len = chars.length;
        let cnt = 0;
        while(chars.length > 1) {
            let sum = chars.reduce((acc, curr) => +acc + +curr, 0);
            chars = String(sum).split("");
            cnt=sum;
        }

        return cnt;
    }
};