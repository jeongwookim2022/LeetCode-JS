var maximizeSum = function (nums, k) {
  let sortNums = nums.sort((a, b) => a - b);
  let lastNum = sortNums[sortNums.length - 1];
  let ans = 0;

  for (let i = 0; i < k; i++) {
    ans += lastNum;
    lastNum += 1;
  }

  return ans;
};
