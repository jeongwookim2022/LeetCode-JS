var matrixScore = function (grid) {
  let rowLength = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] == 0) {
      for (let j = 0; j < rowLength; j++) {
        if (grid[i][j] === 0) grid[i][j] = 1;
        else if (grid[i][j] === 1) grid[i][j] = 0;
      }
    }
  }

  let colZeroNum = 0;
  let zeroCol = [];
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === 0) {
        colZeroNum += 1;
      }
      if (colZeroNum >= Math.ceil(grid.length / 2)) {
        zeroCol.push(i);
        break;
      }
    }

    colZeroNum = 0;
  }

  for (let i = 0; i < grid.length; i++) {
    let curArr = grid[i];
    zeroCol.forEach((num) => {
      if (curArr[num] === 0) curArr[num] = 1;
      else curArr[num] = 0;
    });
  }

  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    let binaryNum = parseInt(grid[i].join(""));
    ans += parseInt(binaryNum, 2);
  }

  return ans;
};
