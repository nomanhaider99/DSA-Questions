"use strict";
function merge(nums1, m, nums2, n) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let result = [];
    for (let x = 0; x < merged.length; x++) {
        if (merged[x] === 0) {
            continue;
        }
        else {
            result.push(merged[x]);
        }
    }
    if (result.length == m + n) {
        console.log(result);
    }
    else {
        console.log('Length Does not Matched!');
    }
}
;
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
