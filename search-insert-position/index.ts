function searchInsert(nums: number[], target: number): number {
    let index = 0;
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] == target) {
            index = x;
            break;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 == target) {
            index = i + 1
        }
    }

    return index;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([3, 6, 7, 8, 10], 5));


// first find index if it exists and return it
// if not arrange them in order then find index of it.