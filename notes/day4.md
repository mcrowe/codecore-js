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