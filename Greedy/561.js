var arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let leng = nums.length;
  let total = 0;

  for (let i = 0; i <= leng - 2; i += 2) {
    total += nums[i];
  }

  return total;
};
