// You are given the logs for users' actions on LeetCode, and an integer k. The logs are represented by a 2D integer array logs where each logs[i] = [IDi, timei] indicates that the user with IDi performed an action at the minute timei.
// Multiple users can perform actions simultaneously, and a single user can perform multiple actions in the same minute.
// The user active minutes (UAM) for a given user is defined as the number of unique minutes in which the user performed an action on LeetCode. A minute can only be counted once, even if multiple actions occur during it.
// You are to calculate a 1-indexed array answer of size k such that, for each j (1 <= j <= k), answer[j] is the number of users whose UAM equals j.
// Return the array answer as described above.

// Link: https://leetcode.com/problems/finding-the-users-active-minutes/description/

//1st soln O(n)

var findingUsersActiveMinutes = function(logs, k) {
    let uniqMap = {};
    for(let i = 0; i<logs.length; i++) {
        if(!uniqMap[logs[i]]) uniqMap[logs[i]] = 1;
    }

    let uniqLogs = Object.keys(uniqMap).map(el => el.split(","));

    let map = {};
    for(let i = 0; i<uniqLogs.length; i++) {
        if(map[uniqLogs[i][0]]) map[uniqLogs[i][0]] += 1;
        else map[uniqLogs[i][0]] = 1;
    }

    let res = new Array(k).fill(0);

    let timeVal = Object.values(map);

    for(let time of timeVal) {
        res[parseInt(time) - 1] += 1;
    }

    return res;

};


//2nd soln O(n)

var findingUsersActiveMinutes = function(logs, k) {
    let map = {};

    logs.forEach(log => {
        if(map[log[0]] !== undefined) {
            if(!map[log[0]].includes(log[1])) {
                map[log[0]].push(log[1]);
            }
        } else {
            map[log[0]] = [log[1]];
        }
    });

    let res = new Array(k).fill(0);

    for(let user in map) {
        res[map[user].length - 1] += 1;
    }

    return res;
};