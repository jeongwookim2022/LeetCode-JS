var minMaxDifference = function (num) {
  let strNum = num.toString();
  let maxNum = strNum;
  let minNum = strNum;

  let temp = "";
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] != "9") {
      temp = strNum[i];
      break;
    }
  }
  for (let i = 0; i < strNum.length; i++) {
    if (maxNum[i] == temp) {
      maxNum = maxNum.replace(temp, "9");
    }
  }

  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] != "0") {
      temp = strNum[i];
    }
    break;
  }
  for (let i = 0; i < strNum.length; i++) {
    if (minNum[i] == temp) minNum = minNum.replace(temp, "0");
  }

  for (let i = 0; i < strNum.length; i++) {
    if (minNum[0] == "0") minNum = minNum.replace("0", "");
  }

  if (minNum != "") return parseInt(maxNum) - parseInt(minNum);
  else return parseInt(maxNum);
};
