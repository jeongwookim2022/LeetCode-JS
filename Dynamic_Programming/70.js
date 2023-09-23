var climbStairs = function (n) {
  let ansList = [];
  ansList[0] = 1;
  ansList[1] = 1;

  if (n < 2) return ansList[n];

  for (let i = 2; i < n + 1; i++) {
    ansList[i] = ansList[i - 2] + ansList[i - 1];
  }
  return ansList[n];
};
