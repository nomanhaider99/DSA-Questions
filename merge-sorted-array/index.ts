function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let merged = nums1.concat(nums2).sort((a,b) => a-b);
    let result: number[] = [];
    for (let x = 0; x < merged.length; x++) {
        if (merged[x] === 0) {
            continue;
        } else {
            result.push(merged[x]);
        }
    }

    if (result.length == m+n) {
        console.log(result);
    } else {
        console.log('Length Does not Matched!');
    }
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);
merge([0], 0, [1], 1);