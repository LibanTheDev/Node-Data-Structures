# Node_LinkedLists [![Build Status](https://travis-ci.org/LibanTheDev/Node_LinkedLists.svg?branch=master)](https://travis-ci.org/LibanTheDev/Node_LinkedLists) [![npm version](https://badge.fury.io/js/node_linkedlists.svg)](https://badge.fury.io/js/node_linkedlists)
A library for linked lists written in Node.js 💯

# How to use

##Using this library
```JavaScript
var LinkedList = require('node_linkedlists');
var list1 = new LinkedList();

```

There are 6 major prototypes here in this library.

## Adding to a list
Using our initialized "list1", we can add objects to our list in the following
manner:
```JavaScript

  list1.add('Hello');
  list1.add('It's);
  list1.add('Me');
  list1.add('I');
  list1.add('Was');
  list1.add('Wondering');
  ...

```
## Getting the length of a list
```Javascript
  console.log(list1.size()); // 6
  ```

## Removing from a list
For this prototype, it takes in an index as a parameter.
```Javascript
  list1.remove(1); // removes It's
  ```
## Find Index Of An Object
For this prototype, it takes in some data as a parameter.
```Javascript
  list1.findIndexOf("Hello"); // 0
  ```
## toString
This prototype converts the Linked List to a String
```Javascript
  console.log(list1.toString()); //"Hello", "It's", "Me", "I", "Was", "Wondering"
  ```
## toArray
This prototype converts the LinkedList to an array
```Javascript
  console.log(list1.toArray()); //["Hello", "It's", "Me","I", "Was". "Wondering"]
  ```
## removeAll
This prototype removes all elements from a list
```Javascript
    list1.removeAll(); //removes every single element from the list
    console.log(list1.size()); // returns 0
    ```
## getFirstElement
This prototype gets the first element in the list
```Javascript
  console.log(list1.getFirstElement) //"Hello"
  ```
