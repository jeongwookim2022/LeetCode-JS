var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  const ansList = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] !== 1) {
      ansList[i][0] = 1;
    }
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] !== 1) {
      ansList[0][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] != 1) {
        ansList[i][j] = ansList[i - 1][j] + ansList[i][j - 1];
      }
    }
  }

  return ansList[m - 1][n - 1];
};
