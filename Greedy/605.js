var canPlaceFlowers = function (flowerbed, n) {
  let first = flowerbed[0];
  let last = flowerbed.length - 1;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed.length == 1 && first == 0) return true;

    if (i == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
      flowerbed[i] = 1;
      n -= 1;
    } else if (
      i != last &&
      flowerbed[i - 1] == 0 &&
      flowerbed[i] == 0 &&
      flowerbed[i + 1] == 0
    ) {
      flowerbed[i] = 1;
      n -= 1;
    } else if (i == last && flowerbed[last - 1] == 0 && flowerbed[last] == 0) {
      n -= 1;
    }
  }

  if (n <= 0) return true;
  else return false;
};
