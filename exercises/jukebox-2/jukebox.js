// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
var promptAndPlay = function() {
  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);
  playSong(song, 500, promptAndPlay);
};

// Get things going.
promptAndPlay();