var findContentChildren = function (g, s) {
  let count = 0;
  let j = 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (j != s.length) {
    for (let i = 0; i < g.length; i++) {
      if (s[j] >= g[i]) {
        g.splice(i, 1);

        count++;
        break;
      }
    }

    j++;
  }
  return count;
};
