# Housekeeping

- Clone class github repo
- Handing in homework
- In class exercises




# Why jQuery?

- DOM made easy
- Cross-browser compatibility
- Overwhelmingly popular






# What can jQuery do?

1. Select element(s)
2. Manipulate selected elements
3. Add event listeners to selected elements
4. AJAX (next week)






# Overview

- http://overapi.com/jquery/
- Will go through each section twice






# First jQuery Page

- Create a new HTML page containing:

```html
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $('h1').html('Welcome to jQuery!');
      });
    </script>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
  </body>
</html>
```



# Review: Dissecting an HTML element

- Element, Attributes, Content, id, class





# Review: Basic CSS Selectors

*
element
.class
#id
ancestor descendant
selector1, selector2, ...

+ any combinations






## CSS Selectors Quiz:

What does each of the following selectors do?

- img
- img.large
- #reset-button
- ul#homework li
- img, a
- #reset-button, #publish-button
- #reset-button, form img.large






# Selectors

See: http://overapi.com/jquery/

```js
$('css selector')
```

Selects all elements that match "css selector"

Example:

```js
// Go to Amazon.com and type:
$('img')

// Now, hover over the returned value in the console to highlight that element on the page.

// Now type:
$('img').length
```

- .length

- Setup Selector Lab and review HTML/CSS

## Exercises

- Select all shapes
- Select all black shapes
- Count the number of shapes
- Count the number of black shapes
- Count the number of black OR blue shapes
- Select all h1 tags
- Select all small circles
- Select all red shapes inside the orange container
- Select all medium or small shapes inside the green container
- Select all shapes inside any container
- Select all link tags
- Select all the link tags inside an "li" tag
- Count the number of small blue circles


# Attributes

http://overapi.com/jquery/

- attr: Set and Get attributes on one or more elements.

```js
// Get the value of "src" attribute.
$('img').attr('src');

// Set the value of "src" attribute.
$('img').attr('src', 'http://google.com/logo.png');
```


## Exercises

- Get the "href" attribute of the first link on the page
- Set the "href" attribute of all links on the page to "http://www.codecore.ca". Try clicking one.
- Set the "class" attribute of all links to "highlight"
- Set the "class" attributes of all shapes to "highlight". What happened?



## Discussion

- Manipulations happens to all matched elements
- Reading happens only on first matched element
- What gets returns by jQuery's selector method?
- How to get the nth returned element.
- Setting "class" attribute erases existing classes.










# Manipulation

http://overapi.com/jquery/

- remove
- html

## Exercises

- Remove all blue shapes
- Remove all shapes in the orange container
- Remove all small red circles
- Get the html contents of the reset button.
- Try to get the html contents of all links. What happened?
- Change the reset button to read "Launch Missiles!"
- Change all the H1 tags to read "[Your Name] is Cool!"

## Discussion

- Manipulations happens to all matched elements
- Reading happens only on first





# Traversal

http://overapi.com/jquery/

- children
- parent

## Exercises

[In the console]

- Select all the shapes in the purple container using "children"
- Select the green container using "parent"
- Select all the "li" tags that contain a link.









# Effects

http://overapi.com/jquery/

- hide
- show

## Exercises

- Hide the purple container
- Show the purple container again (without pressing "Reset")
- Hide all the links.
- Show all the links again.







# Events

http://overapi.com/jquery/

- "When event happens to elements, run this function"

- on

```js
$(selector).on(event, handlerFunction);

$('a').on('click', function() {
  console.log('clicked');
});
```

- anatomy of "on"

Most common event types:
  - click
  - mouseenter
  - mouseleave

## Exercises

[In an external script]

- When any shape is clicked, log "shape clicked" to the console
- When your mouse enters any blue circle, log "Blue Circle: Go away!" to the console.
- When your mouse leaves a blue circle, log "Blue Circle: Goodbye! to the console.
- When your mouse enters any "tr", set its class to "highlight".
- When your mouse leaves any "tr", set its class to "".
- When 'button 1' is clicked, remove all shapes.
- When 'button 2' is clicked, disable button 2. (Set the 'disabled' attribute to true).
- When 'button 3' is clicked, set the button message to "Button 3 was clicked"



- `this` inside of handler functions



## More Exercises

- When any shape is clicked, log the value of its "class" attribute to the console.
- When any shape is clicked, hide it.
- When any shape is clicked, remove its container
- When any container is clicked, remove all the shapes inside it.
- When your mouse enters any link, log the value of its "href" attribute to the console. "Your mouse entered a link to: [href]"
- When any button is clicked, set the button message to "Button [button id] was clicked"



- $(document).ready as an event





# Homework

- See `jukebox-2` in class repo
- Review solution & common mistakes
- Work on in class; hand in on Certified.in
- Other exercises in Certified.in

