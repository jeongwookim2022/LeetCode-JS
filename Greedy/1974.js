var minTimeToType = function (word) {
  let current = "a";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    let temp = word[i].charCodeAt(0);
    let diff = Math.abs(temp - current.charCodeAt(0));

    if (diff > 13) count += 26 - diff + 1;
    else count += diff + 1;

    current = word[i];
  }

  return count;
};
