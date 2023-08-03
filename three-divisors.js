// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

// Link: https://leetcode.com/problems/three-divisors/description/

//1st soln O(n)

var isThree = function(n) {
    let cnt = 0;

    for(let i = 1; i <= n; i++) {
        if(n%i === 0){
            cnt++;
        }
    }

    if(cnt > 3 || cnt < 3) {
        return false;
    } else {
        return true;
    }
};