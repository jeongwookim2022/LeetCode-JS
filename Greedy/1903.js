var largestOddNumber = function (num) {
  const numInt = parseInt(num);

  if (num[num.length - 1] % 2 == 1) return num;
  else {
    for (let i = num.length - 1; i >= 0; i--) {
      console.log(i);
      let check = parseInt(num[i]);
      if (check % 2 == 1) {
        return num.substr(0, i + 1);
      }
    }
  }

  return "";
};
