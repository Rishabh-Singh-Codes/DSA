// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Link: https://leetcode.com/problems/climbing-stairs/description/

//1st soln O(n) w/ help

var climbStairs = function(n) {
    if(n < 2) return n;

    let f1 = 1;
    let f2 = 1;

    let f3 = 0;

    for(let i = 1; i < n; i++) {
      f3 = f1+f2;
      f1 = f2;
      f2 = f3;
    }

    return f3;
};