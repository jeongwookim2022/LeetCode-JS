var maximum69Number = function (num) {
  const str = String(num);
  console.log(str);
  const strArr = Array.from(str);
  console.log(strArr);

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "6") {
      strArr[i] = "9";
      i = strArr.length;
    }
  }

  let newNum = "";
  for (let i = 0; i < strArr.length; i++) {
    newNum += strArr[i];
  }

  return parseInt(newNum);
};
