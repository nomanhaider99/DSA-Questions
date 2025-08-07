function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a-b);
    let obj: any = {};

    for (let num of nums) {
        if (num in obj) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }

    let highest = -Infinity
    let highestOrdered: number[] = [];
    for (let element in obj) {
        if (obj[element] >= highest) {
            highest = Number(element);
        }
    }

    highestOrdered.sort((a,b) => b-a);

    
    console.log("object: ", obj)

    if (highest > nums.length/2) {
        return highest;
    } else {
        return 0;
    }

};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
console.log(majorityElement([-1,1,1,1,2,1]));