var convertTime = function (current, correct) {
  let cur_h = parseInt(current[0] + current[1]);
  let cur_m = parseInt(current[3] + current[4]);
  let cor_h = parseInt(correct[0] + correct[1]);
  let cor_m = parseInt(correct[3] + correct[4]);

  let ans = 0;
  let temp_list = [15, 5, 1];

  if (cur_h > cor_h) {
    ans += 24 - (cur_h - cor_h);
  } else ans += cor_h - cur_h;

  if (cur_m <= cor_m) {
    // minutes
    let m1 = cor_m - cur_m;
    for (let i = 0; i < temp_list.length; i++) {
      if (m1 > 0) {
        let num = Math.floor(m1 / temp_list[i]);
        ans += num;
        m1 -= num * temp_list[i];
      }
    }
  } else {
    ans -= 1;

    let m2 = 60 - cur_m + cor_m;
    for (let i = 0; i < temp_list.length; i++) {
      if (m2 > 0) {
        let num = Math.floor(m2 / temp_list[i]);
        ans += num;
        m2 -= num * temp_list[i];
      }
    }

    // let m3 = cor_m;
    // for (let i = 0; i < temp_list.length; i++) {
    //   if (m3 > 0) {
    //     let num = Math.floor(m3 / temp_list[i]);
    //     ans += num;
    //     m3 -= num * temp_list[i];
    //   }
    // }
  }

  return ans;
};
