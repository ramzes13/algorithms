'use strict';
var BSTNode = require('./tree_node').BSTNode;

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        if(this.root == null) {
            this.root = new BSTNode(value);
            return true;
        }  else {
            return this.root.add(value);
        }
    }
}

module.exports.BinarySearchTree = BinarySearchTree;