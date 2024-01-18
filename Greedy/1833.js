var maxIceCream = function (costs, coins) {
  let ans = 0;

  costs.sort((a, b) => a - b);
  costs.forEach((price, i) => {
    if (coins - price >= 0) {
      coins -= price;
      ans += 1;
    }
  });

  return ans;
};
