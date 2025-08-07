function missingNumber(nums: number[]): number {    
    nums.sort((a,b) => a-b);
    let result = 0;

    let considerd = nums[0];
    for (let x = 1; x <= nums.length; x++) {
        if (considerd+1 !== nums[x]) {
            result = considerd+1;
            break;
        } else {
            considerd = nums[x];
        }
    }

    return result;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// sort elems in ascending order
// run loop from 0th to length of arr