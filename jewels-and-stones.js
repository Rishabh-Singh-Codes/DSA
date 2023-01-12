// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Link: https://leetcode.com/problems/jewels-and-stones/description/

//1st soln O(n)

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let map = {};

    for(let i=0; i< stones.length; i++) {
        if(map[stones.charAt(i)]){
            map[stones.charAt(i)] += 1; 
        } else {
            map[stones.charAt(i)] = 1; 
        }
    }

    for(let i = 0; i < jewels.length; i++) {
        if(map[jewels.charAt(i)]) count+=map[jewels.charAt(i)];
    }

    return count;
};