// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Link: https://leetcode.com/problems/number-of-good-pairs/description/

//1st soln O(n^2)

var numIdenticalPairs = function(nums) {
    let count=0;
    for(i=0;i<nums.length-1;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]) count++;
        }
    }

    return count;
};