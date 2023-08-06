var getCommon = function (nums1, nums2) {
  const numOneSet = new Set(nums1);

  for (let each of nums2) {
    if (numOneSet.has(each)) return each;
  }

  return -1;
};
