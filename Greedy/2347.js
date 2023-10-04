var bestHand = function (ranks, suits) {
  let count = 0;

  for (let i = 1; i < suits.length; i++) {
    if (suits[i] == suits[i - 1]) count += 1;
  }
  if (count == 4) return "Flush";

  let map = new Map();
  for (let i of ranks) {
    if (map.has(i)) map.set(i, map.get(i) + 1);
    else map.set(i, 1);
  }

  let tempArr = [...map].sort((a, b) => b[1] - a[1]);
  console.log("SORTED:", tempArr);
  for (let el of tempArr) {
    if (el[1] >= 3) return "Three of a Kind";
    if (el[1] == 2) return "Pair";
  }
  // OR
  //  const el = tempArr[0];
  //  if (el[1] >= 3) return "Three of a Kind";
  //  if (el[1] == 2) return "Pair";

  return "High Card";
};
