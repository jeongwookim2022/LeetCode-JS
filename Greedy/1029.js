var twoCitySchedCost = function (costs) {
  let ans = 0;
  let n = costs.length / 2;

  costs.sort((a, b) => {
    let diff1 = a[0] - a[1];
    let diff2 = b[0] - b[1];
    if (diff1 > diff2) {
      return 1;
    } else {
      return -1;
    }
  });

  for (let i = 0; i < n; i++) {
    ans += costs[i][0];
  }
  for (let i = n; i < costs.length; i++) {
    ans += costs[i][1];
  }

  return ans;
};
