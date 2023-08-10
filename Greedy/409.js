var longestPalindrome = function (s) {
  let check = {};
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!check[char]) {
      check[char] = 1;
    } else {
      check[char] = 0;

      total += 2;
    }
  }

  if (total < s.length) return total + 1;
  else return total;
};
