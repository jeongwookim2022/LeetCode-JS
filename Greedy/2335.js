// var fillCups = function (amount) {
//   let sortedAmount = amount.sort((a, b) => a - b);
//   let halfCeil = Math.ceil(sortedAmount[2] / 2);
//   let halfFloor = Math.floor(sortedAmount[2] / 2);
//   if (sortedAmount[0] + sortedAmount[1] <= sortedAmount[2]) {
//     return sortedAmount[2];
//   } else {
//     if (sortedAmount[1] == sortedAmount[2]) {
//       return sortedAmount[2] + sortedAmount[0] - 1;
//     } else {
//       return (
//         sortedAmount[2] +
//         Math.max(sortedAmount[0] - halfCeil, sortedAmount[1] - halfFloor)
//       );
//     }
//   }
// };

// var fillCups = function (amount) {
//   let sortedAmount = amount.sort((a, b) => a - b);
//   let halfCeil = Math.ceil(sortedAmount[2] / 2);
//   let halfFloor = Math.floor(sortedAmount[2] / 2);
//   let smallHalf = sortedAmount[0] / 2;
//   if (sortedAmount[0] + sortedAmount[1] <= sortedAmount[2]) {
//     return sortedAmount[2];
//   } else {
//     if (sortedAmount[1] == sortedAmount[2]) {
//       if (sortedAmount[0] <= sortedAmount[2] / 2) {
//         return sortedAmount[2] + 1;
//       }
//       // return sortedAmount[2] + halfFloor;
//       return (
//         sortedAmount[0] +
//         Math.ceil(
//           Math.max(sortedAmount[1] - smallHalf, sortedAmount[2] - smallHalf)
//         )
//       );
//     } else {
//       return (
//         // 1
//         // sortedAmount[2] +
//         // Math.max(sortedAmount[0] - halfFloor, sortedAmount[1] - halfCeil)
//         // 2
//         sortedAmount[2] + Math.floor(sortedAmount[0] / 2)
//       );
//     }
//   }
// };

var fillCups = function (amount) {
  let sortedAmount = amount.sort((a, b) => a - b);
  if (sortedAmount[0] + sortedAmount[1] <= sortedAmount[2]) {
    return sortedAmount[2];
  } else {
    return (sortedAmount[2] + sortedAmount[1]) / 2 + sortedAmount[0] / 2;
  }
};
