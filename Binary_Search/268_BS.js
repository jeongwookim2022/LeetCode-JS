var missingNumber = function (nums) {
  let total = 0;
  for (let i = 0; i <= nums.length; i++) {
    total += i;
  }

  nums.forEach((num, i) => {
    total -= num;
  });

  return total;
};
