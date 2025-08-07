"use strict";
function subsets(nums) {
    let result = [[]];
    for (let x = 0; x < nums.length; x++) {
        for (let y = nums.length; y > 0; y--) {
            result.push(nums.slice(x, y));
        }
    }
    return result;
}
;
console.log(subsets([1, 2, 3]));
// initial emtpy everytime
// add all then decreasing order 
