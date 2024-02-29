// You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)
// Return the minimum number of operations to reduce the sum of nums by at least half.

// Link: https://leetcode.com/problems/minimum-operations-to-halve-array-sum/description/

//1st try O(n^2) [TLE]

var halveArray = function(nums) {
    let sum = (arr) => arr.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);

    let ogSum = sum(nums);
    let res = 0;

    while(sum(nums) > ogSum/2) {
        nums.sort((a, b) => b - a);
        nums[0] /= 2;
        res++;
    }

    return res;
};


//2nd try O(n^2) [TLE] w/ help

var halveArray = function(nums) {
    let res = 0;

    nums.sort((a, b) => a - b);

    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    let currSum = sum;

    while(currSum * 2 > sum) {
        res++;
        const largestNum = nums.pop();
        const halfVal = largestNum/2;

        currSum -= halfVal;

        if(nums.length === 0) {
            nums.push(halfVal);
        } else if(halfVal >= nums[nums.length - 1]) {
            nums.push(halfVal);
        } else if(halfVal <= nums[0]) {
            nums.unshift(halfVal);
        } else {
            let left = 0;
            let right = nums.length;

            while(left <= right) {
                const arrLen = right - left;
                const midIdx = left + Math.floor(arrLen / 2);

                const val = nums[midIdx];

                if(val === halfVal) {
                    left = midIdx;
                    right = midIdx;
                    break;
                }

                if(halfVal > val) {
                    left = midIdx + 1;
                } else {
                    right = midIdx - 1;
                }
            }

            nums.splice(left, 0, halfVal);
        }
    }

    return res;
};


// 1st Soln O(nlogn) w/ help

var halveArray = function(nums) {
    let mPQ = new MaxPriorityQueue();

    nums.forEach(num => mPQ.enqueue(num));

    let sum = nums.reduce((acc, curr) => acc + curr, 0);

    let halfSum = sum/2;
    let res = 0;

    while(sum > halfSum) {
        res++;
        let maxEle = mPQ.dequeue();
        let halfEle = maxEle.element / 2;
        sum -= halfEle;
        mPQ.enqueue(halfEle);
    }

    return res;
};