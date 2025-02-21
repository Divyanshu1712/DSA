// 3:  Array:  Two-pointer Two Sum II (sorted input) Easy https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
let numbers = [2, 7, 11, 15], target = 9

function twoSum2(numbers, target) {
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] ==+ target){
                return [i+1,j+1]
            }
        }
    }s
}

console.log(twoSum2(numbers, target));
