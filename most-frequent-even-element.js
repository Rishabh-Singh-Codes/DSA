// Given an integer array nums, return the most frequent even element.
// If there is a tie, return the smallest one. If there is no such element, return -1.

// Link: https://leetcode.com/problems/most-frequent-even-element/description/

//1st soln O(n)

var mostFrequentEven = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(nums[i]%2 === 0) {
            if(map[nums[i]]) {
                map[nums[i]] += 1
            } else {
                map[nums[i]] = 1;
            }
        }
    }

    let maxs = [];
    let maxVal = 0;

    let keys = Object.keys(map);

    for(let i = 0; i < keys.length; i++) {
        if(map[keys[i]] > maxVal) {
            maxVal = map[keys[i]];
            maxs = [];
            maxs.push(keys[i]);
        } else if (map[keys[i]] === maxVal) {
            maxs.push(keys[i]);
        }
    }

    if(maxs.length) {
        if(maxs.length === 1) {
            return maxs[0];
        }
        return maxs.sort((a, b) => +a - +b)[0];
    } else {
        return -1;
    }
};