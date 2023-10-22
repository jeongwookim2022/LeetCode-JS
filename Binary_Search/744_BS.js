var nextGreatestLetter = function (letters, target) {
  let mid = 0;
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (left == letters.length) {
    return letters[0];
  } else {
    letters[left];
  }
};
