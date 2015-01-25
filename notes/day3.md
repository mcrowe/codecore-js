# Documentation
- http://api.jquery.com/
- http://overapi.com/jquery/ <= Work off of this. Fill some stuff in.
- http://woorkup.com/wp-content/uploads/2011/12/jQuery-17-Visual-Cheat-Sheet1.pdf
- http://learn.jquery.com/using-jquery-core/ + events + ajax

# Overview

What's jQuery for?

1. Select element(s)
2. Manipulate elements
3. Add event listeners to elements
4. AJAX (next week)

# Selectors

$('...') => Select via CSS selector

Review CSS selectors:

[name]
[name="value"]
[name~="value"]
[name!="value"]

*
.class
element
#id
selector1, selectorN, ...
parent > child
ancestor descendant

:first-child
:last-child
:even
:odd


Do two passes of everything? One very simple pass through selecting, manipulating, and events. Then go back through and add more details.


---------------------------------

DAY 1

Why jQuery?

  DOM made easy
  Cross-browser
  Overwhelmingly popular


What can jQuery do?

  1. Select element(s)
  2. Manipulate selected elements
  3. Add event listeners to selected elements
  4. AJAX (next week)


Overview
  http://overapi.com/jquery/
  Will go through each section twice


Your First jQuery Page
  Create a new HTML page
  Add jQuery from google CDN
  Write an external script that:
  - Uses $(document).ready
  - Changes the HTML in an H1 tag to "Welcome to jQuery"


Review: Dissecting an HTML element

# Review: Basic CSS Selectors:
```
*
element
.class
#id
ancestor descendant
selector1, selector2, ...
```

+ any combinations

## CSS Selectors Quiz:
- img
- img.large
- #reset-button
- ul#homework li
- img, a
- #reset-button, #publish-button
- #reset-button, form img.large


# Selectors

http://overapi.com/jquery/

$("css selector") => select all elements that match "css selector"

Hover returned value in console to highlight element on page.

".length" => number of matching elements.

Setup Selector Lab

Exercises:
- select all shapes
- select all black shapes
- count number of shapes
- count number of black shapes
- count number of black OR blue shapes
- select all h1 tags
- select all small circles
- select all red shapes inside the orange container
- select all medium or small shapes inside the green container
- select all shapes inside any container
- select all link tags
- select all the link tags inside an "li" tag
- count number of small blue circles


# Attributes

http://overapi.com/jquery/

attr => set and get attributes

Exercises:
- get the "href" attribute of the first link on the page
- set the "href" of all links on the page to "http://www.codecore.ca". try clicking one.
- set the "class" attribute of all links to "highlight"
- set the "class" attributes of all shapes to "highlight". What happened?

Discussion:
- What gets returns by jQuery selector?
- How to get the nth returned element.

# Manipulation

http://overapi.com/jquery/

remove
html

Exercises:
- Remove all blue shapes
- Remove all shapes in the orange container
- Remove all small red circles
- Get the html contents of the reset button.
- Try to get the html contents of all links. What happened?
- Change the reset button to read "Launch Missiles!"
- Change all the H1 tags to read "[Your Name] is Cool!"

Discussion:
- Manipulations happens to all matched elements
- Reading happens only on first


# Traversal

http://overapi.com/jquery/

children
parent

Exercises:
- Select all the shapes in the purple container using "children"
- Select the green container using "parent"
- Select all the "li" tags that contain a link.

# Effects

http://overapi.com/jquery/

hide
show

Exercises:
- Hide the purple container
- Show the purple container again (without pressing "Reset")
- Hide all the links.
- Show all the links again.

# Events

http://overapi.com/jquery/

Introduction: "When event happens to elements, run this function"

"on"

```js
$(selector).on(event, handlerFunction);

$('a').on('click', function() {
  console.log('clicked');
});
```

Most common event types:
click, mouseenter, mouseleave

Exercises:

[In an external script]

- When any shape is clicked, log "shape clicked" to the console
- When your mouse enters any blue circle, log "Blue Circle: Go away!" to the console.
- When your mouse leaves a blue circle, log "Blue Circle: Goodbye! to the console.
- When your mouse enters any "tr", set its class to "highlight".
- When your mouse leaves any "tr", clear its class.
- When 'button 1' is clicked, remove all shapes.
- When 'button 2' is clicked, disable button 2. (Use the 'disabled' attribute).
- When 'button 3' is clicked, set the button message to "Button 3 was clicked"

"this" inside of handler functions

More exercises:
- When any shape is clicked, log the value of its "class" attribute to the console.
- When any shape is clicked, hide it.
- When any shape is clicked, remove its container
- When any container is clicked, remove all the shapes inside it.
- When your mouse enters any link, log the value of its "href" attribute to the console. "Your mouse entered a link to: [href]"
- When any button is clicked, set the button message to "Button [button id] was clicked"

$(document).ready as an event

# JukeBox

