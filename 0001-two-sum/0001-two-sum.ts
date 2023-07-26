function twoSum(nums: number[], target: number): number[] {
    let numsHash = {}; // val: index

    for (let i = 0; i <= nums.length; i++) {
        let diff = target - nums[i];
        if (numsHash[diff] !== undefined) return [numsHash[diff], i];
        numsHash[nums[i]] = i;
    }
};