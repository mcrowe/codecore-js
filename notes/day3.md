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

