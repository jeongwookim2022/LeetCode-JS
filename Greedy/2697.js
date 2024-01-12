var makeSmallestPalindrome = function (s) {
  let reversedS = s.split("").reverse().join("");
  let str = "";

  console.log("Origin:", s);
  console.log("Reverse:", reversedS);

  for (let i = 0; i < s.length; i++) {
    const lettr1 = s[i];
    const lettr2 = reversedS[i];

    if (lettr1 === lettr2) {
      str += lettr1;
    } else {
      if (s.charCodeAt(i) < reversedS.charCodeAt(i)) {
        str += lettr1;
      } else {
        str += lettr2;
      }
    }
  }

  return str;
};
