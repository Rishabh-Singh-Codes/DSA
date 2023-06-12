// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.
// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:
// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.
// Return the number of rods that have all three colors of rings on them.

// Link: https://leetcode.com/problems/rings-and-rods/description/

//1st soln O(n)

var countPoints = function(rings) {
    if(rings.length < 6 || !rings.split("").includes('R') || !rings.split("").includes('G') || !rings.split("").includes('B')) return 0;

    let map = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    }

    for(let i = 1; i < rings.length; i+=2){
        if(!map[rings[i]].includes(rings[i-1])) map[rings[i]] = [...map[rings[i]], rings[i-1]]
    }

    let cnt = 0;

    for(let i = 0; i <= 9; i++) {
        if(map[i].length === 3) cnt++;
    }

    return cnt;
};