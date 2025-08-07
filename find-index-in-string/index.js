"use strict";
function strStr(haystack, needle) {
    let indices = [];
    for (let x = 0; x < haystack.length; x++) {
        for (let y = haystack.length; y > 0; y--) {
            if (haystack.slice(x, y) == needle) {
                indices.push(x);
            }
        }
    }
    if (indices.length)
        return indices[0];
    return -1;
}
;
console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
