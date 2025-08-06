"use strict";
function kthSmallest(nums, k) {
    nums.sort((a, b) => a - b);
    return nums[k - 1];
}
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(kthSmallest([2, 3, 1, 20, 15], 4));
