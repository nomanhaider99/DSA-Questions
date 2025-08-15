function combinationSum(candidates: number[], target: number): number[][] {
    let combinations: number[][] = [];
    for (let x = 0; x < candidates.length; x++) {
        let sum = 0;
        for (let y = candidates.length; y >= 0; y--) {
            let combination = candidates.slice(x, y)
            combination.forEach((num) => sum += num);
            if (sum == target) {
                combinations.push(combination);
            }
        }
    }
    return combinations;
};

console.log(combinationSum([2,3,6,7], 7));

// delete every char +1 from end and then checks sum