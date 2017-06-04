'use strict';
var BSTNode = class BSTNode {

    constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
        this.parent = null;
    }

    add(value) {
        if(value == this.value) {
            return false;
        } else if(value < this.value) {
            if(this.leftNode == null) {
                this.leftNode = new BSTNode(value);
                this.leftNode.parent = this;
                return true;
            } else {
                return this.leftNode.add(value);
            }
        } else if(value > this.value) {
            if(this.rightNode == null) {
                this.rightNode = new BSTNode(value);
                this.rightNode.parent = this;
                return true;
            } else {
                return this.rightNode.add(value);
            }
        }

        return false;
    }
}

module.exports.BSTNode = BSTNode;