var BinarySearchTree = require('./tree_node').BinarySearchTree;
const util = require('util');

const tree = new BinarySearchTree();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

for(let i = 0; i < 10; i++) {
    tree.add(getRandomArbitrary(0, 50));
}

console.log(util.inspect(tree, { showHidden: true, depth: null }));