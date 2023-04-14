// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

// Link: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/

//1st soln O(n^2)

var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    if(s1.length !== s2.length) return false;
    let s2Arr = s2.split("");

    for(let i = 0; i<s2Arr.length; i++) {
        for(let j = 0; j < s2Arr.length; j++) {
            if(i !== j){
                let temp = s2Arr[i];
                s2Arr[i] = s2Arr[j];
                s2Arr[j] = temp;
                if(s2Arr.join("") === s1) return true;
                else {
                    let temp2 = s2Arr[i];
                    s2Arr[i] = s2Arr[j];
                    s2Arr[j] = temp2;
                }
            }
        }
    }

    return false;
};