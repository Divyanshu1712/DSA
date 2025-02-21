// 1:  Array:  Hashmap Two Sum Easy :  https://leetcode.com/problems/two-sum/
let zrr = [3,2,4]
let target = 6

Input: nums = [2,7,11,15], target = 9
Output: [0,1]

// brute force method 
function twoSum(zrr, traget){
    let sum;
    for (let i=0;i<zrr.length;i++){
        // console.log(zrr[i]);
        for(let j=i+1;j<zrr.length-1;j++){
            if(zrr[i] + zrr[j] == target){return [i,j]}
        }
        
    }
    return []
}
console.log(twoSum(zrr, target))

