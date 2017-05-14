'use strict';

var TreeNode = class TreeNode {

    constructor(value) {
        this.val = value;
        this.leftNode = null;
        this.rightNode = null;
        this.parent = null;
    }

    static insert_tree(tree, nodeVal, parent) {
        console.log(nodeVal)
        if(!tree) {
            tree = new TreeNode(nodeVal);
            tree.parent = parent;
            console.log('before return')
            return ;
        }

        if(tree.val > nodeVal) {
            TreeNode.insert_tree(tree.rightNode, nodeVal, tree);
        } else {
            TreeNode.insert_tree(tree.leftNode, nodeVal, tree);
        }
    }
}

module.exports = TreeNode;