var countNodes = function (root) {
  function dfs(r) {
    if (!r) return 0;

    let left = dfs(r.left);
    let right = dfs(r.right);

    return left + right + 1;
  }

  return dfs(root);
};
