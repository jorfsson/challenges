var cloneGraph = function(graph) {
    if (graph === null || graph === undefined) return graph;
    let hashMap = {},
        stack = [],
        head;

    stack.push(graph);

    function BFS() {
      while (stack.length > 0) {
        let current = stack.pop();
        if (!hashMap[current.label]) {
          hashMap[current.label] = new UndirectedGraphNode(current.label);
          if (!head) {
            head = hashMap[current.label];
          }
          current.forEach(child => {
            if (!hashMap[child.label) {
              stack.push(child);
            } else {
              hashMap[current.label].push(hashMap[child.label]);
            }
          });
        }
      }
      return head;
    }

    return BFS();
};


function UndirectedGraphNode(label) {
   this.label = label;
   this.neighbors = [];
}
