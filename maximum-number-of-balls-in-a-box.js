// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.
// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.

// Link: https://leetcode.com/problems/maximum-number-of-balls-in-a-box/description/

//1st soln O(n)

var countBalls = function(lowLimit, highLimit) {
    let map = {};

    let digitSum = (num) => {
        let sum = 0;
        String(num).split("").forEach(el => sum += +el);
        return sum;
    }

    for(let i = lowLimit; i<=highLimit; i++) {
        let sum = digitSum(i);

        if(map[sum]) map[sum]+=1;
        else map[sum] = 1;
    }

    return Object.values(map).sort((a, b) => b-a)[0];
};