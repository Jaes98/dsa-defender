export default class SinglyLinkedList {
    add(data) {
        const node = new Node(data);
    }
    
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}