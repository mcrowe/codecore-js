// Add some songs to the library.
var initializeLibrary = function() {
  var library = [
    {title: 'C Major Scale', notes: 'A B C D E F G' },
    {title: 'Chromatic Scale', notes: 'A A# B C C# D D# E F F# G G#' },
    {title: 'Random Song', notes: 'A B*2 C D A*4 D E*2 F A B A A*2' },
    {title: 'Adup Licate', notes: 'A B*2 C D A*4 D E*2 F A B A A*2' },
    {title: 'Yankee Doodle', notes: 'C F*4 C F*4 B C D A*2 B*2 A B*2 C' }
  ];

  for(var i=0; i < library.length; i+=1) {
    var song = library[i];

    $('#library-list').append("<li>" +
                                "<i class='fa fa-bars'></i>" +
                                "<span class='title'>" + song.title + "</span>" +
                                "<div class='notes'>" + song.notes + "</div>" +
                              "</li>");
  }
};


// Grab the top song in the queue, parse its notes and play them.
// Then recurse until there are no more songs left in the queue.
//
var playNextSong = function() {
  var songItem = $('#playlist-list li:first-child');

  if (songItem.length == 0) {
    $('.alert').fadeOut();
    return;
  }

  var title = songItem.find('.title').text();
  var notes = songItem.find('.notes').text();

  $('.alert').html("Now playing: <strong>" + title + "</strong>").show();

  playSong( parseSong(notes), 600, function() {
    songItem.remove();
    $('#library-list').append(songItem);
    playNextSong();
  });
};


$(document).ready(function() {

  initializeLibrary();

  // Play playlist on "play".
  $('#play').on('click', playNextSong);

  // Filter library results.
  $('#filter-library').on('keyup', function() {
    var query = $(this).val();
    $('#library-list li').hide();
    $('#library-list li:contains(' + query + ')').show();
  });

  // Sortable / Draggable lists.
  $("#library-list").sortable({ connectWith: '#playlist-list'})
  $("#playlist-list").sortable({ connectWith: '#library-list'});

  // Double-click to view notes.
  $('li').on('dblclick', function() {
    $(this).find('.notes').slideToggle(300);
  });

});