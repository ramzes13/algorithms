var TreeNode = require('./tree_node');

var node1 = new TreeNode(1)

for(let i = 0; i < 10; i++) {
    TreeNode.insert_tree(null, i, node1);
}
console.log(node1);
// console.log(TreeNode)