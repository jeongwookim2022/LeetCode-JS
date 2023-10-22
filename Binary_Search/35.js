var searchInsert = function (nums, target) {
  if (nums.includes(target) === false) {
    nums.push(target);
    console.log(nums);
    nums.sort((a, b) => a - b);
  }

  let mid = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
