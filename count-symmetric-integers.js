// You are given two positive integers low and high.
// An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.
// Return the number of symmetric integers in the range [low, high].

// Link: https://leetcode.com/problems/count-symmetric-integers/description/

//1st soln O(n)

var countSymmetricIntegers = function(low, high) {
    let res = 0;

    for(let i = low; i <= high; i++) {
        let num = String(i);
        if(num.length % 2 === 0) {
            let leftSum = num.slice(0, num.length/2).split("").reduce((acc, curr) => acc += +curr, 0);
            let rightSum = num.slice(num.length/2).split("").reduce((acc, curr) => acc += +curr, 0);

            if(leftSum === rightSum) {
                res++;
            }
        }
    }

    return res;
};