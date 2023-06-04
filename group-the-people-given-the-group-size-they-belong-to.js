// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.
// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

// Link: https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/

//1st soln O(n)

var groupThePeople = function(groupSizes) {
    let map = {};
    let res = [];

    for(let i = 0; i < groupSizes.length; i++) {
        if(map[groupSizes[i]]) {
            if(map[groupSizes[i]].length === groupSizes[i]) {
                res.push(map[groupSizes[i]]);
                map[groupSizes[i]] = [];
                map[groupSizes[i]].push(i);
            }
            else map[groupSizes[i]].push(i);
        }
        else map[groupSizes[i]] = [i];
    }

    let groups = Object.keys(map);

    for(let group of groups) {
        res.push(map[group]);
    }

    return res;

};
