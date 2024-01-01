var answerQueries = function (nums, queries) {
  let sortedNums = nums.sort((a, b) => a - b);
  let ansArr = [];

  for (let i = 0; i < queries.length; i++) {
    let tempArr = [];
    let tempSum = 0;
    let tempLength = 0;
    for (let j = 0; j < nums.length; j++) {
      tempSum += nums[j];
      tempLength += 1;
      if (tempSum <= queries[i]) {
        tempArr.push(tempLength);
      }
    }
    if (tempArr.length > 0) ansArr.push(Math.max(...tempArr));
    else ansArr.push(0);
  }

  return ansArr;
};
