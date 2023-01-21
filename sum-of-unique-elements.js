// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

// Link: https://leetcode.com/problems/sum-of-unique-elements/description/

//1st soln O(n)

var sumOfUnique = function(nums) {
    let map = {};
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]) map[nums[i]] += 1;
        else map[nums[i]] = 1;
    }

    let sum = 0;

    let numArr = Object.keys(map);

    for(let j=0; j<numArr.length;j++){
        if(map[numArr[j]] === 1) sum+=parseInt(numArr[j]);
    }

    return sum;
};