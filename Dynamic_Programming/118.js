var generate = function (numRows) {
  let ansList = [];
  ansList.push([[1]]);

  for (let i = 1; i < numRows; i++) {
    let newArr = [1];

    for (let j = 1; j < i; j++) {
      console.log("?");
      newArr.push(ansList[i - 1][j - 1] + ansList[i - 1][j]);
    }

    newArr.push(1);
    ansList.push(newArr);
  }

  return ansList;
};
