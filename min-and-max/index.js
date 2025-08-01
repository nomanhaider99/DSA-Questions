"use strict";
function findMinandMax(nums) {
    nums = nums.sort((a, b) => a - b);
    return {
        min: nums[0],
        max: nums[nums.length - 1]
    };
}
console.log(findMinandMax([3, 5, 4, 1, 9]));
