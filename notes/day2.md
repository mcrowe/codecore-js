

# Agenda

- Show off your Jukebox
- Review
- Advanced Functions
- Advanced Objects
- Walk through player.js
- Intro to the DOM











# Review






- Class notes and challenge exercises






- variables, semi-colons, number, string, array, object, functions
- Q: Important take-aways for each










# Anonymous Functions as Parameters





- Example: Anonymous function

```js
var myFun = function (name) {
  console.log(name);
};
```

- Example: Anonymous function in our "map" function.

```js

var array = [1, 2, 3];

map([1, 2, 3], function (x) {
  return x + 1;
});
```









- Exercise: Use anonymous function and `map` to produce an array of squares of `[1, 2, 3, 4, 5, 6, 7, 8, 9]`


```js
var map = function (array, transform) {
  var result = [];

  for (var i=0; i < array.length; i++ ) {
    result[i] = transform(array[i]);
  }

  return result;
}


map([1, 2, 3, 4, 5, 6, 7, 8, 9], function (x) {
  return x * x;
});

```











- Functions as parameters in the wild.
  - Used in lots of APIs that we will see.
  - Examples on *underscorejs.org* website.






# Timing Functions





- Q: How do we wait 1 second in Ruby before doing something in Ruby?

```ruby
sleep 1
```












- Q: Why might that not be a good idea in Javascript?













- setInterval, setTimeout











- Example: delayed "Hello World" with setTimeout


```js
setTimeout(function () {
  document.write("Hello, World");
}, 1000);
```










- Exercise: waiting

  Change your page script to write to the page
  "Waiting..." and then, 2 seconds later, "done!"











- Example: counter with setInterval




```js
var count = 0;

setInterval(function () {
  console.log(count);
  count += 1;
}, 1000);
```








- Exercise: waiting with dots

  Make your page sript write "Waiting" and then add a "." every second.













- Ending an interval with `clearInterval`



```js
var interval = setInterval(function () {
  console.log('.');
}, 1000);

clearInterval(interval);

```










- Exercise: Blast-off

  Build a blast-off countdown using `setInterval`.
  *10 9 8 7 6 5 4 3 2 1 Blast Off!*




```js
var count = 10;

var interval = setInterval(function () {
  if (count == 0) {
    console.log("Blast Off!");
    clearInterval(interval);
  } else {
    console.log(count);
    count -= 1;
  }
}, 1000);
```








# Advanced Objects





- `delete` deletes a property of an object









- Looping over properties (for-in loop)











- Example: Count properties

 Write a function that computes the number of properties an object has.

```js
var countProperties = function (obj) {
  var count = 0;
  for (var attr in obj) {
    count += 1;
  }
  return count;
};

```








- Exercise:
  `console` is an object, figure out what properties it has.



```js
for (var prop in console) {
  console.log(prop);
}

```








- Exercise: Clone

  Write a function `clone`, which takes an object and returns a clone of it.











- "Methods": Adding functions to objects

- Example:
  Adding `drive` function to "car" object that says "vrrooooomm!". Calling "drive".

- This is what we've seen when calling console.log!


```js
car = {
  name: 'Betty',
  drive: function () {
    console.log('Vroom');
  },
  model: 'Ford'
};

```








- Exercise: Stopping car

  Add a stop function to your car that logs "screeetch!" to the console.








- `this` keyword inside functions.

- Example: Make `drive` method output the value of speed. (e.g. "vrroooommm! The car is driving fast.")


```js

var car1 = {
  name: 'Betty',
  speed: 'fast'
};

var car2 = {
  name: 'John',
  speed: 'very slow'
};

var drive = function () {
  console.log("Vrrooooomm! The car is driving " + car1.speed + ".");
};

car1.drive = drive;
car2.drive = drive;

car1.drive();
car2.drive()
```











- Exercise: better stop

  Change "stop" to have the following output:

  "Screeeeetch!!" if speed is "fast"
  "RRrch."        if speed is "medium"
  "sh"            if speed is "slow"
  "Yikes, I don't know how fast I'm going!!!"
      if speed is anything else.



```js
var car1 = {
  speed: 'slow'
};

var car2 = {
  speed: 'fast'
};

var driveFunction = function () {
  var speed = this.speed;
  if (speed == "fast") {
    console.log("Screeetch!!!!");
  } else if (speed == "medium") {
    console.log("Rrccch!");
  } else if (speed == "slow") {
    console.log("sh");
  } else {
    console.log("What??!! I don't know how fast I'm going");
  }
};

car1.drive = driveFunction;
car2.drive = driveFunction;

car1.drive();
car2.drive();

```







# Advanced Javascript Topics

- Scope of variables with and without "var"
- Example:

```js
  var three = 3;
  var fnOne = function () { var one = 1; };
  var fnTwo = function () { two = 2; };
  var fnThree = function () { three = 4; };

  console.log(one);
```


- Closures
- Example: makeCounter function

```js


var makeCounter = function () {
  var count = 0;
  return function () {
    console.log(count);
    count += 1;
  };
};


```



- Creating objects with "new"


```js
var Model = function () {
  this.value = "5";
};

myModel = new Model();
```




- Walk through player.js










# The DOM













- DOM Tree Diagram
=> window, document, documentElement, childNodes, parentNode
=> node list, node









- Demo: Traversing the DOM on wikipedia in console














- Demo: "Elements" tab and inspect element on wikipedia
  => Hover nodes in console













- window as the global object and default receiver.

- Example:
  - global functions we've see so far.
  - document vs window.document
  - var a = 3; window.a;








- document: Root of the document









- document.write











- Exercise: body node

  Declare a variable "node" that references the BODY tag node on wikipedia's homepage.











- Challenge Exercise: count nodes

  Count the total number of nodes on the "vancouver.craigslist.org" home page.



```js
var countChildren = function (node) {

  var count = 1;

  var len = node.childNodes.length;

  for (var i = 0; i < len; i += 1) {
    count += countChildren(node.childNodes[i]);
  }

  return count;
};
```








- document.location.href








- Exercise: print URL

  Change our dynamic page to write the page's current URL to page using document.write









- document.location.reload()











- Exercise: Make our dynamic page reload every 10 seconds.











- Review: Parts of an HTML tag:
  => tag name, attributes, id, class, contents










- document.getElementById, document.getElementByTagName










- Example: Selecting top banner on wikipedia













- Exercise: Select the logo on wikipedia













- Exercise:

  Count the number of links on "vancouver.craigslist.ca" page.










- innerHTML, innerText









- Example:
    Get the body tag's inner text and html on craigslist

- Example:
    Change the body tag's inner html on craigslist












- Exercise: all your links are belong to us

  Change all the craiglist links's text to be your name.












- Exercise: pug love

  Search for "pug dog" in wikipedia.
  Change the article contents to read:
  "[Your Name] loves pug dogs!".











- getAttribute, setAttribute










- Example: Get HREF of first link on vancouver.craigslist.ca










- Exercise: Corporate sabotage
  Make craigslist logo link to http://www.google.com



