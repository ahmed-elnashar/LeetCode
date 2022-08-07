function containsDuplicate(nums: number[]): boolean {

  let map = {};
  
  if (nums.length <= 1) return false;
  
  for (let i of nums) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      return true; 
    }
  }
  
  return false;
  
};