// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.

// Link: https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

//1st soln O(n)

var frequencySort = function(nums) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) map[nums[i]] += 1;
        else map[nums[i]] = 1;
    }

    let keysArr = Object.keys(map);

    keysArr.sort((a, b) => {
        if(map[a] === map[b]) return (b - a);
        else return (map[a] - map[b]);
    });

    let res = [];

    for(let i = 0; i < keysArr.length; i++) {
        while(map[keysArr[i]] > 0){
            res.push(keysArr[i])
            map[keysArr[i]]--;
        }
    }

    return res;
};