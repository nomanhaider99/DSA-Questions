function intersection(nums1: number[], nums2: number[]): number[] {
    let result: number[] = [];

    nums1.forEach((elem1) => {
        if (nums2.includes(elem1)) {
            result.push(elem1);
        }
    })

    return result;
};

console.log(intersection([1,2,2,1], [2,2]));