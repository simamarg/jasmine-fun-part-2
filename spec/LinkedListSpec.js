var { LinkedList, Node } = require('../modules/LinkedList');

describe("CreateList", function () {
    it("Should create an object with an array inside", function () {
        var list = new LinkedList();

        expect(list._length).toBe(0);
        expect(list.head).toBe(null);
    });
});

describe("consoleLogAll", function () {
    it("Should print the linked list data", function () {
        let list = new LinkedList();
        list.AddToTheBeginning(3);
        list.AddToTheBeginning(4);
        console.log = jasmine.createSpy("log");
        list.consoleLogAll();
        expect(console.log).toHaveBeenCalledWith(4);
        expect(console.log).toHaveBeenCalledWith(3);
    });
});


describe("AddToTheBeginning", function () {
    it("Should create a node with the given data and add it to the beginning of the list", function () {
        var list = new LinkedList();
        list.AddToTheBeginning(3);
        list.AddToTheBeginning(4);

        expect(list._length).toBe(2);
        expect(list.head.data).toBe(4);
        expect(list.head.next.data).toBe(3);
        expect(list.head.next.next).toBe(null);
    });
});

describe("DeleteItem", function () {
    it("Should find a node with the given data and delete it from the list", function () {
        var list = new LinkedList();
        list.AddToTheBeginning(3);
        list.AddToTheBeginning(4);
        list.DeleteItem(3);

        expect(list._length).toBe(1);
        expect(list.head.data).toBe(4);
        expect(list.head.next).toBe(null);
    });
});

describe("AddToTheEnd", function () {
    it("Should create a node with the given data and add it to the end of the list", function () {
        var list = new LinkedList();
        list.AddToTheEnd(3);
        list.AddToTheEnd(4);

        expect(list._length).toBe(2);
        expect(list.head.data).toBe(3);
        expect(list.head.next.data).toBe(4);
        expect(list.head.next.next).toBe(null);
    });
});

describe("RemoveItemByIndex", function () {
    it("Should find a node in a given index and delete it from the list", function () {
        var list = new LinkedList();
        list.AddToTheBeginning(3);
        list.AddToTheBeginning(4);
        list.AddToTheEnd(5);
        list.RemoveItemByIndex(1);

        expect(list._length).toBe(2);
        expect(list.head.data).toBe(4);
        expect(list.head.next.data).toBe(5);
        expect(list.head.next.next).toBe(null);
    });
});