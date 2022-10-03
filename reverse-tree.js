/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const reverseTree = (node) => {
    if (!node) return;
    let left = node.left;
    let right = node.right;
    let temp = node.right;
    node.right = node.left;
    node.left = temp;

    reverseTree(node.left);
    reverseTree(node.right);
  };
  reverseTree(root);
  return root;
};
