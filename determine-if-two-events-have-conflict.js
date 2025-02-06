// You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:
// event1 = [startTime1, endTime1] and
// event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.
// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).
// Return true if there is a conflict between two events. Otherwise, return false.

// Link: https://leetcode.com/problems/determine-if-two-events-have-conflict/description/

//1st soln O(n) w/ help

var haveConflict = function (event1, event2) {
    const firstStart = +event1[0].split(":")[0] * 60 + +event1[0].split(":")[1];
    const firstEnd = +event1[1].split(":")[0] * 60 + +event1[1].split(":")[1];
    const secondStart = +event2[0].split(":")[0] * 60 + +event2[0].split(":")[1];
    const secondEnd = +event2[1].split(":")[0] * 60 + +event2[1].split(":")[1];

    if (Math.max(firstStart, secondStart) <= Math.min(firstEnd, secondEnd)) {
        return true;
    }

    return false;

};