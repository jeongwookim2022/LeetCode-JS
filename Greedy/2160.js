var minimumSum = function (num) {
  const numStr = String(num);

  let tempArr = [];
  for (let i = 0; i < numStr.length; i++) {
    tempArr.push(Number(numStr[i]));
  }
  tempArr.sort((a, b) => a - b);

  let first = "";
  let second = "";
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] == 0) {
      tempArr.splice(i, 1);
      i -= 1;
    } else {
      if (i % 2 == 0) first += String(tempArr[i]);
      else if (i % 2 == 1) second += String(tempArr[i]);
    }
  }

  return Number(first) + Number(second);
};
