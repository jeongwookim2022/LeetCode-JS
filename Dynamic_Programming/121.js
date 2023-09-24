var maxProfit = function (prices) {
  let maxProfit = 0;
  let buy = prices[0];
  const num = prices.length;

  for (let i = 0; i < num; i++) {
    let currentPrice = prices[i];

    if (currentPrice - buy > maxProfit) {
      maxProfit = currentPrice - buy;
    }
    if (currentPrice < buy) {
      buy = currentPrice;
    }
  }
  return maxProfit;
};
