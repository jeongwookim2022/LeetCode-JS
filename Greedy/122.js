var maxProfit = function (prices) {
  let profit = 0;
  let next = 1;

  for (let i = 0; i < prices.length; i++) {
    let diff = prices[next] - prices[i];
    if (diff > 0) profit += diff;
    next += 1;
  }
  return profit;
};
