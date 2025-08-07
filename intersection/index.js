"use strict";
function intersection(nums1, nums2) {
    let result = [];
    nums1.forEach((elem1) => {
        if (nums2.includes(elem1)) {
            result.push(elem1);
        }
    });
    return result;
}
;
console.log(intersection([1, 2, 2, 1], [2, 2]));
