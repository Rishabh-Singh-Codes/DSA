// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.


// Link: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

//1st soln O(n)

var removeDuplicates = function(s) {
    let dup = true;

    while(dup === true) {
        let check = true;
        for(let i = 1; i < s.length; i++) {
            if(s[i] === s[i-1]) {
                s = s.slice(0,i-1) + s.slice(i+1);
                check = false;
                break;
            }
        }

        check === true ? dup = false : null;
    }

    return s;
};