var BinarySearchTree = require('../../../data_structures/tree/tree.js').BinarySearchTree;
var BSTNode = require('../../../data_structures/tree/tree_node.js').BSTNode;
const assert = require('chai').assert;

describe("CRUD tree", function () {

  it("New empty tree", function () {
    const tree = new BinarySearchTree();
    assert.isNull(tree.root);
  });

  it("Add root value", function () {
    const tree = new BinarySearchTree();
    tree.add(10);

    assert.instanceOf(tree.root, BSTNode);

    assert.isNull(tree.root.leftNode);
    assert.isNull(tree.root.rightNode);
  });

  it("Add leaf value equal to root value", function () {
    const tree = new BinarySearchTree();
    assert.isTrue(tree.add(10));
    assert.isFalse(tree.add(10));

    assert.equal(tree.root.value, 10);
    assert.isNull(tree.root.leftNode);
    assert.isNull(tree.root.rightNode);
  });

  it("Add leaf values", function () {
    const tree = new BinarySearchTree();
    tree.add(10)
    tree.add(7)
    tree.add(13)

    assert.equal(tree.root.value, 10);
    assert.equal(tree.root.leftNode.value, 7);
    assert.equal(tree.root.rightNode.value, 13);
  });
});

describe('Search three', function () {
  it('search null', function () {
    const tree = new BinarySearchTree();
    assert.isNull(BinarySearchTree.searchThree(tree, 12));
  })

  it('search value', function () {
    const tree = new BinarySearchTree();
    tree.add(10)
    tree.add(7)
    tree.add(1)

  })
})

describe('Find minimum', function () {
  it('find minimum null', function () {
    const tree = new BinarySearchTree();
  })
})