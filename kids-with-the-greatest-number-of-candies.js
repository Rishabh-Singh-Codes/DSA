// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

// Link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

//1st soln O(n)

var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let largestNo = 0;

    for(let i=0;i<candies.length;i++) {
        if(candies[i]>largestNo) largestNo = candies[i];
    }

    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies >= largestNo) result[i] = true;
        else result[i] = false;
    }
    
    return result;
};