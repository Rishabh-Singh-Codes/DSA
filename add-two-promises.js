// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

// Link: https://leetcode.com/problems/add-two-promises/description/

//1st soln O(1) w/ help

var addTwoPromises = async function(promise1, promise2) {
    let vals = await Promise.all([promise1, promise2]);

    let res = vals.reduce((acc, curr) => {
        acc += curr;

        return acc;
    }, 0);

    return res;
};