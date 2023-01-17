// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Link: https://leetcode.com/problems/destination-city/description/

//1st soln O(n)

var destCity = function(paths) {
    let map = {};

    for(let i=0; i<paths.length; i++) {
        if(map[paths[i][0]]) map[paths[i][0]] -= 1;
        else map[paths[i][0]] = -1;

        if(map[paths[i][1]]) map[paths[i][1]] += 1;
        else map[paths[i][1]] = 1
    }
    

    let arr = Object.keys(map)
    
    for(dest of arr) {
        if (map[dest] === 1) return dest;
    }

};