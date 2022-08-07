function isAnagram(s: string, t: string): boolean {
  
  if (s.length !== t.length) return false;
  
  const sMap = {};
  const tMap = {};
  
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = !sMap[s[i]] ? sMap[s[i]] = 1 : sMap[s[i]]+=1;
    tMap[t[i]] = !tMap[t[i]] ? tMap[t[i]] = 1 : tMap[t[i]]+=1;
  }
  
  for (let char in tMap) {
    if (tMap[char] !== sMap[char]) return false;
  }
  
  return true;

};