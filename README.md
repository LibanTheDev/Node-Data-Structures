# Node_LinkedLists [![Build Status](https://travis-ci.org/LibanTheDev/Node_LinkedLists.svg?branch=master)](https://travis-ci.org/LibanTheDev/Node_LinkedLists)
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
