



# Housekeeping

Update your notes repository
Find `notes/day6.md`, `exercises/chatr-client`, and `exercises/jukebox-6`



















# What is AJAX?

Asynchronous Javascript and XML (or JSON!)













Load new data from server without page refresh
Send data to the server without page refresh
(e.g. Comments, Likes on facebook.)

Allows for Rich Internet applications

Coined by Jesse James Garrett in 2005
Popular in 2005 (e.g. Google uses for gmail)

Diagram of AJAX flow





Browsers standardized XMLHttpRequest (XHR) API











# jQuery AJAX

XHR has a confusing API
XHR is not standard across browsers

jQuery makes it easier AND cross-browser compatible.

See http://overapi.com/jquery/










# jQuery AJAX vs Rails AJAX


jquery_ujs gem does some magic for you, but it's just jQuery under the hood.




Rails AJAX is useful for *very* simple things, but a pain for anything else.













# Review: HTTP methods, URLs and params


This is the *language* that browsers talk to your server in.
Very important for AJAX.

GET /messages?limit=1&q=hello

POST /messages
body=This+is+my+message
author=Mitch


Q: How does Rails handle URLs, HTTP Methods, and Params for you?
Q: How does Rails process the following request:

POST /messages
  message[body]=This+is+my+message
  message[author]=Mitch

```ruby
{
  message: {
    body: "This is my message",
    author: "Mitch"
  }
}


```











# Chatr Overview

Realtime web chat client.











# Example: Rendering "chatr" messages as JSON

- Build a new Rails app under `exercises` called `chatr_server`.
  `rails new chatr --database=postgres`

- Create a `Message` model with a `body` text field.

- Create 10 messages in the Rails console (use a loop).

- Create `MessagesController` with an `index` action.

- Make `/messages` render all the messages as JSON.

- Make `/messages` render only the most recent 5 messages.

- Go to `/messages` in the browser to view the messages.








# Postman

- Install the `postman` chrome extension

- Get messages using postman













# Example: Creating a "chatr" message

- Add a `create` action to `MessagesController` that creates a message.
  Make sure you return a 201 status.

- Create some messages using postman.

- View messages with postman and browser.











# Shared Chatr-Server

We'll use my server and write our own clients, so that we can communicate with each other.

Go to `https://secret-sea-1263.herokuapp.com/`

Walk through the server code together, especially:
  `routes.rb`, `message.rb`, `messages_controller.rb`




## Exercises
`https://secret-sea-1263.herokuapp.com/`
- Post a new message to chatr using Postman
- Get chatr messages using Postman and make sure yours is there

Put away `Postman`, we won't be using it anymore.






# jQuery GET Requests

```js
$.get(url, callback);

// Example
$.get('http://secret-sea-1263....com/messages?limit=10', function(data) {
  // Callback function gets called when the response has been received.
  // We are passed the response body as the first parameter.
  console.log(data);
});
```

Q: How can you add get parameters to the request?




# Chatr-Client

Walk through code in `exercises/chatr-client`.


## Exercises
```js
$.get('http://some-url', function(data){});
```

`GET https://secret-sea-1263.herokuapp.com/messages`
- Change `client.js` so that the number of chatr messages returned from the server is logged to the console.
- Log the most recent chatr messages to the console.
  (hint: you should log the message body, not the object itself).
- Make chatr messages appear as LIs in the message list.
- Make the message list refresh automatically every 5s.


# jQuery POST Requests

POST /messages
body=My message contents

```js
$.post(url, data);

// "data" is an object that will be converted into POST parameters.

// Example
$.post('http://some-url.com', {title: 'Happy Feet', rating: 5});
```


## Exercises
```js
$.post(url, data)
```
- Post a new message to chatr in the console. A message requires a "body".
  (hint: `POST https://secret-sea-1263.herokuapp.com/messages`)
- When the form field is submitted:
  - Post a new message to chatr.
    Your message should appear in everyone's chatr client.
  - Clear the form field.





# jQuery Utility Functions

What the $?

How are `$.get` and `$('#messages')` both valid JS?

$.get('some-url', function(){});

Demo in console using `y`





# Serializing Forms

We often want to get an object with the input names pointing to input values.
For example, in `$.post`

Can do this with `val`, but it's not convenient.

<form>
  <input type="text" name="one">
  <input type="text" name="two">
  <input type="text" name="three">
  <input type="submit">
</form>

```js
var data = {
  one: $('form input[name="one"]').val(),
  two: $('form input[name="two"]').val(),
  three: $('form input[name="three"]').val()
};
```

`serialize` makes this easy:

```js
var data = $('form').serialize();
```

## Exercise
- Change your form submit code to use `serialize` instead of `val`.




# AJAX methods are Asynchronous

What will this code log to the console?

```js
var a = "Hello";
$.get('/any-url', function(data) {
  a = "Goodbye";
});
console.log(a);
```


# Easy GET Parameters

Limiting number of messages returned in chatr:
Go to `https://secret-sea-1263.herokuapp.com/messages?limit=10` in your browser

## Exercises
- Change your client script to limit the number of messages to 50, 25, 5.
- What happens when you leave the limit value blank? Why?





`$.get` with three parameters

```js
// This...
$.get('some-url', { a: 5, b: 6}, function(data) {});

// is the same as...
$.get('some-url?a=5&b=6', function(data) {});
```

## Exercises
- Change your script to use the 3-parameter for of get to limit the number of messages to 10.









# After a POST is complete

You often want to do something after a post request is completed.

Pass an optional third argument that is a function to be called.

```js
$.post('/some-url', {a: 2, b: 'hello'}, function() {
  // I get called when the POST request is completed.
});
```


## Exercises
- Make new messages appear in your list as soon as it is submitted, instead of waiting up to 5 seconds.







# More AJAX power

`$.get` and `$.post` are convenience wrappers for `$.ajax`.

When you need more control, use `$.ajax`.

See: `http://api.jquery.com/jquery.ajax/`

```js
$.ajax({
  url: 'https://secret-sea-1263.herokuapp.com/messages',
  method: 'GET',
  data: {limit: 10},
  success: function(messages) {
    console.log(messages.length + ' messages received')
  }
});
```

"method" can be 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'


## Exercises
- Use `$.ajax` in the console to delete other people's messages.
- Use `$.ajax` in the console to change the body of other people's messages.







# Security





## The Same-Origin Policy

By default, you can't issue non-GET requests to any server not on the same domain.

Historically meant to keep scripts on other sites from doing malicious things to your server.

Easily bypassed using cross-site-scripting (XSS).

Your app can opt-in to being more open using CORS: Cross-Origin Resource Sharing.

See `chartr-server/config/application.rb`

Not needed in most cases.




## Cross-Site Request Forgery

CSRF: Cross-Site Request Forgery

See: `http://guides.rubyonrails.org/security.html`

e.g.
A user is logged in to your site A.
The user visits malicious site B.
Site B contains a script that does a DELETE request back to site A.

Rails protects against CSRF attacks by including a token on every page and requiring that the token is provided whenever a form is submitted.

Usually you don't notice this because it is handled by `form_for` for you.

### Example

- Turn protection back on in `chatr_server/app/messages_controller.rb`
- What does `csrf_meta_tags` do?
- Make chatr client work with CSRF protection on.


```js
var token = $('meta[name="csrf-token"]').attr('content');

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', token);
  }
});
```



# Jukebox 6 Walkthrough






# Homework
- Review the final Chatr and Jukebox-6 code and make sure you understand all of it.
- Jukebox-6 exercises