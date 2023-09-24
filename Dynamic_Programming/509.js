var fib = function (n) {
  let ans = 0;
  let f = [0, 1, 1];

  if (n >= 3) {
    for (let i = 3; i < n + 1; i++) {
      f.push(f[i - 1] + f[i - 2]);
    }
  }
  return f[n];
};
