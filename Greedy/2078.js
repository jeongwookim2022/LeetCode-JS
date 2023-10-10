var maxDistance = function (colors) {
  // const uniqueColors = [...new Set(colors)];
  let distance = 1;
  const first = colors[0];

  for (let i = 0; i < colors.length; i++) {
    if (first != colors[i]) distance = Math.max(distance, i);
    if (colors[i] != colors[colors.length - 1])
      distance = Math.max(distance, colors.length - 1 - i);
  }

  return distance;
};
