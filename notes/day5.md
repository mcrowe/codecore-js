# Housekeeping

Who handed in Jukebox from last time?
- Tyler, Brandyn, Merle, Ben, Paulo




# More Events

`keyup` event on input elements


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


# Asset Pipeline

- Overview
- Questions


# Turbolinks

- Why? How?
- Where is Turbolinks?
- Gotchas
- jQuery Turbolinks gem


# Delegated events

Problem: Event handlers aren't live. New elements don't work.

Example:
- Set click handler shapes.
- Add a new shape in console.

Solution: Use bubbling to delegate to a container that is always there.

```js
$('.container').on('click', '.shape', function() {
  // Works for newly created shapes!
});
```

## Exercises
- Set a delegated click handler on the orange container so that red shapes are removed when you click them.







# Basic jQuery Animations

- Adding timing parameter to effects.

`slideUp(500)`, `fadeOut('slow')`

- Introduction to Animations Lab




## Exercises [console]
- Make "item-1" slide up over 1 second.
- Make "item-2" fade out slowly using the 'slow' parameter.
- Toggle "item-3" quickly, using the 'fast' parameter.







## Sequential Animations

Example:
- Fade out item 1 in 5 seconds.
- Fade out item 2 in 5 seconds.




- How can you start one animation after another one is complete?

- `onComplete` callback as last parameter to effects.






## Exercises [script]
- Write a script that:
  - Fades out item-1 in 1 second
  - THEN fade out item-2 in 1 second
  - THEN fade out item-3 in 1 second








# Asynchronous vs. Synchronous calls

Q: Why does our `playSong` method need a callback when complete?

Asynchronous examples:
- `playSong` method, `setTimeout`, `setInterval`, animations, AJAX







# Advanced Animations

Wide world. We'll just get a taste of what's possible.

Showcase:
- Ball moves to cursor http://jsfiddle.net/RwtHn/5/
- Canvas snow effect http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect
- Keyframes http://www.impressivewebs.com/demo-files/css3-animated-scene/
- animate.css





# Prerequisite: Changing attributes dynamically.






## A) Adding / Removing classes

- 1) Create a class before-hand with the styles you will want to add.
- 2) Add that class to an element dynamically.

e.g. "highlight" class in jQuery Lab

- Pro: Keeps styling information out of JS. Can change the look without changing behaviour.







### Exercises

- Make the rocket ship twice as big by adding a class to it in the console. Now remove the class in the console.
- Make "item-1" have a red border by adding a class to it in the console. Now remove the class in the console.













## B) Setting CSS properties directly in JS

- Pro: Ultimate control

- `css` method is often more convenient than `attr('style')`

```js
// Get
$('.shape').css('left'); // => '5px'

// Update
$('.shape').css('left', '1px');
```

Be careful of units.


### Exercises
Using the `css` method:
- Get the border-width of the first list item on the page.
- Change the border color of all the list items to red.
- Write a script so that when you click a list item, its border-width is set to 10px.





CSS position absolute







### Exercises
- Make sure the rocket ship is using absolute positioning.
- Determine what container the rocket ships positioning will be relative to.
- Change the page's CSS so that the rocket ship is positioned 500px from the top and the left of the page.
- Write a script so that the rocket ship moves 10px to the right when you click it.
- [Challenge] Write a script so the rocket ship appears wherever you click on the page.








# Transitions (Tweening)






## A) Manual

Animation loop manually using setInterval.

Example: Animate width of list-item-1 with









### Exercise
- Animate the rocket ship launching into the air using an animation loop.









## B) jQuery Animate
- http://api.jquery.com/animate/
- Convenient but not great.







## C) CSS Transitions

Pro: SMOOTH!

- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions
- CSS transitions and adding classes

```css
li {
  /* 1) Set the original property value */
  opacity: 0;
  /* 2) Describe how to transition that property */
  transition: opacity 0.5s;
}

/* 3) Create a class that sets the final property value */
li.active {
  opacity: 1;
}

/* 4) The browser tweens for you! */
```

Works great with: opacity, width, height, left, top.







### Exercises:
Using a CSS transition and a helper class:
- When "Button 1" is clicked, animate the rocket ship to double its size. Make it return to its previous size when clicked again.
- When "Button 2" is clicked, animate the rocket ship to slide to the right 100 px when clicked, and back when clicked again.
- When the rocket ship is clicked, animate it to fade out (using CSS transitions).




Commonly animate by adding/removing classes.
Changing properties manually works too, though.



Example: Moving the rocket ship in the console.





### Exercises
- Use the `css` method to animate the rocket 10px to the right in the console.
- Rocket driver:
  - Make the arrow keys animate the rocket left, up, right and down.











# jQuery UI




- http://jqueryui.com/
- Experiment with site
- Sortables




## Exercises
- Make the two lists sortable
- Enable dropping items from one list into the other.






# CSS Keyframes

- For more complex, multi-step, animations.

- animate.css
- Sunrise: http://www.impressivewebs.com/demo-files/css3-animated-scene/
- References:
  - http://css-tricks.com/snippets/css/keyframe-animation-syntax/
  - http://www.smashingmagazine.com/2011/05/17/an-introduction-to-css3-keyframe-animations/
  - http://www.w3schools.com/css/css3_animations.asp

```css
/* 1) Create animation keyframes */
@keyframes drive {
  0%    { left: 0; bottom: 0; }
  50%   { left: 0; bottom: 200px; }
  100%  { left: 200px; bottom: 200px; }
}

/* 2) Create a class to add the animations dynamically */
#rocket.animate {
  animation: drive 5s;
}

/* 3) Add -webkit- prefixes */
```

## Exercise
- Make your own crazy 'drive' animation for the rocket ship, and execute it when "button-1" is clicked.







# Vendor prefixing
- http://pleeease.io/play/
- http://leaverou.github.io/prefixfree/






# Canvas
- Snow Effect: http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect





# Homework
- Jukebox in class
- Credit Card validator
