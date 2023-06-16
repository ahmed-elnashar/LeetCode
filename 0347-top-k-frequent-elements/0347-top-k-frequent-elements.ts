function topKFrequent(nums: number[], k: number): number[] {
    const count = {};
    const freq: number[][] = Array.apply(null, Array(nums.length + 1)).map(
        () => []
    );
    for (let num of nums) {
        count[num] = !count[num] ? count[num] = 1 : count[num] += 1;
    }

    for (let c in count) {
        freq[count[c]].push(Number(c));
    }

    const result = [];
    for (let i = freq.length - 1; i >= 0; i--) {
        for (let n of freq[i]) {
            result.push(n);
            if (result.length === k) return result;
        }
    }
};