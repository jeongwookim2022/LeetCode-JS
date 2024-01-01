var splitNum = function (num) {
  let splitNumArr = num
    .toString()
    .split("")
    .map(Number)
    .sort((a, b) => {
      return a - b;
    });
  let splitStrArr = splitNumArr.map(String);

  let firstSum = "";
  let secondSum = "";
  //
  console.log("BEFORE PROCESS SPlitSTRARR:", splitStrArr);
  let countZero = 0;
  for (let i = 0; i < splitStrArr.length; i++) {
    if (splitStrArr[i] == "0") countZero += 1;
  }
  splitStrArr.splice(0, countZero);
  console.log("AFTER PROCESS SPlitSTRARR:", splitStrArr);
  //

  for (let i = 0; i < splitStrArr.length; i++) {
    if (i % 2 == 0) firstSum += splitStrArr[i];
    else secondSum += splitStrArr[i];
  }
  firstSum = firstSum.split("");
  secondSum = secondSum.split("");

  for (let i = 0; i < secondSum.length; i++) {
    if (secondSum[0] == "0" && secondSum[i] != "0") {
      let temp = secondSum[i];
      secondSum.splice(i, 1, "0");
      secondSum.splice(0, 1, temp);
    }
  }
  for (let i = 0; i < firstSum.length; i++) {
    if (firstSum[0] == "0" && firstSum[i] != "0") {
      let temp = firstSum[i];
      firstSum.splice(i, 1, "0");
      firstSum.splice(0, 1, temp);
    }
  }

  firstSum = parseInt(firstSum.join(""));
  secondSum = parseInt(secondSum.join(""));

  if (isNaN(firstSum) == false && isNaN(secondSum) == false)
    return firstSum + secondSum;
  else if (isNaN(firstSum) && isNaN(secondSum) == false) return secondSum;
  else if (isNaN(firstSum) == false && isNaN(secondSum)) return firstSum;
};
