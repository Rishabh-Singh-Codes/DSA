// You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.
// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:
// 0 <= i <= nums.length - 2,
// nums[i] == key and,
// nums[i + 1] == target.
// Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.

// Link: https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/

//1st soln O(n)

var mostFrequent = function(nums, key) {
    let map = new Map();
    let freq = 0;
    let value;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === key){
            let c = (map.get(nums[i+1]) || 0) + 1;
            map.set(nums[i+1],c);

            if(c>freq){
                freq = c;
                value = nums[i+1]
            }
        }
    }
    return value;
};