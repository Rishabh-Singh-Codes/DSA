// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.
// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

// Link: https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/

//1st soln O(n) w/ lil help

var rearrangeCharacters = function(s, target) {
    let map1 = {};
    let map2 = {};

    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0;i < s.length; i++){
        if(map1[s.charAt(i)]) map1[s.charAt(i)] += 1;
        else map1[s.charAt(i)] = 1;
    }

    for(let i = 0;i < target.length; i++){
        if(map2[target.charAt(i)]) map2[target.charAt(i)] += 1;
        else map2[target.charAt(i)] = 1;
    }

    let key = Object.keys(map2);

    for(let i = 0; i<key.length; i++) {
        if(map1[key[i]] > map2[key[i]]) {
            let curr = Math.floor(map1[key[i]]/map2[key[i]])
            if(curr < min) min = curr;
        } else if(map1[key[i]] === map2[key[i]]) min = 1;
        else {
            min = 0;
            break;
        }
    }

    return min;


};