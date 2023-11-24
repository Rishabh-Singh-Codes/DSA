// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Link: https://leetcode.com/problems/set-mismatch/description/

//1st soln O(n)

var findErrorNums = function(nums) {
    let res = [];
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ? map[nums[i]] : 0) + 1;
    }

    for(let num in map) {
        if(map[num] === 2) {
            res[0] = num;
            break;
        }
    }

    for(let i = 1; i <= nums.length; i++) {
        if(!nums.includes(i)) {
            res[1] = i;
            break;
        }
    }

    return res;
};