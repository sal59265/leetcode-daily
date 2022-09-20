/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const subsets = [];
    subsets.push([]);
    for(i = 0; i <nums.length; i++) {
        const n = subsets.length;
        for(j = 0; j < n; j++) {
        const set1 = subsets[j].slice(0);
        set1.push(nums[i]);
        subsets.push(set1);
        }
    }
    return subsets;
};