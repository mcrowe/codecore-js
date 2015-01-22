# Agenda

- Show off your Jukebox
- Review
- Advanced Functions
- Advanced Objects
- Walk through player.js
- Intro to the DOM











# Review

- variables, semi-colons, number, string, array, object, functions
- Q: Important take-aways for each










# Anonymous Functions as Parameters





- Example: Anonymous function in console
- Example: Anonymous function in our "map" function.










- Exercise: Use anonymous function and `map` to produce an array of squares of `[1, 2, 3, 4, 5, 6, 7, 8, 9]`













- Functions as parameters in the wild.
  - Used in lots of APIs that we will see.
  - Examples on *underscorejs.org* website.










# Timing Functions





- Q: How do we wait 1 second in Ruby before doing something in Ruby?









- Q: Why might that not be a good idea in Javascript?













- setInterval, setTimeout

- Example: delayed "Hello World" with setTimeout












- Exercise: waiting

  Change your page script to write to the page
  "Waiting..." and then, 2 seconds later, "done!"








- Example: counter with setInterval









- Exercise: waiting with dots

  Make your page sript write "Waiting" and then add a "." every second.













- Ending an interval with `clearInterval`












- Exercise: Blast-off

  Build a blast-off countdown using `setInterval`.
  *10 9 8 7 6 5 4 3 2 1 Blast Off!*











# Advanced Objects





- `delete` deletes a property of an object









- Looping over properties (for-in loop)









- Example: Count properties

 Write a function that computes the number of properties an object has.









- Exercise:
  `console` is an object, figure out what properties it has.










- Exercise: Clone

  Write a function `clone`, which takes an object and returns a clone of it.











- "Methods": Adding functions to objects

- Example:
  Adding `drive` function to "car" object that says "vrrooooomm!". Calling "drive".

- This is what we've seen when calling console.log!











- Exercise: Stopping car

  Add a stop function to your car that logs "screeetch!" to the console.










- `this` keyword inside functions.

- Example: Make `drive` method output the value of speed. (e.g. "vrroooommm! The car is driving fast.")








- Exercise: better stop

  Change "stop" to have the following output:

  "Screeeeetch!!" if speed is "fast"
  "RRrch."        if speed is "medium"
  "sh"            if speed is "slow"
  "Yikes, I don't know how fast I'm going!!!"
      if speed is anything else.









# Advanced Javascript Topics

- Scope of variables with and without "var"
- Example:

```js
  var three = 3;
  var fnOne = function () { var one = 1; };
  var fnTwo = function () { two = 2; };
  var fnTwo = function () { three = 4; };
```


- Closures
- Example: makeCounter function

- Creating objects with "new"

- Walk through player.js










# The DOM









- DOM Challenges








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



