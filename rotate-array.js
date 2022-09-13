let reverseArray = function (nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

let rotate = function (nums, k) {
  let len = nums.length;
  k = k % len;
  if (k < 0) {
    k += len;
  }
  reverseArray(nums, 0, len - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, len - 1);
  return nums;
};
