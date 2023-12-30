// var minCostToMoveChips = function (position) {
//   let numOne = 0;
//   let numTwo = 0;

//   for (let i = 0; i < position.length; i++) {
//     if (position[i] % 2 == 1) numOne += 1;
//     else if (position[i] % 2 == 0) numTwo += 1;
//   }

//   if (numOne > numTwo) return numTwo;
//   else return numOne;
// };

var minCostToMoveChips = function (position) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 == 0) even += 1;
    else odd += 1;
  }

  let answer = odd > even ? even : odd;
  return answer;
};
