var BinarySearchTree = require('../../../data_structures/tree/tree.js').BinarySearchTree;
var BSTNode = require('../../../data_structures/tree/tree_node.js').BSTNode;

describe("CRUD tree", function () {

  it("New empty tree", function () {
    const tree = new BinarySearchTree();
    expect(tree.root).toBe(null);

  });

  it("Add root value", function () {
    const tree = new BinarySearchTree();
    tree.add(10);

    expect(tree.root instanceof BSTNode).toBeTruthy();

    expect(tree.root.leftNode).toBe(null);
    expect(tree.root.rightNode).toBe(null);
  });

  it("Add leaf value equal to root value", function () {
    const tree = new BinarySearchTree();
    expect(tree.add(10)).toBe(true);
    expect(tree.add(10)).toBe(false);

    expect(tree.root.value).toBe(10);
    expect(tree.root.leftNode).toBe(null);
    expect(tree.root.rightNode).toBe(null);
  });

  it("Add leaf values", function () {
    const tree = new BinarySearchTree();
    expect(tree.add(10)).toBe(true);
    expect(tree.add(7)).toBe(true);
    expect(tree.add(13)).toBe(true);

    expect(tree.root.value).toBe(10);
    expect(tree.root.leftNode.value).toBe(7);
    expect(tree.root.rightNode.value).toBe(13);
  });
});

describe('Search three', function () {
  it('search null', function () {
    const tree = new BinarySearchTree();

    expect(BinarySearchTree.searchThree(tree, 12)).toBe(null);
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