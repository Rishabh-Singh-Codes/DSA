// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Link: https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/description/

//1st soln O(n)

var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for(let i = 0; i < startTime.length; i++) {
        if(queryTime>= startTime[i] && queryTime<= endTime[i]) count++;
    }

    return count;
};