// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:
// items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
// The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.
// Note: ret should be returned in ascending order by value.

// Link: https://leetcode.com/problems/merge-similar-items/description/

//1st soln O(n)

var mergeSimilarItems = function(items1, items2) {
    let map = {};

    for(let i = 0; i<items1.length; i++) {
        if(map[items1[i][0]]) map[items1[i][0]] += items1[i][1];
        else map[items1[i][0]] = items1[i][1];
    }

    for(let i = 0; i<items2.length; i++) {
        if(map[items2[i][0]]) {
            map[items2[i][0]] += items2[i][1];
            }
        else map[items2[i][0]] = items2[i][1];
    }

    let res = Object.entries(map);
    return res;
    
};