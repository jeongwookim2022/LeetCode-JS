var lemonadeChange = function (bills) {
  moneyArr = [0, 0, 0];
  total = 0;
  bills.forEach((bill, i) => {
    if (i == 0 && bill > 5) {
      return false;
    } else {
      if (bill == 5) {
        moneyArr[0] += 1;
      } else if (bill == 10) {
        if (moneyArr[0] <= 0) return false;
        else {
          moneyArr[0] -= 1;
          moneyArr[1] += 1;
        }
      } else {
        if (moneyArr[0] < 3 && moneyArr[1] < 1) return false;
        else moneyArr[2] += 1;
      }
    }
  });
  console.log(moneyArr);
  return true;
};
