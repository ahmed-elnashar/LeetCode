function groupAnagrams(strs: string[]): string[][] {
  let result: string[][] = [];
  const map = {};
  if (strs.length === 1) return [strs];
  
  let sorted;
  
  for (let str of strs) {
    sorted = str.split('').sort().join('');
    
    if (!map[sorted]) {
      map[sorted] = [];
    }
    
    if (map[sorted]) {
      map[sorted].push(str);
    }
  }

  for (let key in map) {
    result.push(map[key]);
  }
  
  return result;
};
