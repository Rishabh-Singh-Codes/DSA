// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.
// Note:
// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.

// Link: https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

//1st soln O(n)

var findWinners = function(matches) {
    let win = {};
    let loss = {};

    for(let i = 0; i < matches.length; i++) {
        if(win[matches[i][0]]) {
            win[matches[i][0]] += 1;
        } else {
            win[matches[i][0]] = 1;
        }

        if(loss[matches[i][1]]) {
            loss[matches[i][1]] += 1;
        } else {
            loss[matches[i][1]] = 1;
        }
    }

    let noLoss = [];
    let oneLoss = [];

    Object.keys(win).forEach(player => {
        if(!loss[player]) {
            noLoss.push(player);
        }
    });

    Object.keys(loss).forEach(player => {
        if(loss[player] === 1) {
            oneLoss.push(player);
        }
    });

    noLoss.sort((a, b) => a - b);
    oneLoss.sort((a, b) => a - b);

    let res = [noLoss, oneLoss];

    return res;
};