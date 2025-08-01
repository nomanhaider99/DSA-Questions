function productExceptSelf(nums: number[]): number[] {
    let result: number[] = [];
    
    for (let x = 0; x < nums.length; x++) {
        let sum = 1;
        let remaining = nums.filter((value, index) => index !== x); 
        for (let y = 0; y < remaining.length; y++) {
            sum = sum*remaining[y];
        }
        result.push(sum);
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([0,0]));