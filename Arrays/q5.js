// 5:  Array:  Kadane's Algorithm Maximum Subarray Easy https://leetcode.com/problems/maximum-subarray/
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.


// let nums = [-2,1,-3,4,-1,2,1,-5,4]

// function scer(nums) {
//     let maxSum = nums[0]
//     let cuSum = nums[0]
//     for (let i in nums) {
//         cuSum += nums[i]
//         maxSum = Math.max(cuSum, maxSum)
//         if (cuSum < 0) {
//             cuSum = 0
//         }
//     }
//     return maxSum
// }
// console.log(scer(nums))


// function largestSum(nums) {
//     // subarray: contignous pairs of array in it like:[1,-3,4] but not [4,-1, , , ,4], 
//     let res = nums[0]
//     let currSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             currSum += nums[j]
//             res = Math.max(res, currSum)
//             // console.log([res, currSum]);

//         }

//     }
//     return res
// }
// console.log(largestSum(nums))

// optmised code is here
let nums = [-1,1]

var maxSubArray = function (nums) {
    if (nums.length === 0) return [0]
    let maxSum = nums[0]
    let cuSum = nums[0]

    for (let i = 1; i < nums.length; i++) {

        cuSum = Math.max(nums[i], nums[i] + cuSum)
        maxSum = Math.max(cuSum, maxSum)
        if (cuSum < 0) cuSum = 0
    }

    return maxSum
};
console.log(maxSubArray(nums))