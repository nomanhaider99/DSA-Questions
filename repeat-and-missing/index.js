"use strict";
function repeateAndMissing(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    let repeated = nums[0];
    let seen = new Set();
    for (let x = 0; x < nums.length; x++) {
        if (!seen.has(nums[x])) {
            seen.add(nums[x]);
        }
        else {
            result.push(nums[x]);
        }
    }
    return result;
}
console.log(repeateAndMissing([3, 1, 2, 5, 3]));
// sortingg
//  repeated
// missing 
// return
