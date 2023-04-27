// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).
// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.
// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.
// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.


// Link: https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/description/

//1st soln O(n)

var isSumEqual = function(firstWord, secondWord, targetWord) {
    let obj = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
    };

    let n1 = ""
    firstWord.split("").map((el) => n1+=obj[el]);
    
    let n2 = ""
    secondWord.split("").map((el) => n2+=obj[el]);
    
    let res = ""
    targetWord.split("").map((el) => res+=obj[el]);

    return +n1 + +n2 === +res;
};