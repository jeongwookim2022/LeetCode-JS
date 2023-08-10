var balancedStringSplit = function (s) {
  let lCount = 0;
  let rCount = 0;
  let ans = 0;
  let s = s.split("");
  s.forEach((text, i) => {
    if (text == "R") {
      rCount++;
    } else if (text == "L") {
      lCount++;
    }

    if (rCount == lCount) ans++;
  });

  return ans;
};
