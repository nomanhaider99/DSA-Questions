"use strict";
function isPrime(n) {
    const primes = [];
    for (let x = 2; x <= n; x++) {
        let isPrime = true;
        for (let y = 2; y <= Math.sqrt(x); y++) {
            if (x % y == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            primes.push(x);
    }
    return primes;
}
// console.log(isPrime(17));
function twoSum(arr, target) {
    const result = [];
    arr.sort((a, b) => a - b);
    for (let x = 0; x < arr.length; x++) {
        for (let y = arr.length; y >= 0; y--) {
            if (x !== y) {
                if ((arr[x] + arr[y]) == target) {
                    result.push([arr[x], arr[y]]);
                }
            }
        }
    }
    let finalOutput = [];
    let assumed = result[0];
    for (let item of result) {
        const sorted = item.sort((a, b) => a - b);
        if (assumed != sorted) {
            finalOutput.push(sorted);
        }
        continue;
    }
    return finalOutput;
}
// console.log(twoSum([16, 4, 23, 8, 15, 42, 1, 2], 19));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
function frequncyOfEachChar(str) {
    let frequency = {};
    for (let x = 0; x < str.length; x++) {
        if (str[x] in frequency) {
            frequency[str[x]] += 1;
            continue;
        }
        frequency[str[x]] = 1;
    }
    return frequency;
}
// console.log(frequncyOfEachChar('hello world'))
function KadaneAlgorithm(arr) {
    let allSums = [];
    for (let x = 0; x < arr.length - 1; x++) {
        let sum = 0;
        for (let y = arr.length; y > 0; y--) {
            let sliced = arr.slice(x, y);
            console.log(sliced);
            if (x !== y) {
                sliced.forEach(val => sum += val);
                allSums.push(sum);
            }
        }
    }
    return allSums.sort((a, b) => b - a)[0];
}
// console.log(KadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
function rotateAtK(nums, k) {
    const firstHalf = nums.slice(0, k + 1);
    const secondHalf = nums.slice(k + 1);
    const result = [];
    secondHalf.forEach((val) => result.push(val));
    firstHalf.forEach((val) => result.push(val));
    return result;
}
// console.log(rotateAtK([1, 2, 3, 4, 5], 2));
function checkPowerTwo(n) {
    let result = false;
    for (let x = 1; x <= n; x++) {
        if (x ** 2 == n) {
            console.log(x ** 2);
            result = true;
        }
    }
    return result;
}
// console.log(checkPowerTwo(16))
// console.log(checkPowerTwo(18))
function longestPalindrome(str) {
    let result = [];
    for (let x = 0; x < str.length; x++) {
        for (let y = str.length; y >= 0; y--) {
            let selected = str.slice(x, y);
            let reversed = str.slice(x, y).split('').reverse().join('');
            if (selected == reversed) {
                result.push(selected);
            }
        }
    }
    let longest = result[0];
    for (let item of result) {
        if (item.length > longest.length) {
            longest = item;
        }
    }
    return longest;
}
// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
function groupAnagrams(strs) {
    const result = [];
    const seen = new Set();
    for (let x = 0; x < strs.length; x++) {
        let chunk = strs[x].split('').sort().join('');
        let toBePushed = [];
        for (let y = 0; y < strs.length; y++) {
            let current = strs[y].split('').sort().join('');
            if (chunk == current) {
                toBePushed.push(strs[y]);
            }
        }
        let key = toBePushed.join(',');
        if (!seen.has(key)) {
            seen.add(key);
            result.push(toBePushed);
        }
    }
    return result;
}
;
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["a"]));
function partition(s) {
    let result = [];
    for (let x = 0; x < s.length; x++) {
        let pairs = [];
        for (let y = s.length; y >= 0; y--) {
            const sliced = s.slice(x, y);
            const reversed = sliced.split('').reverse().join('');
            if (reversed == sliced && reversed !== '') {
                pairs.push(sliced);
            }
        }
        result.push(pairs);
    }
    return result;
}
;
// console.log(partition('aab'))
function perfectSquare(n) {
    let output = 0;
    let left = 0;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        if (square == n) {
            output = mid;
            break;
        }
        else if (square < n) {
            left = mid + 1;
        }
        else if (square > n) {
            right = mid - 1;
        }
    }
    return output;
}
// console.log(perfectSquare(16))
function majorityElement(nums) {
    let frequency = {};
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] in frequency) {
            frequency[nums[x]] += 1;
        }
        else {
            frequency[nums[x]] = 1;
        }
    }
    let output = 0;
    for (let item in frequency) {
        if (frequency[item] > Math.floor(nums.length / 2)) {
            output = Number(item);
        }
    }
    return output;
}
// console.log(majorityElement([2, 2, 1, 3, 1, 2, 2]));
function topKFrequentElements(nums, k) {
    const frequency = {};
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] in frequency) {
            frequency[nums[x]] += 1;
        }
        else {
            frequency[nums[x]] = 1;
        }
    }
    let output = [];
    for (let x = 1; x <= k; x++) {
        output.push(frequency[x]);
    }
    return output;
}
console.log(topKFrequentElements([2, 2, 2, 1, 1, 3], 2));
