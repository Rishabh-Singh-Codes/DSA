// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].


// Link: https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/

//1st soln O(n)

var numEquivDominoPairs = function(dominoes) {
    let map = {};
    let cnt = 0;

    for(let i = 0; i < dominoes.length; i++) {
        if(map[dominoes[i]]) {
            map[dominoes[i]] += 1;
        } else if(map[dominoes[i].reverse()]) {
            map[dominoes[i]] += 1;
        } else {
            map[dominoes[i]] = 1;
        }
    }

    for(let num in map) {
        if(map[num] > 2) {
            let curr = map[num] - 1;
            while(curr > 0) {
                cnt += curr;
                curr--;
            }
        } else if(map[num] === 2) {
            cnt++;
        }
    }

    return cnt;    
};