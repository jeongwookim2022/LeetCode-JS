var minimumCost = function (cost) {
  const newCost = cost.sort((a, b) => a - b);
  let total = 0;

  // [1,2,3,4,5,6]
  if (cost.length >= 3) {
    for (let i = cost.length - 1; i >= 2; i -= 3) {
      total += cost[i] + cost[i - 1];
    }
  } else {
    for (let i = 0; i < cost.length; i++) {
      total += cost[i];
    }
    return total;
  }

  const rest = cost.length % 3;
  if (rest == 0) return total;
  else {
    for (let i = 0; i < rest; i++) {
      total += cost[i];
    }
    return total;
  }
};
