var maxCoins = function (piles) {
  let sortedPiles = piles.sort((a, b) => a - b);
  let n = piles.length / 3;
  let temp = [];

  console.log(sortedPiles);
  // for(let i = 0; i<n; i++) {
  //   temp.push(sortedPiles.splice(sortedPiles.length-1, 1))
  //   temp.push(sortedPiles.splice(sortedPiles.length-1, 1))
  // }

  let count = 0;
  for (let i = piles.length - 2; count < n; i -= 2) {
    temp.push(sortedPiles[i]);
    count += 1;
  }

  return temp.reduce((acc, cur) => acc + cur);
};
