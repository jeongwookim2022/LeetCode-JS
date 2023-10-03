var maxProfit = function (prices) {
  const num = prices.length;
  let profitList = [];

  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      if (prices[j] - prices[i] > 0) profitList.push(prices[j] - prices[i]);
    }
  }

  if (profitList.length == 0) return 0;
  else return Math.max(...profitList);
};

//
const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};
