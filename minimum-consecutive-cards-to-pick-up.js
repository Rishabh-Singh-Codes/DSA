// You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.
// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

// Link: https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/

//1st soln O(n) w/ help

var minimumCardPickup = function(cards) {
    let map = new Map();
    let min = Infinity;

    cards.forEach((card, i) => {
        if(map.has(card)) {
            min = Math.min(min, i - map.get(card) + 1);
        }

        map.set(card, i);

    });

    return min === Infinity ? -1 : min;
};