// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.

// Link: https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

//1st soln O(n)

var halvesAreAlike = function(s) {
    let str1 = s.slice(0,s.length/2);
    let str2 = s.slice(s.length/2,s.length);

    let cnt1 = 0;
    let cnt2 = 0;

    for(let i = 0; i<str1.length; i++){
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(str1.charAt(i))) cnt1++;
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(str2.charAt(i))) cnt2++;
    }

    return (cnt1 === cnt2);

};