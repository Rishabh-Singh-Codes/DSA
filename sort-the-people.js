// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

// Link: https://leetcode.com/problems/sort-the-people/description/

//1st soln O(n)

var sortPeople = function(names, heights) {
    sortedHeightMap = {};

    for(let i =0; i<heights.length; i++){
        sortedHeightMap[heights[i]] = i;
    }

    let finalArr = [];

    Object.keys(sortedHeightMap).map((el) => {
        finalArr.push(names[sortedHeightMap[el]])
    })

    return finalArr.reverse();
};


//2nd soln O(n)

var sortPeople = function(names, heights) {
    let map = {};

    for(let i = 0; i < names.length; i++) {
        map[i] = heights[i];
    }

    let order = Object.keys(map).sort((a, b) => map[b] - map[a]).map(el => names[el]);

    return order;
};