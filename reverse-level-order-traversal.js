class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  
    if (!root) return [];
  
    const queue = [root];
    const result = [];
  
    while (queue.length) {
      let len = queue.length;
      result.unshift(queue.map((node) => node.val));
      while (len--) {
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    console.log(result);