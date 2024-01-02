var distMoney = function (money, children) {
  let ans = 0;

  if (money / children < 1) return -1;
  if (money < 8) return 0;

  let distOne = money - children;
  for (let i = 0; i < children; i++) {
    if (distOne >= 7) {
      ans += 1;
      distOne -= 7;
    }
  }

  if (distOne == 3 && children - ans == 1) return ans - 1;
  else if (distOne != 0 && children == ans) return ans - 1;
  else return ans;
};
