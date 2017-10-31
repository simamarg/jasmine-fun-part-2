var {LinkedList,Node} = require('../modules/LinkedList');

describe("CreateList", function() {
  it("Should create an object with an array inside", function() {
    var list = new LinkedList();

    expect(list._length).toBe(0);
    expect(list.head).toBe(null);
  });
});
