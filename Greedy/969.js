var pancakeSort = function (arr) {
  let ans = [];
  let end = arr.length;

  while (end > 1) {
    let maxIndex = arr.indexOf(Math.max(...arr.slice(0, end)));

    if (maxIndex !== end - 1) {
      if (maxIndex != 0) {
        arr.splice(0, maxIndex + 1, ...arr.slice(0, maxIndex + 1).reverse());
        ans.push(maxIndex + 1);
      }
      arr.splice(0, end, ...arr.slice(0, end).reverse());
      ans.push(end);
    }

    end -= 1;
  }

  return ans;
};

// [3,2,4,1]

// [4,2,3,1] [3]
// [1,3,2,4] [4]
// [3,1,2,4] [2]
// [2,1,3,4] [3]
// [1,2,3,4] [2]
