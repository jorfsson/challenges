var totalFruit = function(tree) {
    if (tree.length <= 1) {
        return tree.length;
    }
    //Sliding window
    //Need to keep track of same type of fruit
    //Continuous line
    //Iterate through, establish first type of fruit, and then second type of fruit
        //Walk through, log largest window
    let first = 0, second = 0, total = 0, start;

    while (first <= second && second < tree.length) {
        while (tree[first] === tree[second]) {
            second++;
        }
        if (second >= tree.length) {
          return tree.length;
        }
        start = second;
        let firstTree = tree[first], secondTree = tree[second];
        while (tree[second] === firstTree || tree[second] === secondTree) {
            if (tree[start] !== tree[second]) {
                start = second;
            }
            second++;
        }
        total = Math.max(total, second - first);
        first = start;

    }
    return total;
};

console.log(totalFruit([1, 1]))
