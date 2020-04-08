class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        if(this.key === null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this)
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if(this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    
    remove (key) {
        if(this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if(this == this.parent.left){
                this.parent.left = node;
            }
            else if (this == this.parent.right){
                this.parent.right =node;
            }
            if (node) {
                node.parent = this.this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        } 
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

class _Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);
        if (this.first === null) {
            this.first = node;
        }
        if(this.last){
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue(){
        if(!this.first) {
            return console.log('nada in queue')
        }
        // Ron Dan Steve
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
            return node.value;
        }
        
        return node.value;
    }
}

function dsfInOrder(tree){
    if (tree.left) {
        dsfInOrder(tree.left);
    }
    console.log(tree.key);
    if (tree.right) {
        dsfInOrder(tree.right);
    }
}

function dsfPreOrder(tree) {
    console.log(tree.key);
    if (tree.left) {
        dsfPreOrder(tree.left);
    }
    if (tree.right) {
        dsfPreOrder(tree.right);
    }
}

function dsfPostOrder(tree) {
    if (tree.left) {
        dsfPostOrder(tree.left);
    }
    if (tree.right) {
        dsfPostOrder(tree.right);
    }
    console.log(tree.key);
}

function commanderQueue(tree) {   
    let nextInCommand = new Queue;
    nextInCommand.enqueue(tree);
    while (nextInCommand.first !== null) {
        const dequeued = nextInCommand.dequeue();
        console.log(dequeued.value);
        if(dequeued.left) {
            nextInCommand.enqueue(dequeued.left)
        }
        if(dequeued.right) {
            nextInCommand.enqueue(dequeued.right)
        }
    }
}

function maxProfitForFatStacks(arr, start = 0, end = arr.length - 1, max = null, min = null) {
    let maxProfit = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++){
            let difference = arr[x] -arr[i];
            if (difference > maxProfit) {
                maxProfit = difference;
            }
        }
    }
    return maxProfit;
}

function main () {
    let BST = new BinarySearchTree();
    BST.insert(25, 'Picard');
    BST.insert(15, 'Riker');
    BST.insert(10, 'Worf');
    BST.insert(4, 'security-officer');
    // BST.insert(12);
    BST.insert(24, 'LaForge');
    // BST.insert(18, 'LaForge');
    BST.insert(31, 'Data');
    BST.insert(35, 'Crusher');
    BST.insert(32, 'Selar');
    //BST.insert(66);
    // BST.insert(90);
    // BST.insert(22);
    //commanderQueue(BST);
    console.log(maxProfitForFatStacks([128, 97, 121, 123, 98, 97, 105]));
}

main()
