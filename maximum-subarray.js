/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    max = Math.max(nums[i], max);
  }
  return max;
};
