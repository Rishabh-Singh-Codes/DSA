// You are given a string s consisting only of uppercase English letters.
// You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.
// Return the minimum possible length of the resulting string that you can obtain.
// Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

// Link: https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/

//1st soln O(n)

var minLength = function(s) {
    while(s.indexOf("AB") > -1 || s.indexOf("CD") > -1) {
        let idx1 = s.indexOf("AB");
        let idx2 = s.indexOf("CD");

        if(idx1 > -1) {
            s = s.slice(0, idx1) + s.slice(idx1+2);
            continue;
        }

        if(idx2 > -1) {
            s = s.slice(0, idx2) + s.slice(idx2+2);
            continue;
        }
    }

    return s.length;
};