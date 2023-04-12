// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Link: https://leetcode.com/problems/maximum-number-of-balloons/description/

//1st soln O(n)

var maxNumberOfBalloons = function(text) {
    let charArr = text.split("");
    let balArr = ['b', 'a', 'l', 'l', 'o', 'o', 'n'];

    let charMap = {};
    let balMap = {};

    for(let i = 0; i < charArr.length; i++) {
        if(charMap[charArr[i]]) charMap[charArr[i]] += 1;
        else charMap[charArr[i]] = 1;
    }

    for(let i = 0; i < balArr.length; i++) {
        if(balMap[balArr[i]]) balMap[balArr[i]] += 1;
        else balMap[balArr[i]] = 1;
    }

    let min = Number.MAX_VALUE;

    let balCharArr = Object.keys(balMap);

    for(let i = 0; i < balCharArr.length; i++) {
        if(charMap[balCharArr[i]] >= balMap[balCharArr[i]]) min = Math.min(min, Math.floor(charMap[balCharArr[i]]/balMap[balCharArr[i]]));
        else return 0;
    }

    return min;


};