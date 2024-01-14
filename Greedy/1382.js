var balanceBST = function (root) {
  let orderedArr = [];
  inorder(root, orderedArr);
  return buildBST(orderedArr);
};

function inorder(node, arr) {
  if (node) {
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
  }
}
function buildBST(arr) {
  if (!arr.length) return null;

  let mid = Math.floor(arr.length / 2);
  let root = new TreeNode(arr[mid]);
  root.left = buildBST(arr.slice(0, mid));
  root.right = buildBST(arr.slice(mid + 1));

  return root;
}
