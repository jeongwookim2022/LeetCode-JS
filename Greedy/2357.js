var minimumOperations = function (nums) {
  nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (currentNum > 0) {
      count += 1;

      for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) {
          let temp = nums[j] - currentNum;
          if (temp <= 0) temp = 0;

          nums[j] = temp;
        }
      }

      console.log(nums);
      if (new Set(nums).size == 1 && nums[0] == 0) return count;
    }
  }

  return count;
};
