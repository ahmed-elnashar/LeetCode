/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create a hashMap to store {value: index}
    const map = {};
    // loop over the array
    for (let i = 0; i < nums.length; i++) {
        
        // find the compliment of the current number in the hashMap
        let compliment = target - nums[i];
        
        // if you find it return the current index and the hashMap number index
        if (map[compliment] != undefined) return [map[compliment], i];
        
        // if you didn't find it, add it to the hashMap
        map[nums[i]] = i;
    }
    
};