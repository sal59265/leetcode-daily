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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if (!root) return [];
  
    const queue = [root];
    const result = [];
    let leftToRight = true;
  
    while (queue.length) {
      let len = queue.length;
      if(leftToRight) {
        result.push(queue.map((node) => node.val));
      } else {
        result.push(queue.map((node) => node.val).reverse());
      }
      while (len--) {
        let node = queue.shift();
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }
      leftToRight = !leftToRight;
    }
  
      return result;
  };