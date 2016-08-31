var expect = require('chai').expect;
var LinkedList = require('../index');
var list1 = new LinkedList();
var list2 = new LinkedList();
var list3 = new LinkedList();


describe("Adding to a LinkedList", function(){
  it("adds a node object to the linked list", function(){
  list1.add('Hello');
  list1.add('My');
  list1.add('Name');
  list1.add('Is');

  expect(list1.size()).to.equal(4);

  });
});
describe("Length", function(){
  it("gets the size of the List", function(){
    list2.add({
      "name": "Liban",
      "age":22
    });
    list2.add({
      "name": "John",
      "age":25
    });
    list2.add({
      "name": "Bill",
      "age":21
    });

    expect(list2.size()).to.equal(3);
  });
});
describe("remove", function(){
  it("removes a node object from the linked list", function(){
    list1.remove(0);
    expect(list1.size()).to.equal(3);

  });
});
describe("find", function(){
  it("finds index of an object", function(){
    expect(list1.findIndexOf("Hello")).to.equal(undefined);

  });
});
describe("toString", function(){
  it("converts linked list  to a string", function(){
    expect(list1.toString()).to.equal("My,Name,Is");

  });
});
describe("toArray", function(){
  it("converts linked list to an array", function(){
    list3.add('hello');
    list3.add('its');
    console.log(list3.toArray());
  });
});
describe("removeAll", function(){
  it("removes all elements from list", function(){
    list1.removeAll();
    expect(list1.size()).to.equal(0);

  });

});
