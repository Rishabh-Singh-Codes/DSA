// Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:
// nums[a] + nums[b] + nums[c] == nums[d], and
// a < b < c < d

// Link: https://leetcode.com/problems/count-special-quadruplets/description/

//1st soln O(n^4) w/ help

var countQuadruplets = function(nums) {
    let res = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                for(let l = k+1; l < nums.length; l++) {
                    if(nums[i] + nums[j] + nums[k] === nums[l]) {
                        res++;
                    }
                }
            }
        }
    }

    return res;
};