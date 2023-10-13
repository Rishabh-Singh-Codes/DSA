// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Link: https://leetcode.com/problems/contains-duplicate/description/

//1st soln O(n) w/ help

var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while(i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        height[i] <= height[j] ? i++ : j--;
    }
    return max;
};