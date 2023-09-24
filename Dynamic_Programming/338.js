var countBits = function (n) {
  let ans = [0, 1, 1];
  for (let i = 3; i < n + 1; i++) {
    if (i % 2 == 0) ans.push(ans[i / 2]);
    else ans.push(ans[i - 1] + 1);
  }

  return ans.slice(0, n + 1);
};
