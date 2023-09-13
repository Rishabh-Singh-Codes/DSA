// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

// Link: https://leetcode.com/problems/reduce-array-size-to-the-half/description/

//1st soln O(n)

var minSetSize = function(arr) {
    let map = {};

    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]]) {
            map[arr[i]] += 1;
        } else {
            map[arr[i]] = 1;
        }
    }

    let vals = Object.values(map).sort((a, b) => b - a);
    let res = 0;
    let sum = 0;    
    for (let i = 0; i < vals.length; i++) {
        sum += vals[i];
        if(sum >= Math.floor(arr.length/2)) {
            res = i+1;
            break;
        }
    }

    return res;

};