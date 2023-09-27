var canFinish = function (numCourses, prerequisites) {
  let preMap = [];
  let visitSet = new Set();

  for (let i = 0; i < numCourses; i++) {
    preMap.push([]);
  }

  prerequisites.forEach((el, i) => {
    preMap[el[0]].push(el[1]); // crs: el[0], pre: el[1]
  });

  let dfs = function (crs) {
    if (visitSet.has(crs)) {
      return false;
    }
    if (preMap[crs] == []) {
      return true;
    }

    visitSet.add(crs);
    preMap[crs].forEach((pre) => {
      if (dfs(pre) == false) return false;
    });
    visitSet.delete(crs);
    preMap[crs] = [];
    return true;
  };

  for (let crs = 0; crs < numCourses; crs++) {
    if (dfs(crs) == false) return false;
  }

  return true;
};
