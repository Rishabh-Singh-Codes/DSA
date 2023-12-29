// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Link: https://leetcode.com/problems/two-sum/description/

//1st soln O(n^2)

var twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                res.push(i);
                res.push(j);
            }
        }
    }

    return res;
};

// 2nd soln O(n)

var twoSum = function(nums, target) {
    let res = [];

    for(let i = 0; i < nums.length; i++) {
        let idx = nums.slice(i+1).indexOf(target-nums[i])
        if(idx >= 0) {
            res = [i, idx+i+1];
            break;
        }
    }

    return res;
};

// 3rd soln O(n) w/ help

var twoSum = function(nums, target) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i
        }
    }

};

// 4th soln O(n)

var twoSum = function(nums, target) {
    let map = {};
    let res = [];

    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    for(let i = 0; i < nums.length; i++) {
        if(map[target - nums[i]] !== undefined && i !== map[target - nums[i]]) {
            res[1] = i;
            res[0] = map[target - nums[i]];
            break;
        }
    }

    return res;
};