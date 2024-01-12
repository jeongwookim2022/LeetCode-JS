var numberOfArithmeticSlices = function (nums) {
  let count = 0;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    const diff1 = nums[i] - nums[i - 1];
    const diff2 = nums[i - 1] - nums[i - 2];

    if (diff1 == diff2) {
      count += 1;
      ans += count;
    } else {
      count = 0;
    }
  }

  return ans;
};
