// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

//1st soln O(n)

var numberOfSteps = function(num) {
    let cnt = 0;
    while(num > 0){
        if(num % 2 === 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        cnt++;
    }

    return cnt;
};