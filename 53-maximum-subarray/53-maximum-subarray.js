/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)

var maxSubArray = (nums) => {
    
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
};

// O(n^2)
// var maxSubArray = (nums) => {
    
//     let maxSubarraySum = nums[0];
    
//     for (let left = 0; left < nums.length; left++) {
        
//         let currentWindowSum = 0;
        
//         for (let right = left; right < nums.length; right++) {
            
//             currentWindowSum += nums[right];
            
//             maxSubarraySum = Math.max(currentWindowSum, maxSubarraySum);
//         }
//     }
    
//     return maxSubarraySum;
// };