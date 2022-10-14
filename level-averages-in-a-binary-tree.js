result = [];
if (root === null) return result;

const queue = [root];
while (queue.length) {
  let levelSize = queue.length;
  let levelSum = 0.0;
  for (i = 0; i < levelSize; i++) {
    let currentNode = queue.shift();
    levelSum += currentNode.val;
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  result.push(levelSum / levelSize);
}
console.log(result);
