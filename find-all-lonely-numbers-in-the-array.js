// You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
// Return all lonely numbers in nums. You may return the answer in any order.

// Link: https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/description/

//1st soln O(n) w/ help

var findLonely = function(nums) {
    let countMap = new Map();
    let res = [];

    for(let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for(let num of nums) {
        if(!countMap.has(num-1) && !countMap.has(num+1) && countMap.get(num) === 1){
            res.push(num)
        }
    }

    return res;
};