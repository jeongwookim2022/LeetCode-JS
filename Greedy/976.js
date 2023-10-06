var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);

  let third = 2;
  let maxLength = 0;
  for (let i = 0; third < nums.length; i++) {
    if (nums[i] + nums[i + 1] > nums[third]) {
      maxLength = Math.max(maxLength, nums[i] + nums[i + 1] + nums[third]);
    }

    third += 1;
  }

  return maxLength;
};
