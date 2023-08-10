var smallestDivisor = function (nums, threshold) {
  let min = 1;
  let max = Math.max(...nums);
  let ans = max;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    let temp = 0;

    for (let num of nums) {
      temp += Math(num / mid);
    }

    if (temp <= threshold) {
      ans = Math.min(ans, mid);

      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return ans;
};
