/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
        let longest = 0;

        for (let num of numsSet) {
            // check if the num is start of a sequence
            if (! numsSet.has(num - 1)) {
                let length = 0;

                while (numsSet.has(num + length)) {
                    length += 1;
                    longest = Math.max(length, longest);
                } 
            }
        }

        return longest;
};