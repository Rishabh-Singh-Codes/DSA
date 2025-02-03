// Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.
// A complete day is defined as a time duration that is an exact multiple of 24 hours.
// For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

// Link: https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/

//1st soln O(n^2)

var countCompleteDayPairs = function(hours) {
    let res = 0;

    for(let i = 0; i < hours.length; i++){
        for(let j = i+1; j < hours.length; j++) {
            if((hours[i] + hours[j]) % 24 === 0) {
                res++;
            }
        }
    }

    return res;
};