var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a);
  const sum = nums.reduce((a, b) => a + b, 0);
  let temp = 0;
  let ans = [];

  for (let num of nums) {
    temp += num;
    ans.push(num);

    if (temp > sum - temp) return ans;
  }
};

// 1
1
// 2
1 1
2
// 3
1 1 1
1 2
2 1
3

