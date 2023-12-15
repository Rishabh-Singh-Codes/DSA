// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

// Link: https://leetcode.com/problems/interval-cancellation/description/

//1st soln O(n)

var cancellable = function(fn, args, t) {
    fn(...args);
    
    const cancelFn = () => {
        clearInterval(timer);
    }

    const timer = setInterval(() => {
        fn(...args);
    }, t);

    return cancelFn;
};