/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let firstMap = {};
    let secondMap = {};
    
    if (s.length !== t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        firstMap[s[i]] = !firstMap[s[i]] ? firstMap[s[i]] = 1 : firstMap[s[i]]+=1;
        secondMap[t[i]] = !secondMap[t[i]] ? secondMap[t[i]] = 1 : secondMap[t[i]]+=1;
    }
    
    for (let char in firstMap) {
        if (firstMap[char] !== secondMap[char]) return false;
    }
    
    return true;
    
};