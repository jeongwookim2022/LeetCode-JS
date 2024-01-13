var maxIncreaseKeepingSkyline = function (grid) {
  // let grid = [
  //   [3, 0, 8, 4],
  //   [2, 4, 5, 7],
  //   [9, 2, 6, 3],
  //   [0, 3, 1, 0],
  // ];

  let ans = 0;
  let girdLength = grid.length;
  let rowMax = new Array(grid.length).fill(0);
  let colMax = new Array(grid.length).fill(0);

  for (let i = 0; i < girdLength; i++) {
    for (let j = 0; j < girdLength; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[i] = Math.max(colMax[i], grid[j][i]);
    }
  }
  console.log("row:", rowMax, "col:", colMax);

  let emptyArr = new Array(girdLength).fill(0).map(() => new Array(girdLength));

  for (let i = 0; i < girdLength; i++) {
    for (let j = 0; j < girdLength; j++) {
      ans += Math.min(rowMax[i], colMax[j]) - grid[i][j];
      // emptyArr[i][j] = Math.min(rowMax[i], colMax[j]);
    }
  }

  return ans;
  // return emptyArr;
};
