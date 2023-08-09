// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// The most significant bit is at the head of the linked list.

// Link: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

//1st soln O(n)

var getDecimalValue = function(head) {
    let nums = [];

    while(head) {
        nums.push(head.val);
        head = head.next;
    }

    let num = 0;
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        num += nums[i] * Math.pow(2, len - i -1);
    }

    return num;
};