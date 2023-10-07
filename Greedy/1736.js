var maximumTime = function (time) {
  let newTime = time.split("");

  if (newTime[0] == "?") newTime[0] = newTime[1] > 3 ? "1" : "2";
  if (newTime[1] == "?") newTime[1] = newTime[0] == 2 ? "3" : "9";
  if (newTime[3] == "?") newTime[3] = "5";
  if (newTime[4] == "?") newTime[4] = "9";

  return newTime.join("");
};
