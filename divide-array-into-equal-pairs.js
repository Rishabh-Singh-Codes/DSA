// You are given an integer array nums consisting of 2 * n integers.
// You need to divide nums into n pairs such that:
// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

// Link: https://leetcode.com/problems/divide-array-into-equal-pairs/description/

//1st soln O(n)

var divideArray = function(nums) {
    let map = {};

    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]]) map[nums[i]] += 1;
        else map[nums[i]] = 1;
    }

    let vals = Object.values(map);

    for(let i = 0; i<vals.length; i++ ){
        if(vals[i]%2 !== 0) {
            return false;
        }
    }

    return true;
};

//2nd soln O(n)
var divideArray = function(nums) {
    let map = {};

    for(let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    for(let occ in map) {
        if(map[occ] % 2 !== 0) {
            return false;
        }
    }

    return true;
};