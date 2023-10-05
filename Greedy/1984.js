/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  let sortedNums = nums.sort((a, b) => a - b);

  if (nums.length == 1) return 0;

  let last = k - 1;
  let diff = Infinity;
  for (let i = 0; last < nums.length; i++) {
    diff = Math.min(diff, sortedNums[last] - sortedNums[i]);
    last += 1;
  }

  return diff;
};
