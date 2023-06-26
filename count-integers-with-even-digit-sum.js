// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.
// The digit sum of a positive integer is the sum of all its digits.

// Link: https://leetcode.com/problems/count-integers-with-even-digit-sum/description/

//1st soln O(n^2)

var countEven = function(num) {
    let cnt = 0;

    let digitSum = (num) => {
        return String(num).split("").reduce((acc, curr) => {
            acc += +curr;
            return acc;
        }, 0)
    }

    for(let i = 1; i <= num; i++) {
        if(digitSum(i) % 2 === 0) cnt++;
    }

    return cnt;
};