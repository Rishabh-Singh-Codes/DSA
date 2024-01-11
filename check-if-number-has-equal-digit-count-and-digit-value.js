// You are given a 0-indexed string num of length n consisting of digits.
// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

// Link: https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description/

//1st soln O(n)

var digitCount = function(num) {
    let map = {};

    for(let i = 0; i<num.length;i++){
        if(map[num[i]]) map[num[i]]+=1;
        else map[num[i]] = 1;
    }

    for(let i=0;i<num.length;i++){
        if(num[i] != (map[i] ? map[i] : 0)) return false;
    }

    return true;
};

// 2nd soln Object(n)

var digitCount = function(num) {
    let map = new Map();

    for(let n of num) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    let idx = 0;
    for(let n of num) {
        if((map.get(String(idx)) || 0) != n) {
            return false;
        }

        idx++;
    }

    return true;
};