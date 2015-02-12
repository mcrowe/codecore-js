# What are we going for?

Demo of final version





# Setup

Install gems
`bundle`

Create and migrate database.
Also run seeds in `db/seeds.rb` to create 100 random songs.
`rake db:setup`

Now start the server and make sure everything is working
`rails server`
visit `localhost:3000` in your browser.





# What are we starting with?

Tour of:
- `routes.rb`, `home_controller.rb`, `home/index.html.erb`, `layouts/application.html.erb`
- `player.js`, `jukebox.js`, `jukebox.css`
- `song.rb`, `song_controller.rb`





# Getting songs in the library

- Render the 100 most recent songs when we go to `/songs`.
- Allow limiting the number of songs removed with the `limit` GET parameter.
- Load the 20 most recent songs into the library when the app is loaded.






# Filtering the library

- Allow searching for songs by title using GET parameter `q`.
- Filter songs in the library on keyup of the filter field.




# Make jQuery work with Rails' CSRF protection

```js
var token = $('meta[name="csrf-token"]').attr('content');

  $.ajaxSetup({
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-CSRF-Token', token);
    }
  });
```




# Deleting songs

- When the trash icon for a song is clicked, remove it from the database.







# Creating new songs

- When the song form is submitted:
  - Create a new song.
  - Clear the form fields.
  - Refresh the library so that the new song appears.




# Exercises
- Show users a confirmation dialog before deleting songs. If they click 'cancel', don't delete the song.
- Simulate a slow server by adding `sleep 1` to `songs_controller#index`. Now show a loading spinner while the song list is being loaded to make the user experience better. (See http://fgnass.github.io/spin.js/)
- Make a way for users to update a song's name, using the `$.ajax` method.