Homework?

Review my solution

Add a "Play Song" button to your JukeBox. When this button is clicked:
  - Prompt the user for a song to play.
  - Disable the button
  - Set the button text to "Playing..."

When the song is finished playing, set the button text back to "Play Song" and re-enable the button.

Maybe I provide my solution from last time and they work off of that.


# Homework

Exercises on real sites, as per last time?



------------------------------------------------------------

Day 2

http://overapi.com/jquery/

# Selectors

[name]
[name="value"]
[name!="value"]
[name~="value"]


Exercises:
- Select all the links with an "href" attribute
- Select all the links to "http://www.facebook.com"
- Highlight all the links to any ".com" URL by setting their class to "highlight".
- Hide all the links NOT to "http://www.google.com"

:first-child
:last-child
:even
:odd

Exercises:
- Select the first table row
- Select the last table row
- Remove the even-numbered shapes from the green container
- Highlight the odd rows on the table
- Hide the last shape in every container

# Attributes

addClass, removeClass, toggleClass, hasClass

Exercises:
- Add the "highlight" class to all links
- Remove the "highlight" class from all links
- Toggle the "highlight" class on all links twice.
- Add the "my-own-class" class to the "body" element. Then verify it is there using "hasClass".

Exercise: Shrink Ray
  When any shape is clicked.
    If it has the "small" class, hide it.
    If it has the "medium" class, remove the "medium" class and add the "small" class.
    If it has the "large" class, remove the "large" class
    and add the "medium class."

jQuery Chaining

Exercises:
- Make all blue shapes red, using one line of code.
- Simplify your Shrink Ray using chaining.

val

Exercises:
- Set the form's text field's value to "Hello World"
- Get the form's text field's value
- When the form's "Submit" button is clicked, change "Form Message" to be the text field's value.


# Manipulation

append, prepend

Exercises:
- Append a "p" tag containing "Appended" to the "body" element.
- Prepend a "p" tag containing "Prepended" to the "body" tag.
- Append a new list item to the List, containing a link to link Amazon.com.
- Prepend a row to the table containing the columns "0" and "-"
- When the form's submit button is clicked, append the text input's current value to the form message.

# Traversal

find, next, prev

Exercises:
- Select all the red shapes in the orange container, using "find".
- Remove all the shapes just before a small red circle.
- Hide all shapes just after any gray shape.
- Make all the circles in the green container black, using "find".

# Effects

toggle, fadeOut, fadeIn, slideUp, slideDown

Exercises:
- Toggle the green container.
- Toggle the green container again.
- Fade the green container out.
- Fade the green container in.
- Slide the green container up.
- Slide the green container down.
- When "Button 1" is clicked, toggle the green container.
- When "Button 2" is clicked, fade the "Button Message" out
- When "Button 3" is clicked, fade the "Button Message" back in.
- When "Button 4" is clicked, slide the green container up.

# Events

The event object

keypress event

Demo:
- Logging each key pressed.

Exercise:
- When the 'b' key is pressed, toggle all (b)lue shapes.
  When the 'r' key is pressed, toggle all (r)ed shapes.
  When the 'k' key is pressed, toggle all blac(k) shapes.
  When the 'g' key is pressed, toggle all (g)ray shapes.

## Event bubbling

Exercise:
- When a black square is clicked log "Black Square Clicked" to the console.
  When the orange container is clicked log "Orange Container Clicked"
  Click the black square in the orange container.

  What happened? Why?


diagram

experiment with :

```js
$('*').on('click', function () { console.log(this); }
```

event.stopPropagation()

Exercise:

- Add `event.stopPropagation()` to the black square's click handler.

  What happens when you click the black square now?
  What happens when you click the orange container OUTSIDE the black square?

Exercise:

- When a link is clicked, log to the console "Link Clicked"

  What happens when you click a link? Why?

default action

event.preventDefault()

Exercise:
- Add `event.preventDefault()` to your link click handler.
  What happens when you click a link now?

# Javascript, jQuery, and Rails

Create a new Rails application with jQuery support.
Gemfile and application.js
Asset pipeline basics

# JukeBox

Homework or in class?

Add two text fields, one for name, and one for the song. When "Play" button is clicked, the song plays, "Play" button says "Playing"

Add a text field to the page, and a button called "Play". When the play button is clicked, play the song, print "Now playing [song name]" to the page, change the button text to "Playing" and disable. When the song is done, ...

Maybe give them example implementations of these? Or do it in class?

When spacebar pressed, play/pause the current song.

# Resources
- http://api.jquery.com/
- http://overapi.com/jquery/ <= Work off of this. Fill some stuff in.
- http://woorkup.com/wp-content/uploads/2011/12/jQuery-17-Visual-Cheat-Sheet1.pdf
- http://learn.jquery.com
  => core, events, ajax

# ToDo

Organize homework and put in certified.in
Organize and try out jukebox improvements
Format notes