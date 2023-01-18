// You are given a string s. Reorder the string using the following algorithm:
// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.

// Link: https://leetcode.com/problems/increasing-decreasing-string/description/

//1st soln O(n)

var sortString = function(s) {
    let sLen = s.length;
    let sortString = s.split('').sort();
    let map = {};
    let res = '';

    for(let i=0;i < s.length; i++) {
        if (map[sortString[i]]) map[sortString[i]]+=1;
        else map[sortString[i]]=1;
    }

    let mArr = Object.keys(map);

    let j=1;
    while(sLen>0){
        if(j%2 !== 0){
            for(let i = 0; i< mArr.length; i++){
                if(map[mArr[i]]>0) {
                    res += mArr[i];
                    map[mArr[i]] --;
                }
            }
        } else {
            for(let i = mArr.length; i>=0; i--){
                if(map[mArr[i]]>0) {
                    res += mArr[i];
                    map[mArr[i]] --;
                }
            }
        }
        j++;
        sLen--;
    }

    return res;

};