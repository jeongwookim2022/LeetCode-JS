var minOperations = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i - 1] - nums[i];
    if (diff >= 0) {
      nums[i] += diff + 1;
      count += diff + 1;
    }
  }

  return count;
};
