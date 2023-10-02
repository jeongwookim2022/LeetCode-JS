var maxProfit = function (prices, fee) {
  let totalProfit = 0;
  let count = 0;

  let current_index = 0;
  for (let i = current_index; i < prices.length; i++) {
    let eachProfit = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - (prices[i] + fee) >= 0) {
        eachProfit = prices[j] - prices[i];
      }
      current_index = j + 1;
    }
    totalProfit += eachProfit;
    count += 1;

    console.log("TOTAL:", totalProfit, "COUNT:", count);
  }

  return totalProfit - fee * count;
};

var maxProfit = function (P, F) {
  let len = P.length,
    buying = 0,
    selling = -P[0];
  for (let i = 1; i < len; i++) {
    buying = Math.max(buying, selling + P[i] - F);
    selling = Math.max(selling, buying - P[i]);

    console.log("BUY:", buying, "SELL:", selling);
  }
  return buying;
};
