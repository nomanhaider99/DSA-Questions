function singleNumber(nums: number[]): number {
    const counts: Record<string, number> = {};

    for (let x = 0; x < nums.length; x++) {
        if (nums[x] in counts) {
            counts[nums[x]] += 1;
        } else {
            counts[nums[x]] = 1;
        }
    }

    let result = 0;

    for (let count in counts) {
        if (counts[count] == 1) {
            result = Number(count);
        }
    }

    return result;
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));

// check every number if its repeated eliminate
// 