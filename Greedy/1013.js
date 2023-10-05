var canThreePartsEqualSum = function (arr) {
  let totalSum = arr.reduce((sum, curVal) => sum + curVal);

  let targetSum = totalSum / 3;
  let currentSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum == targetSum) {
      count += 1;
      currentSum = 0;
    }
  }

  return count >= 3;
};
