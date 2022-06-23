/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let firstMap = {};
    let secondMap = {};
    
    if (s.length !== t.length) return false;
    
    for (let char of s) {
        firstMap[char] = !firstMap[char] ? firstMap[char] = 1 : firstMap[char]+=1;
    }
    
    for (let char of t) {
        secondMap[char] = !secondMap[char] ? secondMap[char] = 1 : secondMap[char]+=1;
    }
    
    for (let char in firstMap) {
        if (firstMap[char] !== secondMap[char]) return false;
    }
    
    return true;
    
};