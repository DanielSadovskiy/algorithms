class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    addValue(value) {
        const newNode = new Node(value)
        if(!this.root) {
            this.root = newNode 
            return;
        }

        let currentNode = this.root
        while (currentNode) {
            if(currentNode.value > newNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode
                    return;
                } 
                currentNode = currentNode.left
            } else {
                if(!currentNode.right) {
                    currentNode.right = newNode
                    return;
                } 
                currentNode = currentNode.right
            } 
        }
    }

    preOrder(node, cb) {
        if(!node) return 
        if(cb) cb(node)
        this.preOrder(node.left, cb)
        this.preOrder(node.right, cb)
    }
    
    inOrder(node,cb) {
        if(!node) return 
        this.inOrder(node.left, cb)
        if(cb) cb(node)
        this.inOrder(node.right, cb)
    }

    postOrder(node, cb) {
        if(!node) return 
        this.postOrder(node.left, cb)
        this.postOrder(node.right, cb)
        if(cb) cb(node)
    }

    traverseDFS(cb, method) {
        switch(method) {
            case 'preOrder': 
                return this.preOrder(this.root, cb)
            case 'inOrder':
                return this.inOrder(this.root, cb)
            default:
                return this.postOrder(this.root, cb)
        }
    }

    traverseBFS(cb){
        const queue = [this.root]
        while(queue.length > 0) {
            console.log(queue)
            const node = queue.shift()
            cb(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
}

const tree = new BinaryTree();

tree.addValue(8)
tree.addValue(2)
tree.addValue(11)
tree.addValue(7)
tree.addValue(4)
tree.addValue(13)
tree.addValue(20)
tree.addValue(9)
tree.addValue(1)

//          8 
//     2         11
//   1    7    9   13
//      4           20

tree.traverseBFS((node) => console.log(node.value))
