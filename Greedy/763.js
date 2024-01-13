var partitionLabels = function (s) {
  let lastPosition = {};
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    lastPosition[s[i]] = i;
  }

  console.log(lastPosition);
  let first = 0;
  let last = 0;
  for (let i = 0; i < s.length; i++) {
    last = Math.max(last, lastPosition[s[i]]);
    console.log(last);

    if (i === last) {
      ans.push(last - first + 1);
      first = i + 1;
    }
  }

  return ans;
};
