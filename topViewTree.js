//Print nodes from top view of tree

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  addLeaf(val) {
    if (this.left === null) {
      this.left = new Tree(val);
    } else if (this.right === null) {
      this.right = new Tree(val);
    } else {
      let prob = Math.random();
      if (prob > 0.5) {
        this.left.addLeaf(val);
      } else {
        this.right.addLeaf(val);
      }
    }
  }
}

function getTopView(root) {
  let mid = [root.val],
      left = [],
      right = [];

  function findHorizontalDistance(node, root) {

  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateTree() {
  let root = new Tree(getRandomNumber()),
      iterations = getRandomNumber();

  while (iterations >= 0) {
    root.addLeaf(getRandomNumber());
    iterations--;
  }
  return root;
}

let testTree = generateTree();
