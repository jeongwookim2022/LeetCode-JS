var targetIndices = function (nums, target) {
  const newNums = nums.sort((a, b) => a - b);
  let ansArr = [];

  newNums.forEach((num, i) => {
    if (num == target) {
      ansArr.push(i);
    }
  });

  return ansArr;
};
