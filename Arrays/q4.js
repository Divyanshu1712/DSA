// 4:  Array:  Hashmap Contains Duplicate Easy https://leetcode.com/problems/contains-duplicate/
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:// The element 1 occurs at the indices 0 and 3.
let nums = [1,2,3,1]
function duplicateCheckValue(nums){
    let match = 0
    for(let i=0; i<nums.length;i++){
        match = nums[i]
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] === nums[j]){return true} 
        }
    }
    return false

}
console.log(duplicateCheckValue(nums)); // done


function optimiseduplicateCheckValue(nums){
    let seen = new Set();
    for(let numbers of nums){
        if(seen.has(numbers)){
            return true
        }
        seen.add(numbers)
    }
    return false
}
console.log(optimiseduplicateCheckValue(nums)); //done by chat gpt
