// Add a song with the given title and notes to the library.
var addSongToLibrary = function(id, title, notes) {
  $('#library-list').append("<li data-song-id='" + id + "'>" +
                              "<i class='fa fa-bars'></i>" +
                              "<i class='fa fa-trash'></i>" +
                              "<span class='title'>" + title + "</span>" +
                              "<div class='notes'>" + notes + "</div>" +
                            "</li>");
};

// Play all songs in the playlist.
var playAll = function() {
  var bpm = 600;

  // Grab the top song in the queue, parse its notes and play them.
  // Then recurse until there are no more songs left in the queue.
  //
  var playNext = function() {
    var songItem = $('#playlist-list li:first-child');

    if (songItem.length == 0) {
      // No more songs.

      // Re-enable the play button.
      $('#play-button').attr('disabled', false).text('Play All');

      // Fade out the message.
      $('#message').fadeOut();
      return;
    }

    var title = songItem.find('.title').text();
    var notes = songItem.find('.notes').text();
    var song = parseSong(notes);

    $('#message').html("Now playing: <strong>" + title + "</strong>").show();

    playSong(song, bpm, function() {
      songItem.remove();
      $('#library-list').append(songItem);
      playNext();
    });
  };

  // Disable the play button to start.
  $('#play-button').attr('disabled', true).text('Playing');

  playNext();
}

$(document).ready(function() {

  // Play all songs in the playlist when the "play" button is clicked.
  $('#play-button').on('click', playAll);

  // When the page loads, make the message fade in over 0.8s. Then, after 3s
  // have passed, fade out the message over 0.8s.
  $('#message').fadeIn(800).delay(3000).fadeOut(800);

  // When you double click a song, the notes should slide down over 0.3 second.
  $('ul').on('dblclick', 'span.title', function() {
    $(this).siblings('.notes').slideToggle(300);
  });

  // Remove songs when their delete icons are clicked.
  $('ul').on('click', '.fa-trash', function() {
    var target = $(this).parent();

    target.slideUp(500, function() {
      $(target).remove();
    });
  });

  // Allow dragging, dropping, and sorting songs between the Library and the Playlist.
  $('#playlist-list, #library-list').sortable({connectWith: 'ul'}).disableSelection();

});