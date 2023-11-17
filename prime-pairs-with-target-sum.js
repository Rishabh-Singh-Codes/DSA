// You are given an integer n. We say that two integers x and y form a prime number pair if:
// 1 <= x <= y <= n
// x + y == n
// x and y are prime numbers
// Return the 2D sorted list of prime number pairs [xi, yi]. The list should be sorted in increasing order of xi. If there are no prime number pairs at all, return an empty array.
// Note: A prime number is a natural number greater than 1 with only two factors, itself and 1.

// Link: https://leetcode.com/problems/prime-pairs-with-target-sum/description/

//1st soln O(n) w/ help

var findPrimePairs = function(n) {
    let res = [];

    const isPrime = (num) => {
        if(num < 2) return false;

        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num%i === 0) return false;
        }

        return true;
    }

    for(let x = 2; x <= n/2; x++) {
        let y = n - x;
        if(isPrime(x) && isPrime(y)) {
            res.push([x, y]);
        }
    }

    return res;
};