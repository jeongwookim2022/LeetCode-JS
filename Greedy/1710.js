var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let count = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize == 0) return count;
    if (truckSize > 0) {
      truckSize -= boxTypes[i][0];
      count += boxTypes[i][0] * boxTypes[i][1];
    }

    if (truckSize < 0) {
      count -= -1 * truckSize * boxTypes[i][1];
      return count;
    }
  }

  return count;
};
