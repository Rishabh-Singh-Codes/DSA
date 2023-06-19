// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Link: https://leetcode.com/problems/relative-sort-array/description/

//1st soln O(n)

var relativeSortArray = function(arr1, arr2) {

    let map = arr1.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    let res = [];

    arr2.forEach((el) => {
        for(let i = 0; i < map[el]; i++) {
            res.push(el);
        }
    });

    let uniqueEle = arr1.reduce((acc, curr) => {
        if(!arr2.includes(curr)) acc.push(curr);
        return acc;
    }, []);

    uniqueEle.sort((a, b) => a - b);

    return [...res, ...uniqueEle];
};