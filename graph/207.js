var canFinish = function (numCourses, prerequisites) {
  const preMap = {};
  const visited = {};
  const test = {};

  for (let i = 0; i < prerequisites.length; i++) {
    let crs = prerequisites[i][0];
    let pre = prerequisites[i][1];

    if (preMap[crs] == undefined) {
      preMap[crs] = [pre];
      test[crs] = [pre];
    } else {
      preMap[crs].push(pre);
      test[crs].push(pre);
    }
  }

  console.log(test);
  console.log(test[2]);

  const dfs = (node) => {
    if (visited[node]) {
      return false;
    }
    if (preMap[node] !== undefined) {
      if (preMap[node].length == 0) return true;

      visited[node] = true;
      for (let val of preMap[node]) {
        if (!dfs(val)) return false;
      }

      visited[node] = false;
      preMap[node] = [];
    }
    return true;
  };

  for (let key in preMap) {
    if (!dfs(key)) return false;
  }

  return true;
};
