var uniquePaths = function (m, n) {
  const ansList = Array.from(Array(m), () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      ansList[i][j] = ansList[i - 1][j] + ansList[i][j - 1];
    }
  }
  return ansList[m - 1][n - 1];
};
