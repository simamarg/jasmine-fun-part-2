function Node(data) {
    this.data = data;
    this.next = null;
};

function LinkedList() {
    this._length = 0;
    this.head = null;
};

LinkedList.prototype.consoleLogAll = function () {

    // Assign the currentNode to the first element in the array
    var currentNode = this.head;

    // loop until the last element (null)
    while (currentNode != null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
};

LinkedList.prototype.AddToTheBeginning = function (data) {
    var newNode = new Node(data);
    // Reference the new item to the existing first element.
    newNode.next = this.head;
    // Place the new node at the beginning of the list.
    this.head = newNode;
    //increase the length
    this._length++;
};

LinkedList.prototype.DeleteItem = function (data) {

    // Assign the currentNode to the first element in list
    var currentNode = this.head;

    // If the item to delete is the head it's fairly easy 
    if (currentNode && currentNode.data == data) {
        this.head = currentNode.next;
        this._length--;
    } else {
        //if it's not we'll loop over the rest of the list
        //and when there is a match then skip the item
        while (currentNode != null) {
            if (currentNode.next && currentNode.next.data === data) {
                currentNode.next = currentNode.next.next;
                this._length--;
                return; // Exit the function when you done
            }
            currentNode = currentNode.next; //Go to next item
        }
    }
};

LinkedList.prototype.AddToTheEnd = function (value) {
    var node = new Node(value);
    var currentNode = this.head;
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this._length++;
        return node;
    }
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    //Add the item
    currentNode.next = node;
    this._length++;
    return node;
};

LinkedList.prototype.RemoveItemByIndex = function (index) {
    // 1st use-case: the item to delete is the first item 
    if (index === 0) {
        this.head = this.head.next;
        this._length--;
    } else {
        // Assign the currentNode to the first element in the array
        var currentNode = this.head;
        //Loop to the wanted position
        for (var i = 1; i < index; i++) {
            //Go to next item
            currentNode = currentNode.next;
        }
        // Skip the item
        currentNode.next = currentNode.next.next;
        this._length--;
    }
};

module.exports = { LinkedList: LinkedList, Node: Node }