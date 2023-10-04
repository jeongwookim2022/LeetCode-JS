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

// ANOTHER SOLUTION

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minPrice > 0) {
      profit += prices[i] - minPrice;
      if (i < prices.length) minPrice = prices[i];
    } else minPrice = prices[i];
  }

  return profit;
};
