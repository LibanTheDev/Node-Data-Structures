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
  expect(list1.toArray()).to.eql(['Hello', 'My', 'Name', 'Is']);

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
    expect(list2.toArray().length).to.eql(3);
  });
});
describe("remove", function(){
  it("removes a node object from the linked list", function(){
    list1.remove(0);
    expect(list1.size()).to.equal(3);
    expect(list1.toArray()).to.eql(['My', 'Name', 'Is']);

  });
});
describe("find", function(){
  it("finds index of an object", function(){
    expect(list1.findIndexOf("Hello")).to.eql(undefined);
    expect(list1.toArray().indexOf('Hello')).to.eql(-1);

  });
});
describe("toString", function(){
  it("converts linked list  to a string", function(){
    expect(list1.toString()).to.equal("My,Name,Is");
    expect(list1.toArray().join(',')).to.eql("My,Name,Is");

  });
});
describe("toArray", function(){
  it("converts linked list to an array", function(){
    list3.add('1');
    list3.add('2');
    expect(list3.toArray()).to.eql(['1', '2']);
    expect(list3.toString().split(',')).to.eql(['1','2']);
  });
});
describe("removeAll", function(){
  it("removes all elements from list", function(){
    list3.removeAll();
    expect(list3.size()).to.equal(0);
    expect(list3.toArray()).to.eql([]);
    


  });

});
