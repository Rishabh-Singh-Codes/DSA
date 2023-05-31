// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.
// An English letter b is greater than another letter a if b appears after a in the English alphabet.

// Link: https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/

//1st soln O(n)

var greatestLetter = function(s) {
    if(s.length === 1) return "";

    let greatest = "A";

    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i);
        let lower = char.toLowerCase() === char ? true : false;
        if(lower) {
            if(s.indexOf(char.toUpperCase()) > -1) {
                greatest = char.toUpperCase().charCodeAt(0) > greatest.charCodeAt(0) ? char.toUpperCase() : greatest;
            }
        } else {
            if(s.indexOf(char.toLowerCase()) > -1) {
                greatest = char.toUpperCase().charCodeAt(0) > greatest.charCodeAt(0) ? char.toUpperCase() : greatest;
            }
        }
    }

    if(greatest !== "A") {
        return greatest;
    } else if(greatest === "A" && s.indexOf("a") > -1){
        return "A";
    } else {
        return "";
    }
};