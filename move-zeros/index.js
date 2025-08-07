"use strict";
function moveZeroes(nums) {
    for (let x = nums.length - 1; x >= 0; x--) {
        if (nums[x] == 0) {
            let remained = nums.splice(x, 1);
            nums.push(remained[0]);
        }
    }
}
;
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
moveZeroes([0, 0, 1]);
