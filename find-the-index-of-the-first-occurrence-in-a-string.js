// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

//1st soln O(n)

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};