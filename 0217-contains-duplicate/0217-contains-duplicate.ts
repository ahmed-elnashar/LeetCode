function containsDuplicate(nums: number[]): boolean {
    let numMap = {};
    for (let num of nums) {
        numMap[num] = !numMap[num] ? numMap[num] = 1 : numMap[num] += 1;
        if (numMap[num] > 1) return true;
    }
    return false;
};