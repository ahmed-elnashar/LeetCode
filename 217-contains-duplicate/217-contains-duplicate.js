/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const charMap = {};
    let isDuplicate = false;
    
    for (let num of nums) {
        if (!charMap[num]) {
            charMap[num] = 1;
        } else {
            isDuplicate = true
        }
    }
    
    return isDuplicate;
    
};