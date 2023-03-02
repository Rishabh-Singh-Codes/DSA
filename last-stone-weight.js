// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.
// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Link: https://leetcode.com/problems/last-stone-weight/description/

//1st soln O(n)

var lastStoneWeight = function(stones) {

    if(stones.length <= 1) return stones[0]
    let sortArr = (arr) => {
        arr.sort((a,b) => b-a);
    }
    sortArr(stones);

    let y = 0;
    let x = 0;

    for(let i = 0; i < stones.length; i++) {
        y = stones[0];
        x = stones[1];

        if(x===y) {
            stones.shift();
            stones.shift();
            stones.push(0);
            stones.push(0);
        } else {
            stones.shift();
            stones.shift();
            stones.push(y-x);
            stones.push(0);
        }

        sortArr(stones);

    }

    return stones[0];

};