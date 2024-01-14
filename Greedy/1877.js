var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let length = nums.length;
  let ans = [];
  for (let i = 0, last = length - 1; i < length / 2; i++) {
    ans.push(nums[i] + nums[last]);
    last -= 1;
  }

  console.log(ans);
  return Math.max(...ans);
};
