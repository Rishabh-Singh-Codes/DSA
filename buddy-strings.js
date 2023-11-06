// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".


// Link: https://leetcode.com/problems/buddy-strings/description/

//1st soln O(n) w/ help

var buddyStrings = function(s, goal) {
    if(s === "" || goal === "" || s.length !== goal.length) {
        return false;
    }

    if(s === goal) {
        let set = new Set(s);
        return set.size < s.length;
    }

    let a = "";
    let b = "";

    for(let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            a += s[i];
            b += goal[i];
        }
    }

    if(a.length === 2 && a.length === b.length) {
        return a[0] === b[1] && a[1] === b[0];
    }

    return false;
};