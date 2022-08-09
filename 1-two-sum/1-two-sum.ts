function twoSum(nums: number[], target: number): number[] {
  
  // {value: index}
  let map = {};
  
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    
    // if you find it, return the current index `i` and the stored compliment index `map[compliment]`
    if (map[compliment] !== undefined) return [map[compliment], i];
  
    // if you didn't find it, store it {value: index}
    map[nums[i]] = i;
  }
  
};