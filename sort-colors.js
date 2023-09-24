// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Link: https://leetcode.com/problems/sort-colors/description/

//1st soln O(n)

var sortColors = function(nums) {
    let swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let l = 0;
    let r = nums.length - 1;
    let i = 0;

    while(i <= r) {
        let n = nums[i];
        if(n === 0) {
            swap(i, l);
            i++;
            l++;
        } else if(n === 2) {
            swap(i, r);
            r--;
        } else {
            i++;
        }
    }
};