// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Link: https://leetcode.com/problems/palindrome-linked-list/description/

//1st soln O(n)

var isPalindrome = function(head) {
    let arr = [];

    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(arr[i] !== arr[n-i-1]) {
            return false;
        }
    }

    return true;
};