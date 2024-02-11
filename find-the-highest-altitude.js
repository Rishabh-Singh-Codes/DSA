// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

// Link: https://leetcode.com/problems/find-the-highest-altitude/description/

//1st soln O(n) w/ help

var largestAltitude = function(gain) {
    let max = 0;
    let sum = 0;
    for(let i = 0; i<gain.length; i++) {
        sum += gain[i];
        if(sum > max) max = sum;
    }

    return max;
};

// 2nd soln

var largestAltitude = function(gain) {
    let max = Number.MIN_VALUE;

    let curr = 0;

    for(let num of gain) {
        curr += num;
        if(curr > max) {
            max = curr;
        }
    }

    return max;
};