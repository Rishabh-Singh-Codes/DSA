// You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].
// The following are the types of poker hands you can make from best to worst:
// "Flush": Five cards of the same suit.
// "Three of a Kind": Three cards of the same rank.
// "Pair": Two cards of the same rank.
// "High Card": Any single card.
// Return a string representing the best type of poker hand you can make with the given cards.
// Note that the return values are case-sensitive.

// Link: https://leetcode.com/problems/best-poker-hand/description/

//1st soln O(n)

var bestHand = function(ranks, suits) {
    let suitsMap = {};
    let ranksMap = {};

    for(let i = 0; i < ranks.length; i++){
        if(suitsMap[suits[i]]){
            suitsMap[suits[i]] += 1;
        } else {
            suitsMap[suits[i]] = 1;
        }

        if(ranksMap[ranks[i]]) {
            ranksMap[ranks[i]] += 1;
        } else {
            ranksMap[ranks[i]] = 1;
        }
    }

    for(let suit in suitsMap) {
        if(suitsMap[suit] === 5) {
            return "Flush";
        }
    }

    let rankOrder = Object.values(ranksMap).sort((a, b) => b - a);

    for(let r of rankOrder){
        if(r === 3 || r === 4) {
            return "Three of a Kind";
        }
        if(r === 2) {
            return "Pair";
        }
        if(r === 1) {
            return  "High Card";
        }
    }
};