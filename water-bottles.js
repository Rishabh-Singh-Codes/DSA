// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

// Link: https://leetcode.com/problems/water-bottles/description/

//1st soln O(n) w/ help

var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;
    
    while(numBottles) {
        let curr = Math.floor(numBottles/numExchange);
        if(!curr){
            break;
        }

        res += curr;
        numBottles = curr + numBottles%numExchange;
    }

    return res;
};