// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

// Link: https://leetcode.com/problems/self-dividing-numbers/description/

//1st soln O(n^2)

var selfDividingNumbers = function(left, right) {
    let res = [];

    for(let i = left; i <= right; i++) {
        let str = String(i).split("");

        if(str.includes('0')) {
            continue;
        }

        let flag = false;

        for(let j = 0; j < str.length; j++) {
            if(i%Number(str[j]) !== 0) {
                flag = true;
            }
        }

        if(!flag) {
            res.push(Number(i));
        }
    }

    return res;
};