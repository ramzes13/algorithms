'use strict';
var BSTNode = require('./tree_node').BSTNode;

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if (this.root == null) {
            this.root = new BSTNode(value);
            return true;
        } else {
            return this.root.add(value);
        }
    }

    static searchThree(treeNode, searchValue) {
        if (!treeNode) {
            return null;
        }

        if (treeNode.value === searchValue) {
            return treeNode;
        }

        if (treeNode.value < searchValue) {
            return BinarySearchTree.searchThree(treeNode.leftNode, searchValue);
        } else {
            return BinarySearchTree.searchThree(treeNode.rightNode, searchValue);
        }
    }

    static findMinimum(treeNode) {
        if (!treeNode) {
            return null;
        }

        var minNode = treeNode;

        while (minNode.leftNode) {
            minNode = treeNode.leftNode;
        }

        return minNode;
    }

    static traverseTreeLeft(node, callback) {
        if (node) {
            BinarySearchTree.traverseTreeLeft(node.leftNode, callback);
            callback(node.value);
            BinarySearchTree.traverseTreeLeft(node.rightNode, callback);
        }
    }
}

module.exports.BinarySearchTree = BinarySearchTree;