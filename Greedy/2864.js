var maximumOddBinaryNumber = function (s) {
  let zeroArr = [];
  let restArr = [];
  let ans = "1";
  let sArr = s.split("");

  sArr.forEach((num, i) => {
    if (num === "0") zeroArr.push(num);
    else restArr.push(num);
  });

  restArr.sort();
  restArr.splice(0, 1);

  ans += zeroArr.join("");
  ans += restArr.join("");

  return ans.split("").reverse().join("");
};
