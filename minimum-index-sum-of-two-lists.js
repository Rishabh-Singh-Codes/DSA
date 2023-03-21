// Given two arrays of strings list1 and list2, find the common strings with the least index sum.
// A common string is a string that appeared in both list1 and list2.
// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
// Return all the common strings with the least index sum. Return the answer in any order.

// Link: https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/

//1st soln O(n)

var findRestaurant = function(list1, list2) {
    let res = [];
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < list1.length; i++) {
        ind2 = list2.indexOf(list1[i]);
        if(ind2 > -1){
            if(ind2+i < min) {
                min = (ind2+i);
                res = [];
                res.push(list1[i])
            }
            else if(ind2+i === min) {
                res.push(list1[i]);
            }

        } 
    }

    return res;
};