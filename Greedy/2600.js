var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let ans = 0;

  if (k - numOnes > 0) {
    k -= numOnes;
    ans += numOnes;
  } else if (k - numOnes <= 0) return k;

  if (k - numZeros > 0) {
    k -= numZeros;
  } else if (k - numZeros <= 0) return ans;

  return ans - k;
};
