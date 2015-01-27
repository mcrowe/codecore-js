http://overapi.com/jquery/


# Selectors

```
[name]
[name="value"]
[name!="value"]
[name~="value"]
```

## Exercises [console]

- Select all the links with any "href" attribute
- Select all the links to "http://www.facebook.com"
- Highlight all the links to any ".com" URL by setting their class to "highlight".
- Hide all the links NOT to "http://www.google.com"


```
:first-child
:last-child
:even
:odd
```


## More Exercises [console]

- Select the first table row
- Select the last table row
- Remove the even-numbered shapes from the green container
- Highlight the odd rows on the table
- Hide the last shape in every container











# Attributes

`addClass`, `removeClass`, `toggleClass`, `hasClass`

## Exercises

- Add the "highlight" class to all links
- Remove the "highlight" class from all links
- Toggle the "highlight" class on all links. Toggle again.
- Add the "my-own-class" class to the "body" element. Then verify it is there using "hasClass".

*script:*

- When any container is clicked, add the "highlight" class to all the shapes in that container.
- When your mouse enters a shape, toggle the "highlight" class.

- Build a "Shrink Ray"

  When any shape is clicked do the following:
  - If the shape has the "small" class, hide it.
  - If it has the "medium" class, remove the "medium" class and add the "small" class.
  - If it has the "large" class, remove the "large" class and add the "medium class."


jQuery Chaining


## More Exercises

- Change the colour of all blue shapes to red, using one line of code.
- Change all the small red circles into large grey squares, using one line of code.
- Simplify your Shrink Ray using chaining.


`val`


## More Exercises

*console:*

- Set the value of the text field in the form to "Hello World"
- Get the value of the text field in the form

*script:*

- When the form's "Submit" button is clicked, change the contents of "Form Message" to be the text field's value.












# Manipulation

`append`, `prepend`

## Exercises

*console:*

- Append a "p" tag containing "Appended" to the "body" element.
- Prepend a "p" tag containing "Prepended" to the "body" tag.
- Append a new list item to the List, containing a link to link Amazon.com.
- Prepend a row to the table containing the columns "0" and "-"

*script:*

- When the form's submit button is clicked, append the text input's current value to the form message.



```js
$('button').attr('disabled', '')
```





# Traversal

`find`, `next`, `prev`

## Exercises [console]

- Select all the red shapes in the orange container, using "find".
- Remove all the shapes just before a small red circle.
- Hide all shapes just after any gray shape.
- Make all the circles in the green container black, using "find".













# Effects

`toggle`, `fadeOut`, `fadeIn`, `slideUp`, `slideDown`

## Exercises

*console:*

- Toggle the green container.
- Toggle the green container again.
- Fade the green container out.
- Fade the green container in.
- Slide the green container up.
- Slide the green container down.

*script:*

- When "Button 1" is clicked, toggle the green container.
- When "Button 2" is clicked, fade the "Button Message" out
- When "Button 3" is clicked, fade the "Button Message" back in.
- When "Button 4" is clicked, slide the green container up.








# Events

The event object in handler functions.

`keypress` event

## Demo
- Logging each key pressed.


## Exercises [script]

- When the 'b' key is pressed, toggle all (b)lue shapes.
- When the 'r' key is pressed, toggle all (r)ed shapes.
- When the 'k' key is pressed, toggle all blac(k) shapes.
- When the 'g' key is pressed, toggle all (g)ray shapes.

- When the spacebar key is pressed, append a small blue circle to the green container.


`change` event on input elements

## Demo
- Logging as typing in field.

## Exercises [script]

- As you type in the text input, change the "Form Message" to be the same as what you type.
- As you type in the text input, change the "Form Message" to be the REVERSE of what you type.
- Make the "Form Message" show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").



`submit` event on form elements

## Exercises [script]

- When the form is submitted, clear the text in the input field.

- Shape Destroyer:
  The user can enter a color into the input field. When they click "submit":
  - All shapes matching the given color should be removed.
  - If they enter an invalid color show them an alert message telling them this.
  - Clear the input field.








## Event bubbling

### Experiment [script]

- When a black square is clicked log "Black Square Clicked" to the console.
- When the orange container is clicked log "Orange Container Clicked"
- Click the black square in the orange container.
- What happened? Why?

### Discussion

- Event bubbling
- Diagram of event bubbling
- See bubbling.html demo
- `event.stopPropagation()`


### Exercise

- Add `event.stopPropagation()` to the black square's click handler.

  What happens when you click the black square now?
  What happens when you click the orange container OUTSIDE the black square?




## Default Action

### Experiment

- When a link is clicked, log to the console "Link Clicked"
- What happens when you click a link? Why?


### Discussion

- default action (links and forms)
- `event.preventDefault()`


### Exercise

- Add `event.preventDefault()` to your link click handler.
- What happens when you click a link now?





# Javascript, jQuery, and Rails

- Create a new Rails application with jQuery support.
- Gemfile and application.js
- Asset pipeline basics






# Resources

- http://api.jquery.com/
- http://overapi.com/jquery/
- http://woorkup.com/wp-content/uploads/2011/12/jQuery-17-Visual-Cheat-Sheet1.pdf
- http://learn.jquery.com (core, events, ajax)


# Homework

- Jukebox 3
- Certified.in


